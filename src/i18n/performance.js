// 国际化性能优化工具

// 本地存储键名
const STORAGE_KEYS = {
  LOCALE: 'i18n_locale',
  TRANSLATION_CACHE: 'i18n_translation_cache_',
  LAST_UPDATE: 'i18n_last_update_'
};

// 缓存配置
const CACHE_CONFIG = {
  MAX_AGE: 24 * 60 * 60 * 1000, // 24小时
  MAX_SIZE: 50 * 1024 * 1024,  // 50MB
  COMPRESSION_THRESHOLD: 10 * 1024 // 10KB以上的内容进行压缩
};

// 简单的LZ压缩算法（用于压缩翻译文本）
function simpleCompress(str) {
  if (!str || str.length < CACHE_CONFIG.COMPRESSION_THRESHOLD) {
    return str;
  }
  
  // 简单的字符替换压缩
  return str
    .replace(/the/g, 'th')
    .replace(/and/g, '&')
    .replace(/tion/g, 'tn')
    .replace(/ing/g, 'g')
    .replace(/er/g, 'r')
    .replace(/es/g, 's');
}

// 解压缩
function simpleDecompress(str) {
  if (!str) return str;
  
  return str
    .replace(/th/g, 'the')
    .replace(/&/g, 'and')
    .replace(/tn/g, 'tion')
    .replace(/g\b/g, 'ing')
    .replace(/\br\b/g, 'er')
    .replace(/s\b/g, 'es');
}

// 检查缓存是否过期
function isCacheExpired(timestamp) {
  return Date.now() - timestamp > CACHE_CONFIG.MAX_AGE;
}

// 获取缓存大小
function getCacheSize() {
  let totalSize = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_KEYS.TRANSLATION_CACHE)) {
      totalSize += localStorage.getItem(key).length;
    }
  }
  return totalSize;
}

// 清理过期缓存
function cleanExpiredCache() {
  const now = Date.now();
  const keysToRemove = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_KEYS.LAST_UPDATE)) {
      const locale = key.replace(STORAGE_KEYS.LAST_UPDATE, '');
      const timestamp = parseInt(localStorage.getItem(key));
      if (isCacheExpired(timestamp)) {
        keysToRemove.push(
          STORAGE_KEYS.TRANSLATION_CACHE + locale,
          STORAGE_KEYS.LAST_UPDATE + locale
        );
      }
    }
  }
  
  keysToRemove.forEach(key => localStorage.removeItem(key));
  return keysToRemove.length;
}

// 清理大缓存（当缓存超过限制时）
function cleanLargeCache() {
  const cacheSize = getCacheSize();
  if (cacheSize <= CACHE_CONFIG.MAX_SIZE) {
    return 0;
  }
  
  // 按最后使用时间排序，删除最旧的缓存
  const cacheEntries = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(STORAGE_KEYS.TRANSLATION_CACHE)) {
      const locale = key.replace(STORAGE_KEYS.TRANSLATION_CACHE, '');
      const lastUpdateKey = STORAGE_KEYS.LAST_UPDATE + locale;
      const lastUpdate = parseInt(localStorage.getItem(lastUpdateKey)) || 0;
      const size = localStorage.getItem(key).length;
      
      cacheEntries.push({ key, locale, lastUpdate, size });
    }
  }
  
  // 按最后使用时间排序
  cacheEntries.sort((a, b) => a.lastUpdate - b.lastUpdate);
  
  // 删除最旧的缓存直到大小在限制内
  let removedSize = 0;
  const targetSize = CACHE_CONFIG.MAX_SIZE * 0.8; // 删除到80%
  
  for (const entry of cacheEntries) {
    if (cacheSize - removedSize <= targetSize) {
      break;
    }
    
    localStorage.removeItem(entry.key);
    localStorage.removeItem(STORAGE_KEYS.LAST_UPDATE + entry.locale);
    removedSize += entry.size;
  }
  
  return removedSize;
}

