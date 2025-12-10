#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { translationTemplate } = require('../src/i18n/template.js');

// 支持的语言列表
const supportedLocales = ['zh', 'zh-hk', 'en', 'fr', 'es', 'hi', 'ru', 'pt', 'ar', 'bn'];

// 基础翻译映射
const baseTranslations = {
  // 中文基础词汇
  zh: {
    'name': '简体中文',
    'common.home': '首页',
    'common.products': '产品系列',
    'common.applications': '行业应用',
    'common.services': '服务与支持',
    'common.about': '关于我们',
    'common.contact': '联系我们',
    'common.more': '更多',
    'common.all': '全部',
    'common.back': '返回',
    'common.search': '搜索',
    'common.loading': '加载中',
    'common.viewMore': '查看更多',
    'common.readMore': '阅读更多',
    'common.learnMore': '了解更多',
    'common.knowledge': '知识中心',
    'common.brandAlt': '麒风智能 Logo'
  },
  
  // 英文基础词汇
  en: {
    'name': 'English',
    'common.home': 'Home',
    'common.products': 'Products',
    'common.applications': 'Applications',
    'common.services': 'Services',
    'common.about': 'About Us',
    'common.contact': 'Contact',
    'common.more': 'More',
    'common.all': 'All',
    'common.back': 'Back',
    'common.search': 'Search',
    'common.loading': 'Loading',
    'common.viewMore': 'View More',
    'common.readMore': 'Read More',
    'common.learnMore': 'Learn More',
    'common.knowledge': 'Knowledge Center',
    'common.brandAlt': 'Qifeng Intelligence Logo'
  },
  
  // 法语基础词汇
  fr: {
    'name': 'Français',
    'common.home': 'Accueil',
    'common.products': 'Produits',
    'common.applications': 'Applications',
    'common.services': 'Services',
    'common.about': 'À Propos',
    'common.contact': 'Contact',
    'common.more': 'Plus',
    'common.all': 'Tout',
    'common.back': 'Retour',
    'common.search': 'Rechercher',
    'common.loading': 'Chargement',
    'common.viewMore': 'Voir Plus',
    'common.readMore': 'Lire Plus',
    'common.learnMore': 'En Savoir Plus',
    'common.knowledge': 'Centre de Connaissances',
    'common.brandAlt': 'Logo Qifeng Intelligence'
  },
  
  // 西班牙语基础词汇
  es: {
    'name': 'Español',
    'common.home': 'Inicio',
    'common.products': 'Productos',
    'common.applications': 'Aplicaciones',
    'common.services': 'Servicios',
    'common.about': 'Acerca de',
    'common.contact': 'Contacto',
    'common.more': 'Más',
    'common.all': 'Todos',
    'common.back': 'Atrás',
    'common.search': 'Buscar',
    'common.loading': 'Cargando',
    'common.viewMore': 'Ver Más',
    'common.readMore': 'Leer Más',
    'common.learnMore': 'Aprender Más',
    'common.knowledge': 'Centro de Conocimiento',
    'common.brandAlt': 'Logo Qifeng Intelligence'
  },
  
  // 俄语基础词汇
  ru: {
    'name': 'Русский',
    'common.home': 'Главная',
    'common.products': 'Продукты',
    'common.applications': 'Приложения',
    'common.services': 'Услуги',
    'common.about': 'О нас',
    'common.contact': 'Контакт',
    'common.more': 'Больше',
    'common.all': 'Все',
    'common.back': 'Назад',
    'common.search': 'Поиск',
    'common.loading': 'Загрузка',
    'common.viewMore': 'Посмотреть Больше',
    'common.readMore': 'Читать Больше',
    'common.learnMore': 'Узнать Больше',
    'common.knowledge': 'Центр Знаний',
    'common.brandAlt': 'Логотип Qifeng Intelligence'
  },
  
  // 印地语基础词汇
  hi: {
    'name': 'हिन्दी',
    'common.home': 'होम',
    'common.products': 'उत्पाद',
    'common.applications': 'अनुप्रयोग',
    'common.services': 'सेवाएं',
    'common.about': 'हमारे बारे में',
    'common.contact': 'संपर्क',
    'common.more': 'और',
    'common.all': 'सभी',
    'common.back': 'वापस',
    'common.search': 'खोजें',
    'common.loading': 'लोड हो रहा है',
    'common.viewMore': 'और देखें',
    'common.readMore': 'और पढ़ें',
    'common.learnMore': 'और जानें',
    'common.knowledge': 'ज्ञान केंद्र',
    'common.brandAlt': 'Qifeng Intelligence लोगो'
  },
  
  // 葡萄牙语基础词汇
  pt: {
    'name': 'Português',
    'common.home': 'Início',
    'common.products': 'Produtos',
    'common.applications': 'Aplicações',
    'common.services': 'Serviços',
    'common.about': 'Sobre Nós',
    'common.contact': 'Contato',
    'common.more': 'Mais',
    'common.all': 'Todos',
    'common.back': 'Voltar',
    'common.search': 'Pesquisar',
    'common.loading': 'Carregando',
    'common.viewMore': 'Ver Mais',
    'common.readMore': 'Ler Mais',
    'common.learnMore': 'Saiba Mais',
    'common.knowledge': 'Centro de Conhecimento',
    'common.brandAlt': 'Logo Qifeng Intelligence'
  },
  
  // 阿拉伯语基础词汇
  ar: {
    'name': 'العربية',
    'common.home': 'الرئيسية',
    'common.products': 'المنتجات',
    'common.applications': 'التطبيقات',
    'common.services': 'الخدمات',
    'common.about': 'من نحن',
    'common.contact': 'اتصل بنا',
    'common.more': 'المزيد',
    'common.all': 'الكل',
    'common.back': 'رجوع',
    'common.search': 'بحث',
    'common.loading': 'جاري التحميل',
    'common.viewMore': 'عرض المزيد',
    'common.readMore': 'قراءة المزيد',
    'common.learnMore': 'تعلم المزيد',
    'common.knowledge': 'مركز المعرفة',
    'common.brandAlt': 'شعار Qifeng Intelligence'
  },
  
  // 孟加拉语基础词汇
  bn: {
    'name': 'বাংলা',
    'common.home': 'হোম',
    'common.products': 'পণ্য',
    'common.applications': 'অ্যাপ্লিকেশন',
    'common.services': 'সেবা',
    'common.about': 'সম্পর্কে',
    'common.contact': 'যোগাযোগ',
    'common.more': 'আরও',
    'common.all': 'সব',
    'common.back': 'ফিরে যান',
    'common.search': 'অনুসন্ধান',
    'common.loading': 'লোড হচ্ছে',
    'common.viewMore': 'আরও দেখুন',
    'common.readMore': 'আরও পড়ুন',
    'common.learnMore': 'আরও জানুন',
    'common.knowledge': 'জ্ঞান কেন্দ্র',
    'common.brandAlt': 'Qifeng Intelligence লোগো'
  }
};

