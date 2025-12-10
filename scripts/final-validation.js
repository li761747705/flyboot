#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { translationTemplate } = require('../src/i18n/template.js');

// 支持的语言列表
const supportedLocales = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 检查对象键值是否存在
function checkKeys(obj, template, path = '') {
  const missingKeys = [];
  const emptyKeys = [];
  const extraKeys = [];
  
  // 检查缺失的键
  for (const key in template) {
    if (!(key in obj)) {
      missingKeys.push(`${path}${key}`);
    } else if (typeof template[key] === 'object' && typeof obj[key] === 'object') {
      const nested = checkKeys(obj[key], template[key], `${path}${key}.`);
      missingKeys.push(...nested.missing);
      emptyKeys.push(...nested.empty);
      extraKeys.push(...nested.extra);
    } else if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
      emptyKeys.push(`${path}${key}`);
    }
  }
  
  // 检查多余的键
  for (const key in obj) {
    if (!(key in template)) {
      extraKeys.push(`${path}${key}`);
    } else if (typeof obj[key] === 'object' && typeof template[key] === 'object') {
      const nested = checkKeys(obj[key], template[key], `${path}${key}.`);
      extraKeys.push(...nested.extra);
    }
  }
  
  return { missingKeys, emptyKeys, extraKeys };
}

// 验证单个语言文件
function validateLocale(locale) {
  try {
    const localePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    const localeContent = require(localePath);
    
    // 处理ES6模块导出
    const content = localeContent.default || localeContent;
    
    const { missingKeys, emptyKeys, extraKeys } = checkKeys(content, translationTemplate, `${locale}.`);
    
    // 检查翻译质量
    const qualityIssues = checkTranslationQuality(content, locale);
    
    return {
      locale,
      missingKeys,
      emptyKeys,
      extraKeys,
      qualityIssues,
      isValid: missingKeys.length === 0 && emptyKeys.length === 0 && extraKeys.length === 0 && qualityIssues.length === 0,
      totalIssues: missingKeys.length + emptyKeys.length + extraKeys.length + qualityIssues.length
    };
  } catch (error) {
    return {
      locale,
      error: error.message,
      isValid: false,
      totalIssues: 999
    };
  }
}

// 检查翻译质量
function checkTranslationQuality(content, locale) {
  const issues = [];
  
  function traverse(obj, path = '') {
    for (const key in obj) {
      const fullPath = path ? `${path}.${key}` : key;
      
      if (typeof obj[key] === 'string') {
        const text = obj[key];
        
        // 检查空值
        if (!text || text.trim() === '') {
          issues.push(`${fullPath}: 空翻译`);
        }
        
        // 检查过长的文本（针对不同语言）
        if (locale === 'en' && text.length > 200) {
          issues.push(`${fullPath}: 英文文本过长 (${text.length} 字符)`);
        }
        
        if (locale === 'zh' && text.length > 100) {
          issues.push(`${fullPath}: 中文文本过长 (${text.length} 字符)`);
        }
        
        // 检查是否包含未翻译的中文（非中文语言）
        if (locale !== 'zh' && locale !== 'zh-hk' && /[\u4e00-\u9fff]/.test(text)) {
          issues.push(`${fullPath}: 包含未翻译的中文字符`);
        }
        
        // 检查是否包含未翻译的英文（非英文语言）
        if (locale !== 'en' && /[a-zA-Z]{3,}/.test(text) && !/https?:\/\//.test(text)) {
          issues.push(`${fullPath}: 可能包含未翻译的英文单词`);
        }
        
        // 检查特殊字符
        if (text.includes('undefined') || text.includes('null')) {
          issues.push(`${fullPath}: 包含未定义值`);
        }
        
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        traverse(obj[key], fullPath);
      }
    }
  }
  
  traverse(content);
  return issues;
}

// 生成验证报告
function generateReport(results) {
  console.log('\n📊 翻译验证报告');
  console.log('=' .repeat(50));
  
  let totalIssues = 0;
  let perfectLanguages = 0;
  
  results.forEach(result => {
    totalIssues += result.totalIssues;
    
    if (result.isValid) {
      perfectLanguages++;
      console.log(`✅ ${result.locale}: 完美！无问题`);
    } else {
      console.log(`❌ ${result.locale}: 发现 ${result.totalIssues} 个问题`);
      
      if (result.error) {
        console.log(`   错误: ${result.error}`);
      } else {
        if (result.missingKeys.length > 0) {
          console.log(`   缺失键值: ${result.missingKeys.length} 个`);
          if (result.missingKeys.length <= 5) {
            result.missingKeys.forEach(key => console.log(`     - ${key}`));
          }
        }
        
        if (result.emptyKeys.length > 0) {
          console.log(`   空翻译: ${result.emptyKeys.length} 个`);
          if (result.emptyKeys.length <= 5) {
            result.emptyKeys.forEach(key => console.log(`     - ${key}`));
          }
        }
        
        if (result.extraKeys.length > 0) {
          console.log(`   多余键值: ${result.extraKeys.length} 个`);
          if (result.extraKeys.length <= 5) {
            result.extraKeys.forEach(key => console.log(`     - ${key}`));
          }
        }
        
        if (result.qualityIssues.length > 0) {
          console.log(`   质量问题: ${result.qualityIssues.length} 个`);
          if (result.qualityIssues.length <= 5) {
            result.qualityIssues.forEach(issue => console.log(`     - ${issue}`));
          }
        }
      }
    }
    console.log('');
  });
  
  console.log('=' .repeat(50));
  console.log(`📈 总计: ${perfectLanguages}/${supportedLocales.length} 种语言完美`);
  console.log(`🔍 总问题数: ${totalIssues}`);
  
  if (totalIssues === 0) {
    console.log('🎉 恭喜！所有翻译文件都通过了验证！');
  } else {
    console.log('💡 建议运行 npm run i18n:optimize 修复质量问题');
  }
  
  return totalIssues === 0;
}

// 主函数
function main() {
  console.log('🔍 开始最终翻译验证...\n');
  
  const results = [];
  
  for (const locale of supportedLocales) {
    console.log(`📝 验证 ${locale} 语言...`);
    const result = validateLocale(locale);
    results.push(result);
  }
  
  const allPerfect = generateReport(results);
  
  if (allPerfect) {
    console.log('\n🚀 所有翻译文件已准备就绪！');
    process.exit(0);
  } else {
    console.log('\n⚠️  发现问题，请查看上述报告');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}