// 缓存翻译数据
function cacheTranslation(locale, translations) {
  try {
    // 清理过期和大缓存
    cleanExpiredCache();
    cleanLargeCache();
    
    // 压缩数据
    const compressed = simpleCompress(JSON.stringify(translations));
    
    // 存储到本地
    localStorage.setItem(STORAGE_KEYS.TRANSLATION_CACHE + locale, compressed);
    localStorage.setItem(STORAGE_KEYS.LAST_UPDATE + locale, Date.now().toString());
    
    return true;
  } catch (error) {
    console.warn('缓存翻译数据失败:', error);
    return false;
  }
}

// 获取缓存的翻译数据
function getCachedTranslation(locale) {
  try {
    const cacheKey = STORAGE_KEYS.TRANSLATION_CACHE + locale;
    const lastUpdateKey = STORAGE_KEYS.LAST_UPDATE + locale;
    
    const cached = localStorage.getItem(cacheKey);
    const lastUpdate = localStorage.getItem(lastUpdateKey);
    
    if (!cached || !lastUpdate) {
      return null;
    }
    
    // 检查是否过期
    if (isCacheExpired(parseInt(lastUpdate))) {
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(lastUpdateKey);
      return null;
    }
    
    // 解压缩并解析
    const decompressed = simpleDecompress(cached);
    return JSON.parse(decompressed);
  } catch (error) {
    console.warn('获取缓存翻译数据失败:', error);
    return null;
  }
}

// 预加载语言包
async function preloadLanguage(locale) {
  try {
    // 检查是否已有缓存
    const cached = getCachedTranslation(locale);
    if (cached) {
      return cached;
    }
    
    // 动态导入语言包
    const module = await import(`./locales/${locale}.js`);
    const translations = module.default || module;
    
    // 缓存翻译数据
    cacheTranslation(locale, translations);
    
    return translations;
  } catch (error) {
    console.warn(`预加载语言包 ${locale} 失败:`, error);
    return null;
  }
}

// 批量预加载语言包
async function preloadLanguages(locales) {
  const results = {};
  
  // 并行加载所有语言包
  const promises = locales.map(async (locale) => {
    const translations = await preloadLanguage(locale);
    return { locale, translations };
  });
  
  const settled = await Promise.allSettled(promises);
  
  settled.forEach((result, index) => {
    const { locale } = locales[index];
    if (result.status === 'fulfilled') {
      results[locale] = result.value.translations;
    } else {
      console.warn(`预加载 ${locale} 失败:`, result.reason);
    }
  });
  
  return results;
}

// 获取当前语言设置
function getCurrentLocale() {
  return localStorage.getItem(STORAGE_KEYS.LOCALE) || 'zh';
}

// 设置当前语言
function setCurrentLocale(locale) {
  localStorage.setItem(STORAGE_KEYS.LOCALE, locale);
}

// 性能监控
const performanceMetrics = {
  loadTimes: {},
  
  recordLoadTime(locale, time) {
    this.loadTimes[locale] = time;
  },
  
  getAverageLoadTime() {
    const times = Object.values(this.loadTimes);
    if (times.length === 0) return 0;
    return times.reduce((sum, time) => sum + time, 0) / times.length;
  },
  
  getLoadTime(locale) {
    return this.loadTimes[locale] || 0;
  }
};

// 导出工具函数
export {
  STORAGE_KEYS,
  CACHE_CONFIG,
  cacheTranslation,
  getCachedTranslation,
  preloadLanguage,
  preloadLanguages,
  getCurrentLocale,
  setCurrentLocale,
  cleanExpiredCache,
  cleanLargeCache,
  getCacheSize,
  performanceMetrics
};

export default {
  cacheTranslation,
  getCachedTranslation,
  preloadLanguage,
  preloadLanguages,
  getCurrentLocale,
  setCurrentLocale,
  cleanExpiredCache,
  cleanLargeCache,
  getCacheSize,
  performanceMetrics
};