// 简体到繁体中文转换映射
const simplifiedToTraditional = {
  '产品': '產品',
  '应用': '應用',
  '服务': '服務',
  '支持': '支持',
  '关于': '關於',
  '联系': '聯繫',
  '我们': '我們',
  '行业': '行業',
  '解决方案': '解決方案',
  '技术': '技術',
  '专业': '專業',
  '优势': '優勢',
  '特点': '特點',
  '功能': '功能',
  '参数': '參數',
  '规格': '規格',
  '配置': '配置',
  '说明': '說明',
  '下载': '下載',
  '在线': '在線',
  '视频': '視頻',
  '图片': '圖片',
  '新闻': '新聞',
  '资讯': '資訊',
  '帮助': '幫助',
  '问题': '問題',
  '回答': '回答',
  '搜索': '搜索',
  '登录': '登錄',
  '注册': '註冊',
  '退出': '退出',
  '设置': '設置',
  '个人': '個人',
  '信息': '信息',
  '资料': '資料',
  '历史': '歷史',
  '记录': '記錄',
  '状态': '狀態',
  '进度': '進度',
  '完成': '完成',
  '开始': '開始',
  '结束': '結束',
  '取消': '取消',
  '确认': '確認',
  '提交': '提交',
  '保存': '保存',
  '删除': '刪除',
  '编辑': '編輯',
  '修改': '修改',
  '更新': '更新',
  '创建': '創建',
  '添加': '添加',
  '移除': '移除',
  '选择': '選擇',
  '查看': '查看',
  '详情': '詳情',
  '简介': '簡介',
  '描述': '描述',
  '标题': '標題',
  '内容': '內容',
  '文本': '文本',
  '字符': '字符',
  '数字': '數字',
  '日期': '日期',
  '时间': '時間',
  '地点': '地點',
  '位置': '位置',
  '地址': '地址',
  '电话': '電話',
  '邮箱': '郵箱',
  '网站': '網站',
  '链接': '鏈接',
  '页面': '頁面',
  '文档': '文檔',
  '文件': '文件',
  '文件夹': '文件夾',
  '目录': '目錄',
  '路径': '路徑',
  '系统': '系統',
  '软件': '軟件',
  '硬件': '硬件',
  '设备': '設備',
  '机器': '機器',
  '电脑': '電腦',
  '手机': '手機',
  '平板': '平板',
  '网络': '網絡',
  '连接': '連接',
  '断开': '斷開',
  '上传': '上傳',
  '下载': '下載',
  '发送': '發送',
  '接收': '接收',
  '导入': '導入',
  '导出': '導出',
  '备份': '備份',
  '恢复': '恢復',
  '同步': '同步',
  '异步': '異步',
  '缓存': '緩存',
  '内存': '內存',
  '硬盘': '硬盤',
  '显示器': '顯示器',
  '键盘': '鍵盤',
  '鼠标': '鼠標',
  '打印机': '打印機',
  '扫描仪': '掃描儀',
  '摄像头': '攝像頭',
  '麦克风': '麥克風',
  '扬声器': '揚聲器',
  '耳机': '耳機',
  '电池': '電池',
  '充电器': '充電器',
  '数据线': '數據線',
  '电源': '電源',
  '开关': '開關',
  '按钮': '按鈕',
  '指示灯': '指示燈',
  '传感器': '傳感器',
  '芯片': '芯片',
  '处理器': '處理器',
  '显卡': '顯卡',
  '声卡': '聲卡',
  '网卡': '網卡',
  '主板': '主板',
  '内存条': '內存條',
  '硬盘盒': '硬盤盒',
  '散热器': '散熱器',
  '风扇': '風扇',
  '机箱': '機箱',
  '显示器': '顯示器',
  '投影仪': '投影儀',
  '白板': '白板',
  '黑板': '黑板',
  '粉笔': '粉筆',
  '橡皮': '橡皮',
  '尺子': '尺子',
  '圆规': '圓規',
  '量角器': '量角器',
  '计算器': '計算器',
  '字典': '字典',
  '词典': '詞典',
  '百科全书': '百科全書',
  '教科书': '教科書',
  '练习册': '練習冊',
  '笔记本': '筆記本',
  '铅笔': '鉛筆',
  '钢笔': '鋼筆',
  '圆珠笔': '圓珠筆',
  '毛笔': '毛筆',
  '蜡笔': '蠟筆',
  '水彩笔': '水彩筆',
  '马克笔': '馬克筆',
  '画板': '畫板',
  '画纸': '畫紙',
  '颜料': '顏料',
  '调色板': '調色板',
  '画架': '畫架',
  '画框': '畫框',
  '相框': '相框',
  '照片': '照片',
  '相册': '相冊',
  '影集': '影集',
  '胶片': '膠片',
  '胶卷': '膠卷',
  '相机': '相機',
  '镜头': '鏡頭',
  '闪光灯': '閃光燈',
  '三脚架': '三腳架',
  '滤镜': '濾鏡',
  '遮光罩': '遮光罩',
  '存储卡': '存儲卡',
  '读卡器': '讀卡器',
  '电池盒': '電池盒',
  '手柄': '手柄',
  '遥控器': '遙控器',
  '游戏机': '游戲機',
  '游戏卡': '游戲卡',
  '游戏盘': '游戲盤',
  '耳机': '耳機',
  '音箱': '音箱',
  '功放': '功放',
  '音响': '音響',
  '乐器': '樂器',
  '钢琴': '鋼琴',
  '吉他': '吉他',
  '小提琴': '小提琴',
  '大提琴': '大提琴',
  '萨克斯': '薩克斯',
  '小号': '小號',
  '长号': '長號',
  '圆号': '圓號',
  '架子鼓': '架子鼓',
  '锣鼓': '鑼鼓',
  '钹': '鈸',
  '木琴': '木琴',
  '竖琴': '豎琴',
  '口琴': '口琴',
  '手风琴': '手風琴',
  '风笛': '風笛',
  '电子琴': '電子琴',
  '合成器': '合成器',
  '效果器': '效果器',
  '调音台': '調音台',
  '录音设备': '錄音設備',
  '麦克风': '麥克風',
  '耳机': '耳機',
  '音响': '音響',
  '功放': '功放',
  '音箱': '音箱',
  '低音炮': '低音炮',
  '均衡器': '均衡器',
  '混响器': '混響器',
  '压缩器': '壓縮器',
  '限制器': '限制器',
  '噪声门': '噪聲門',
  '激励器': '激勵器',
  '失真器': '失真器',
  '延迟器': '延遲器',
  '合唱器': '合唱器',
  '相位器': '相位器',
  '颤音器': '顫音器',
  '哇音器': '哇音器',
  '滤波器': '濾波器',
  '采样器': '采樣器',
  '音序器': '音序器',
  '鼓机': '鼓機',
  '节拍器': '節拍器',
  '调音器': '調音器',
  '校音器': '校音器',
  '示波器': '示波器',
  '频谱仪': '頻譜儀',
  '信号发生器': '信號發生器',
  '万用表': '萬用表',
  '示波器': '示波器',
  '频谱分析仪': '頻譜分析儀',
  '逻辑分析仪': '邏輯分析儀',
  '网络分析仪': '網絡分析儀',
  '功率计': '功率計',
  '频率计': '頻率計',
  '相位计': '相位計',
  '阻抗分析仪': '阻抗分析儀',
  '噪声分析仪': '噪聲分析儀',
  '谐波分析仪': '諧波分析儀',
  '失真分析仪': '失真分析儀',
  '调制分析仪': '調制分析儀',
  '解调分析仪': '解調分析儀',
  '误码率测试仪': '誤碼率測試儀',
  '光功率计': '光功率計',
  '光时域反射仪': '光時域反射儀',
  '光谱分析仪': '光譜分析儀',
  '波长计': '波長計',
  '偏振分析仪': '偏振分析儀',
  '光纤测试仪': '光纖測試儀',
  '通信分析仪': '通信分析儀',
  '矢量网络分析仪': '矢量網絡分析儀',
  '标量网络分析仪': '標量網絡分析儀',
  '阻抗分析仪': '阻抗分析儀',
  '介电分析仪': '介電分析儀',
  '磁性分析仪': '磁性分析儀',
  '热分析仪': '熱分析儀',
  '力学分析仪': '力學分析儀',
  '光学分析仪': '光學分析儀',
  '化学分析仪': '化學分析儀',
  '生物分析仪': '生物分析儀',
  '医疗分析仪': '醫療分析儀',
  '环境分析仪': '環境分析儀',
  '水质分析仪': '水質分析儀',
  '气体分析仪': '氣體分析儀',
  '土壤分析仪': '土壤分析儀',
  '食品分析仪': '食品分析儀',
  '药物分析仪': '藥物分析儀',
  '材料分析仪': '材料分析儀',
  '金属分析仪': '金屬分析儀',
  '非金属分析仪': '非金屬分析儀',
  '有机物分析仪': '有機物分析儀',
  '无机物分析仪': '無機物分析儀',
  '元素分析仪': '元素分析儀',
  '同位素分析仪': '同位素分析儀',
  '放射性分析仪': '放射性分析儀',
  '激光分析仪': '激光分析儀',
  '红外分析仪': '紅外分析儀',
  '紫外分析仪': '紫外分析儀',
  'X射线分析仪': 'X射線分析儀',
  'γ射线分析仪': 'γ射線分析儀',
  '质谱仪': '質譜儀',
  '色谱仪': '色譜儀',
  '电泳仪': '電泳儀',
  '离心机': '離心機',
  '显微镜': '顯微鏡',
  '望远镜': '望遠鏡',
  '投影仪': '投影儀',
  '摄像机': '攝像機',
  '录像机': '錄像機',
  '放映机': '放映機',
  '幻灯机': '幻燈機',
  '复印机': '複印機',
  '传真机': '傳真機',
  '扫描仪': '掃描儀',
  '打印机': '打印機',
  '绘图仪': '繪圖儀',
  '刻字机': '刻字機',
  '切割机': '切割機',
  '雕刻机': '雕刻機',
  '激光切割机': '激光切割機',
  '激光雕刻机': '激光雕刻機',
  '激光打标机': '激光打標機',
  '激光焊接机': '激光焊接機',
  '激光清洗机': '激光清洗機',
  '激光打孔机': '激光打孔機',
  '激光熔覆机': '激光熔覆機',
  '激光淬火机': '激光淬火機',
  '激光退火机': '激光退火機',
  '激光合金化机': '激光合金化機',
  '激光熔覆機': '激光熔覆機',
  '激光沉積機': '激光沉積機',
  '激光燒結機': '激光燒結機',
  '激光熔化機': '激光熔化機',
  '激光快速成型機': '激光快速成型機',
  '激光3D打印機': '激光3D打印機',
  '激光標記機': '激光標記機',
  '激光雕刻機': '激光雕刻機',
  '激光切割機': '激光切割機',
  '激光焊接機': '激光焊接機',
  '激光清洗機': '激光清洗機',
  '激光打孔機': '激光打孔機',
  '激光熔覆機': '激光熔覆機',
  '激光淬火機': '激光淬火機',
  '激光退火機': '激光退火機',
  '激光合金化機': '激光合金化機',
  '激光熔覆機': '激光熔覆機',
  '激光沉積機': '激光沉積機',
  '激光燒結機': '激光燒結機',
  '激光熔化機': '激光熔化機',
  '激光快速成型機': '激光快速成型機',
  '激光3D打印機': '激光3D打印機'
};

