const fs = require('fs')
const path = require('path')

// 修复中文语言文件中的空翻译键
function fixEmptyTranslations() {
  const zhFilePath = path.join(__dirname, '../src/i18n/locales/zh.js')
  const enFilePath = path.join(__dirname, '../src/i18n/locales/en.js')
  
  // 读取中文和英文语言文件
  const zhContent = fs.readFileSync(zhFilePath, 'utf8')
  const enContent = fs.readFileSync(enFilePath, 'utf8')
  
  // 提取对象内容
  const zhObjectMatch = zhContent.match(/export default\s+({[\s\S]*})/)
  const enObjectMatch = enContent.match(/export default\s+({[\s\S]*})/)
  
  if (!zhObjectMatch || !enObjectMatch) {
    console.error('无法解析语言文件')
    return
  }
  
  let zhObject = JSON.parse(zhObjectMatch[1])
  const enObject = JSON.parse(enObjectMatch[1])
  
  // 递归修复空对象
  function fixEmptyObjects(target, source, path = '') {
    for (const key in target) {
      const currentPath = path ? `${path}.${key}` : key
      
      if (typeof target[key] === 'object' && target[key] !== null) {
        if (Array.isArray(target[key])) {
          // 如果是数组，保持不变
          continue
        } else if (Object.keys(target[key]).length === 0) {
          // 如果是空对象，尝试从源文件复制
          if (source[key] && typeof source[key] === 'object' && Object.keys(source[key]).length > 0) {
            console.log(`修复空对象: ${currentPath}`)
            target[key] = JSON.parse(JSON.stringify(source[key]))
          }
        } else {
          // 递归处理嵌套对象
          fixEmptyObjects(target[key], source[key] || {}, currentPath)
        }
      }
    }
  }
  
  // 修复空对象
  fixEmptyObjects(zhObject, enObject)
  
  // 写回文件
  const fixedContent = `export default ${JSON.stringify(zhObject, null, 2)}`
  fs.writeFileSync(zhFilePath, fixedContent, 'utf8')
  
  console.log('中文语言文件修复完成')
}

// 运行修复
fixEmptyTranslations()