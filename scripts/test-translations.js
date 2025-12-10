const fs = require('fs')
const path = require('path')

// 测试中文翻译文件
function testTranslations() {
  const zhFilePath = path.join(__dirname, '../src/i18n/locales/zh.js')
  
  // 读取中文语言文件
  const zhContent = fs.readFileSync(zhFilePath, 'utf8')
  
  // 提取对象内容
  const zhObjectMatch = zhContent.match(/export default\s+({[\s\S]*})/)
  
  if (!zhObjectMatch) {
    console.error('无法解析语言文件')
    return
  }
  
  const zhObject = JSON.parse(zhObjectMatch[1])
  
  // 检查关键翻译键
  const requiredKeys = [
    'home.carousel.rollingImage1.title',
    'home.products.title',
    'home.applications.title',
    'home.serviceSupport.title',
    'common.home',
    'navBar.home'
  ]
  
  let allKeysPresent = true
  
  for (const key of requiredKeys) {
    const keys = key.split('.')
    let current = zhObject
    
    for (const k of keys) {
      if (current[k]) {
        current = current[k]
      } else {
        console.error(`缺失翻译键: ${key}`)
        allKeysPresent = false
        break
      }
    }
    
    if (allKeysPresent && typeof current === 'string' && current.trim()) {
      console.log(`✓ ${key}: ${current}`)
    } else if (allKeysPresent) {
      console.error(`翻译键为空: ${key}`)
      allKeysPresent = false
    }
  }
  
  if (allKeysPresent) {
    console.log('\n所有关键翻译键都存在且有效！')
  } else {
    console.log('\n存在缺失或无效的翻译键！')
  }
}

// 运行测试
testTranslations()