// 递归设置翻译值
function setNestedValue(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }
  
  current[keys[keys.length - 1]] = value;
}

// 递归获取翻译值
function getNestedValue(obj, path) {
  const keys = path.split('.');
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

// 递归遍历模板并填充缺失的翻译
function fillMissingTranslations(locale, template, baseTranslations, existingTranslations = {}) {
  const result = { ...existingTranslations };
  
  function traverse(obj, path = '') {
    for (const key in obj) {
      const fullPath = path ? `${path}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (!result[key]) {
          result[key] = {};
        }
        traverse(obj[key], fullPath);
      } else {
        const existingValue = getNestedValue(existingTranslations, fullPath);
        if (!existingValue || existingValue === '') {
          const baseValue = baseTranslations[fullPath];
          if (baseValue) {
            setNestedValue(result, fullPath, baseValue);
          } else if (locale === 'zh-hk' && path === 'common') {
            // 对于繁体中文，尝试转换简体中文
            const zhValue = baseTranslations.zh[fullPath];
            if (zhValue) {
              let traditionalValue = zhValue;
              for (const [simplified, traditional] of Object.entries(simplifiedToTraditional)) {
                traditionalValue = traditionalValue.replace(new RegExp(simplified, 'g'), traditional);
              }
              setNestedValue(result, fullPath, traditionalValue);
            }
          } else if (locale !== 'zh') {
            // 对于其他语言，如果英文有值，使用英文
            const enValue = baseTranslations.en[fullPath];
            if (enValue) {
              setNestedValue(result, fullPath, enValue);
            }
          }
        }
      }
    }
  }
  
  traverse(template);
  return result;
}

// 读取现有翻译文件
function readTranslationFile(locale) {
  try {
    const localePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
    const localeContent = require(localePath);
    return localeContent.default || localeContent;
  } catch (error) {
    console.warn(`无法读取 ${locale} 翻译文件:`, error.message);
    return {};
  }
}

// 写入翻译文件
function writeTranslationFile(locale, translations) {
  const localePath = path.join(__dirname, '../src/i18n/locales', `${locale}.js`);
  
  const content = `export default ${JSON.stringify(translations, null, 2)};`;
  
  fs.writeFileSync(localePath, content, 'utf8');
  console.log(`✅ 已更新 ${locale} 翻译文件`);
}

// 主函数
function main() {
  console.log('🚀 开始增强翻译文件...\n');
  
  for (const locale of supportedLocales) {
    console.log(`📝 处理 ${locale} 语言...`);
    
    // 读取现有翻译
    const existingTranslations = readTranslationFile(locale);
    
    // 填充缺失的翻译
    const enhancedTranslations = fillMissingTranslations(
      locale,
      translationTemplate,
      baseTranslations,
      existingTranslations
    );
    
    // 写入增强后的翻译文件
    writeTranslationFile(locale, enhancedTranslations);
  }
  
  console.log('\n🎉 翻译文件增强完成！');
  console.log('\n💡 建议运行 npm run i18n:validate 验证翻译文件结构');
}

if (require.main === module) {
  main();
}