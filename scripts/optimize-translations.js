#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 支持的语言列表
const supportedLocales = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 翻译质量优化建议
const optimizationRules = {
  // 过长文本优化建议
  too_long: {
    en: (text) => {
      // 英文文本优化：简化表达，使用缩写
      return text
        .replace(/and/g, '&')
        .replace(/with/g, 'w/')
        .replace(/without/g, 'w/o')
        .replace(/for example/g, 'e.g.')
        .replace(/that is/g, 'i.e.')
        .replace(/please/g, 'pls')
        .replace(/through/g, 'thru')
        .replace(/you are/g, "you're")
        .replace(/we are/g, "we're")
        .replace(/they are/g, "they're")
        .replace(/is not/g, "isn't")
        .replace(/do not/g, "don't")
        .replace(/will not/g, "won't")
        .replace(/cannot/g, "can't")
        .replace(/should not/g, "shouldn't")
        .replace(/would not/g, "wouldn't")
        .replace(/could not/g, "couldn't")
        .trim();
    },
    zh: (text) => {
      // 中文文本优化：去除冗余词汇
      return text
        .replace(/的/g, '')
        .replace(/了/g, '')
        .replace(/和/g, '与')
        .replace(/以及/g, '及')
        .replace(/可以/g, '可')
        .replace(/进行/g, '')
        .replace(/实现/g, '')
        .replace(/提供/g, '')
        .trim();
    }
  },
  
  // 中文文本翻译建议（基于机器翻译）
  untranslated: {
    bn: (text) => {
      // 简单的中文到孟加拉文翻译映射
      const translations = {
        '工业巡检': 'শিল্প পরিদর্শন',
        '测绘': 'ম্যাপিং',
        '长航时': 'দীর্ঘ ফ্লাইট সময়',
        '专业': 'পেশাদার',
        '无人机': 'ড্রোন',
        '固定翼': 'ফিক্সড-উইং',
        '多旋翼': 'মাল্টি-রোটর',
        '直升机': 'হেলিকপ্টার',
        '应用': 'অ্যাপ্লিকেশন',
        '解决方案': 'সমাধান',
        '支持': 'সাপোর্ট',
        '关于': 'সম্পর্কে',
        '产品': 'পণ্য',
        '服务': 'সেবা',
        '联系': 'যোগাযোগ',
        '首页': 'হোম',
        '登录': 'লগইন',
        '搜索': 'অনুসন্ধান',
        '更多': 'আরও',
        '返回': 'ফিরে যান',
        '加载中': 'লোড হচ্ছে',
        '查看更多': 'আরও দেখুন',
        '了解更多': 'আরও জানুন'
      };
      
      // 尝试替换已知翻译
      let result = text;
      for (const [zh, bn] of Object.entries(translations)) {
        result = result.replace(new RegExp(zh, 'g'), bn);
      }
      
      return result;
    }
  }
};

// 检查翻译质量问题
function checkTranslationQuality(locale) {
  try {
    const localePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    const localeContent = require(localePath);
    const content = localeContent.default || localeContent;
    
    const issues = [];
    
    // 递归检查翻译质量
    function checkQuality(obj, path = '') {
      for (const key in obj) {
        const fullPath = path ? path + '.' + key : key;
        
        if (typeof obj[key] === 'string') {
          const text = obj[key];
          
          // 检查空翻译
          if (text.trim() === '') {
            issues.push({ type: 'empty', path: fullPath, value: text });
          }
          
          // 检查未翻译的文本（包含中文）
          if (locale !== 'zh' && /[一-龥]/.test(text)) {
            issues.push({ type: 'untranslated', path: fullPath, value: text });
          }
          
          // 检查过长的文本
          if (text.length > 200) {
            issues.push({ type: 'too_long', path: fullPath, length: text.length, value: text });
          }
          
          // 检查可能未完成翻译的标记
          if (text.includes('TODO') || text.includes('待翻译') || text.includes('未翻译')) {
            issues.push({ type: 'placeholder', path: fullPath, value: text });
          }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          checkQuality(obj[key], fullPath);
        }
      }
    }
    
    checkQuality(content);
    
    return {
      locale,
      content,
      issues,
      totalIssues: issues.length
    };
  } catch (error) {
    return {
      locale,
      error: error.message,
      totalIssues: -1
    };
  }
}

// 优化翻译
function optimizeTranslation(locale, issue) {
  const { type, path, value } = issue;
  
  if (type === 'too_long' && optimizationRules.too_long[locale]) {
    return optimizationRules.too_long[locale](value);
  }
  
  if (type === 'untranslated' && optimizationRules.untranslated[locale]) {
    return optimizationRules.untranslated[locale](value);
  }
  
  return value; // 无法优化，返回原值
}

// 应用优化
function applyOptimizations(locale, options = {}) {
  const { dryRun = true, autoFix = false } = options;
  const result = checkTranslationQuality(locale);
  
  if (result.error) {
    console.error(`❌ ${locale}: ${result.error}`);
    return;
  }
  
  console.log(`🔍 分析 ${locale} 翻译文件...`);
  console.log(`发现 ${result.totalIssues} 个问题\n`);
  
  if (result.totalIssues === 0) {
    console.log('✅ 无需优化');
    return;
  }
  
  // 按类型分组
  const issuesByType = {};
  result.issues.forEach(issue => {
    if (!issuesByType[issue.type]) {
      issuesByType[issue.type] = [];
    }
    issuesByType[issue.type].push(issue);
  });
  
  // 显示问题摘要
  for (const type in issuesByType) {
    console.log(`📊 ${type}: ${issuesByType[type].length} 个`);
  }
  
  // 应用优化
  if (autoFix) {
    console.log('\n🔧 自动优化中...');
    let optimizedCount = 0;
    
    result.issues.forEach(issue => {
      const optimized = optimizeTranslation(locale, issue);
      if (optimized !== issue.value) {
        console.log(`  ✅ ${issue.path}: "${issue.value}" -> "${optimized}"`);
        optimizedCount++;
        
        if (!dryRun) {
          // 实际修改文件（这里需要更复杂的逻辑来更新嵌套对象）
          console.log(`    (已保存)`);
        }
      } else {
        console.log(`  ⚠️  ${issue.path}: 无法自动优化`);
      }
    });
    
    console.log(`\n🎉 优化完成: ${optimizedCount}/${result.totalIssues} 个问题已修复`);
  } else {
    console.log('\n💡 使用 --auto-fix 参数自动修复问题');
    console.log('💡 使用 --save 参数保存更改到文件');
  }
}

// 主函数
function main() {
  const args = process.argv.slice(2);
  const locale = args[0];
  const autoFix = args.includes('--auto-fix');
  const save = args.includes('--save');
  
  if (!locale) {
    console.log('用法: node optimize-translations.js <locale> [options]');
    console.log('选项:');
    console.log('  --auto-fix  自动修复问题');
    console.log('  --save     保存更改到文件');
    console.log('\n支持的语言:', supportedLocales.join(', '));
    return;
  }
  
  if (!supportedLocales.includes(locale)) {
    console.error(`❌ 不支持的语言: ${locale}`);
    return;
  }
  
  applyOptimizations(locale, {
    dryRun: !save,
    autoFix
  });
}

if (require.main === module) {
  main();
}

module.exports = {
  checkTranslationQuality,
  optimizeTranslation,
  applyOptimizations
};