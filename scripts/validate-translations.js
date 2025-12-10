#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { translationTemplate } = require('../src/i18n/template.js');

// 支持的语言列表
const supportedLocales = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 检查对象键值是否存在
function checkKeys(obj, template, path = '') {
  const missingKeys = [];
  const extraKeys = [];
  
  // 检查缺失的键
  for (const key in template) {
    if (!(key in obj)) {
      missingKeys.push(`${path}${key}`);
    } else if (typeof template[key] === 'object' && typeof obj[key] === 'object') {
      const nested = checkKeys(obj[key], template[key], `${path}${key}.`);
      missingKeys.push(...nested.missing);
      extraKeys.push(...nested.extra);
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
  
  return { missingKeys, extraKeys };
}

// 验证单个语言文件
function validateLocale(locale) {
  try {
    const localePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    const localeContent = require(localePath);
    
    // 处理ES6模块导出
    const content = localeContent.default || localeContent;
    
    const { missingKeys, extraKeys } = checkKeys(content, translationTemplate, `${locale}.`);
    
    return {
      locale,
      missingKeys,
      extraKeys,
      isValid: missingKeys.length === 0 && extraKeys.length === 0
    };
  } catch (error) {
    return {
      locale,
      error: error.message,
      isValid: false
    };
  }
}

// 生成修复建议
function generateFixes(validationResult) {
  const { locale, missingKeys, extraKeys, error } = validationResult;
  
  if (error) {
    return `语言文件 ${locale} 加载失败: ${error}`;
  }
  
  let fixes = [];
  
  if (missingKeys.length > 0) {
    fixes.push(`缺失 ${missingKeys.length} 个键值:\n${missingKeys.slice(0, 10).join('\n')}${missingKeys.length > 10 ? '\n... 还有 ' + (missingKeys.length - 10) + ' 个' : ''}`);
  }
  
  if (extraKeys.length > 0) {
    fixes.push(`多余 ${extraKeys.length} 个键值:\n${extraKeys.slice(0, 10).join('\n')}${extraKeys.length > 10 ? '\n... 还有 ' + (extraKeys.length - 10) + ' 个' : ''}`);
  }
  
  return fixes.join('\n\n');
}

// 主函数
function main() {
  console.log('🔍 开始验证翻译文件结构...\n');
  
  const results = [];
  let hasErrors = false;
  
  for (const locale of supportedLocales) {
    const result = validateLocale(locale);
    results.push(result);
    
    if (!result.isValid) {
      hasErrors = true;
      console.log(`❌ ${locale}: ${generateFixes(result)}\n`);
    } else {
      console.log(`✅ ${locale}: 结构验证通过\n`);
    }
  }
  
  if (hasErrors) {
    console.log('\n💡 请修复上述问题后重新运行验证');
    process.exit(1);
  } else {
    console.log('\n🎉 所有语言文件结构验证通过！');
  }
}

if (require.main === module) {
  main();
} else {
  main();
}