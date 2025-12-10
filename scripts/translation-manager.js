#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 简单的命令行解析，避免依赖问题
function parseArgs() {
  const args = process.argv.slice(2);
  return {
    command: args[0],
    subCommand: args[1],
    options: args.slice(2)
  };
}

// 支持的语言列表
const SUPPORTED_LOCALES = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 翻译文件目录
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');

// 递归获取对象的所有键路径
function getKeyPaths(obj, prefix = '') {
  const paths = [];
  for (const key in obj) {
    const fullPath = prefix ? prefix + '.' + key : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      paths.push(...getKeyPaths(obj[key], fullPath));
    } else {
      paths.push(fullPath);
    }
  }
  return paths;
}

// 从键路径设置对象值
function setNestedValue(obj, keyPath, value) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
}

// 获取嵌套对象的值
function getNestedValue(obj, keyPath) {
  const keys = keyPath.split('.');
  let current = obj;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return undefined;
    }
  }
  
  return current;
}

// 读取翻译文件
function readTranslationFile(locale) {
  try {
    const filePath = path.join(LOCALES_DIR, `${locale}.js`);
    // 使用绝对路径
    const absolutePath = path.resolve(filePath);
    const content = require(absolutePath);
    return content.default || content;
  } catch (error) {
    console.error(`读取 ${locale} 翻译文件失败:`, error.message);
    return null;
  }
}

// 写入翻译文件
function writeTranslationFile(locale, data) {
  try {
    const filePath = path.join(LOCALES_DIR, `${locale}.js`);
    const content = `export default ${JSON.stringify(data, null, 2)};`;
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`写入 ${locale} 翻译文件失败:`, error.message);
    return false;
  }
}

// 列出所有翻译键
function listKeys(locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return [];
  
  return getKeyPaths(translations);
}

// 查找翻译键
function findKeys(pattern, locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return [];
  
  const allKeys = getKeyPaths(translations);
  const regex = new RegExp(pattern, 'i');
  
  return allKeys.filter(key => regex.test(key));
}

// 获取翻译值
function getValue(key, locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return null;
  
  return getNestedValue(translations, key);
}

// 设置翻译值
function setValue(key, value, locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return false;
  
  setNestedValue(translations, key, value);
  return writeTranslationFile(locale, translations);
}

// 删除翻译键
function deleteKey(key, locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return false;
  
  const keys = key.split('.');
  let current = translations;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    if (!current[k] || typeof current[k] !== 'object') {
      return false;
    }
    current = current[k];
  }
  
  const lastKey = keys[keys.length - 1];
  if (lastKey in current) {
    delete current[lastKey];
    return writeTranslationFile(locale, translations);
  }
  
  return false;
}

// 比较两个语言的翻译
function compareTranslations(locale1, locale2) {
  const translations1 = readTranslationFile(locale1);
  const translations2 = readTranslationFile(locale2);
  
  if (!translations1 || !translations2) return null;
  
  const keys1 = getKeyPaths(translations1);
  const keys2 = getKeyPaths(translations2);
  
  const missingIn1 = keys2.filter(key => !keys1.includes(key));
  const missingIn2 = keys1.filter(key => !keys2.includes(key));
  const commonKeys = keys1.filter(key => keys2.includes(key));
  
  const differentValues = commonKeys.filter(key => {
    const value1 = getNestedValue(translations1, key);
    const value2 = getNestedValue(translations2, key);
    return value1 !== value2;
  }).map(key => ({
    key,
    value1: getNestedValue(translations1, key),
    value2: getNestedValue(translations2, key)
  }));
  
  return {
    missingIn1,
    missingIn2,
    differentValues,
    summary: {
      totalIn1: keys1.length,
      totalIn2: keys2.length,
      common: commonKeys.length,
      missingIn1: missingIn1.length,
      missingIn2: missingIn2.length,
      different: differentValues.length
    }
  };
}

// 合并翻译
function mergeTranslations(sourceLocale, targetLocale, overwrite = false) {
  const sourceTranslations = readTranslationFile(sourceLocale);
  const targetTranslations = readTranslationFile(targetLocale);
  
  if (!sourceTranslations || !targetTranslations) return false;
  
  const sourceKeys = getKeyPaths(sourceTranslations);
  let updatedCount = 0;
  
  for (const key of sourceKeys) {
    const sourceValue = getNestedValue(sourceTranslations, key);
    const targetValue = getNestedValue(targetTranslations, key);
    
    if (targetValue === undefined || overwrite) {
      setNestedValue(targetTranslations, key, sourceValue);
      updatedCount++;
    }
  }
  
  const success = writeTranslationFile(targetLocale, targetTranslations);
  if (success) {
    console.log(`合并完成: 更新了 ${updatedCount} 个翻译键`);
  }
  
  return success;
}

