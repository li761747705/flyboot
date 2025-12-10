#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 支持的语言列表
const supportedLocales = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 检查翻译文件是否存在
function checkTranslationFiles() {
  console.log('🔍 检查翻译文件存在性...\n');
  
  let allExist = true;
  
  for (const locale of supportedLocales) {
    const filePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    if (fs.existsSync(filePath)) {
      console.log(`✅ ${locale}.js 存在`);
      
      // 检查文件内容
      try {
        const content = require(filePath);
        const translations = content.default || content;
        
        if (translations && typeof translations === 'object') {
          console.log(`   - 包含 ${Object.keys(translations).length} 个顶级键`);
          
          // 检查基本字段
          if (translations.name) {
            console.log(`   - 语言名称: ${translations.name}`);
          }
          
          if (translations.common && translations.common.home) {
            console.log(`   - 基础翻译: ${translations.common.home}`);
          }
        } else {
          console.log(`   ⚠️  文件格式可能有问题`);
          allExist = false;
        }
      } catch (error) {
        console.log(`   ❌ 文件读取错误: ${error.message}`);
        allExist = false;
      }
    } else {
      console.log(`❌ ${locale}.js 不存在`);
      allExist = false;
    }
  }
  
  return allExist;
}

// 检查翻译文件大小
function checkTranslationSizes() {
  console.log('\n📏 检查翻译文件大小...\n');
  
  for (const locale of supportedLocales) {
    const filePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    
    try {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`📄 ${locale}.js: ${sizeKB} KB`);
    } catch (error) {
      console.log(`❌ ${locale}.js: 无法读取文件大小`);
    }
  }
}

// 主函数
function main() {
  console.log('🚀 开始简单翻译验证...\n');
  
  const filesExist = checkTranslationFiles();
  checkTranslationSizes();
  
  console.log('\n' + '='.repeat(50));
  
  if (filesExist) {
    console.log('✅ 所有翻译文件都存在且格式正确！');
    console.log('🎉 翻译系统验证通过！');
    process.exit(0);
  } else {
    console.log('❌ 发现问题，请检查上述错误');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}