// 导出翻译为JSON
function exportTranslations(locale, outputPath) {
  const translations = readTranslationFile(locale);
  if (!translations) return false;
  
  try {
    const json = JSON.stringify(translations, null, 2);
    fs.writeFileSync(outputPath, json, 'utf8');
    console.log(`导出成功: ${locale} -> ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`导出失败:`, error.message);
    return false;
  }
}

// 从JSON导入翻译
function importTranslations(locale, inputPath, overwrite = false) {
  try {
    const json = fs.readFileSync(inputPath, 'utf8');
    const translations = JSON.parse(json);
    
    const existingTranslations = readTranslationFile(locale) || {};
    
    if (overwrite) {
      Object.assign(existingTranslations, translations);
    } else {
      // 只导入不存在的键
      const existingKeys = getKeyPaths(existingTranslations);
      const newKeys = getKeyPaths(translations).filter(key => !existingKeys.includes(key));
      
      newKeys.forEach(key => {
        const value = getNestedValue(translations, key);
        setNestedValue(existingTranslations, key, value);
      });
      
      console.log(`导入完成: 添加了 ${newKeys.length} 个新翻译键`);
    }
    
    return writeTranslationFile(locale, existingTranslations);
  } catch (error) {
    console.error(`导入失败:`, error.message);
    return false;
  }
}

// 验证翻译文件
function validateTranslations(locale) {
  const translations = readTranslationFile(locale);
  if (!translations) return false;
  
  const issues = [];
  
  function validate(obj, path = '') {
    for (const key in obj) {
      const fullPath = path ? path + '.' + key : key;
      
      if (typeof obj[key] === 'string') {
        const value = obj[key];
        
        // 检查空值
        if (value.trim() === '') {
          issues.push({ type: 'empty', path: fullPath });
        }
        
        // 检查未翻译的中文（非中文语言）
        if (locale !== 'zh' && /[一-龥]/.test(value)) {
          issues.push({ type: 'untranslated', path: fullPath, value });
        }
        
        // 检查过长的文本
        if (value.length > 200) {
          issues.push({ type: 'too_long', path: fullPath, length: value.length });
        }
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        validate(obj[key], fullPath);
      }
    }
  }
  
  validate(translations);
  
  console.log(`验证 ${locale} 完成:`);
  console.log(`  总问题数: ${issues.length}`);
  
  const byType = {};
  issues.forEach(issue => {
    byType[issue.type] = (byType[issue.type] || 0) + 1;
  });
  
  for (const type in byType) {
    console.log(`  ${type}: ${byType[type]} 个`);
  }
  
  if (issues.length > 0) {
    console.log('\n前10个问题:');
    issues.slice(0, 10).forEach(issue => {
      console.log(`  ${issue.type}: ${issue.path}`);
      if (issue.value) {
        console.log(`    值: ${issue.value}`);
      }
    });
  }
  
  return issues.length === 0;
}

// 主函数
function main() {
  const args = parseArgs();
  const { command, subCommand, options } = args;
  
  if (!command) {
    console.log('翻译管理工具 v1.0.0');
    console.log('\n用法: node translation-manager.js <command> [args...]');
    console.log('\n命令:');
    console.log('  list-keys <locale>           列出指定语言的所有翻译键');
    console.log('  find <pattern> <locale>      在指定语言中查找匹配的翻译键');
    console.log('  get <key> <locale>           获取指定键的翻译值');
    console.log('  set <key> <value> <locale>   设置指定键的翻译值');
    console.log('  delete <key> <locale>        删除指定的翻译键');
    console.log('  compare <locale1> <locale2>  比较两个语言的翻译');
    console.log('  merge <source> <target>      将源语言的翻译合并到目标语言');
    console.log('  validate <locale>            验证翻译文件');
    console.log('  export <locale> <output>     导出翻译为JSON文件');
    console.log('  import <locale> <input>      从JSON文件导入翻译');
    console.log('\n支持的语言:', SUPPORTED_LOCALES.join(', '));
    return;
  }
  
  try {
    switch (command) {
      case 'list-keys':
        if (!subCommand || !SUPPORTED_LOCALES.includes(subCommand)) {
          console.error('用法: list-keys <locale>');
          process.exit(1);
        }
        const keys = listKeys(subCommand);
        console.log(`${subCommand} 翻译键 (${keys.length} 个):`);
        keys.forEach(key => console.log(`  ${key}`));
        break;
        
      case 'find':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(options[0])) {
          console.error('用法: find <pattern> <locale>');
          process.exit(1);
        }
        const foundKeys = findKeys(subCommand, options[0]);
        console.log(`在 ${options[0]} 中找到 ${foundKeys.length} 个匹配的键:`);
        foundKeys.forEach(key => console.log(`  ${key}`));
        break;
        
      case 'get':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(options[0])) {
          console.error('用法: get <key> <locale>');
          process.exit(1);
        }
        const value = getValue(subCommand, options[0]);
        if (value !== undefined) {
          console.log(`${options[0]}.${subCommand}: ${value}`);
        } else {
          console.log(`键不存在: ${subCommand}`);
        }
        break;
        
      case 'set':
        if (!subCommand || !options[0] || !options[1] || !SUPPORTED_LOCALES.includes(options[1])) {
          console.error('用法: set <key> <value> <locale>');
          process.exit(1);
        }
        const setSuccess = setValue(subCommand, options[0], options[1]);
        if (setSuccess) {
          console.log(`设置成功: ${options[1]}.${subCommand} = ${options[0]}`);
        } else {
          console.log(`设置失败`);
        }
        break;
        
      case 'delete':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(options[0])) {
          console.error('用法: delete <key> <locale>');
          process.exit(1);
        }
        const deleteSuccess = deleteKey(subCommand, options[0]);
        if (deleteSuccess) {
          console.log(`删除成功: ${options[0]}.${subCommand}`);
        } else {
          console.log(`删除失败`);
        }
        break;
        
      case 'compare':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(subCommand) || !SUPPORTED_LOCALES.includes(options[0])) {
          console.error('用法: compare <locale1> <locale2>');
          process.exit(1);
        }
        const result = compareTranslations(subCommand, options[0]);
        if (!result) {
          console.log('比较失败');
          return;
        }
        
        console.log(`比较 ${subCommand} 和 ${options[0]}:`);
        console.log(`  ${subCommand} 总键数: ${result.summary.totalIn1}`);
        console.log(`  ${options[0]} 总键数: ${result.summary.totalIn2}`);
        console.log(`  共同键数: ${result.summary.common}`);
        console.log(`  ${subCommand} 缺失: ${result.summary.missingIn1}`);
        console.log(`  ${options[0]} 缺失: ${result.summary.missingIn2}`);
        console.log(`  值不同: ${result.summary.different}`);
        
        if (result.missingIn1.length > 0) {
          console.log(`\n${subCommand} 缺失的键:`);
          result.missingIn1.slice(0, 10).forEach(key => console.log(`  ${key}`));
        }
        
        if (result.missingIn2.length > 0) {
          console.log(`\n${options[0]} 缺失的键:`);
          result.missingIn2.slice(0, 10).forEach(key => console.log(`  ${key}`));
        }
        
        if (result.differentValues.length > 0) {
          console.log(`\n值不同的键 (前10个):`);
          result.differentValues.slice(0, 10).forEach(item => {
            console.log(`  ${item.key}:`);
            console.log(`    ${subCommand}: ${item.value1}`);
            console.log(`    ${options[0]}: ${item.value2}`);
          });
        }
        break;
        
      case 'merge':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(subCommand) || !SUPPORTED_LOCALES.includes(options[0])) {
          console.error('用法: merge <source> <target>');
          process.exit(1);
        }
        const overwrite = options.includes('--overwrite') || options.includes('-o');
        const mergeSuccess = mergeTranslations(subCommand, options[0], overwrite);
        if (mergeSuccess) {
          console.log(`合并完成: ${subCommand} -> ${options[0]}`);
        } else {
          console.log(`合并失败`);
        }
        break;
        
      case 'validate':
        if (!subCommand || !SUPPORTED_LOCALES.includes(subCommand)) {
          console.error('用法: validate <locale>');
          process.exit(1);
        }
        const isValid = validateTranslations(subCommand);
        if (isValid) {
          console.log('验证通过');
          process.exit(0);
        } else {
          console.log('验证失败');
          process.exit(1);
        }
        break;
        
      case 'export':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(subCommand)) {
          console.error('用法: export <locale> <output>');
          process.exit(1);
        }
        const exportSuccess = exportTranslations(subCommand, options[0]);
        if (!exportSuccess) {
          process.exit(1);
        }
        break;
        
      case 'import':
        if (!subCommand || !options[0] || !SUPPORTED_LOCALES.includes(subCommand)) {
          console.error('用法: import <locale> <input>');
          process.exit(1);
        }
        const importOverwrite = options.includes('--overwrite') || options.includes('-o');
        const importSuccess = importTranslations(subCommand, options[0], importOverwrite);
        if (!importSuccess) {
          process.exit(1);
        }
        break;
        
      default:
        console.error(`未知命令: ${command}`);
        process.exit(1);
    }
  } catch (error) {
    console.error('执行失败:', error.message);
    process.exit(1);
  }
}

// 运行主函数
main();