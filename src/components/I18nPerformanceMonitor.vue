<template>
  <div v-if="showMonitor" class="i18n-performance-monitor">
    <div class="monitor-header">
      <h4>i18n 性能监控</h4>
      <button @click="toggleVisibility" class="toggle-btn">
        {{ isVisible ? '隐藏' : '显示' }}
      </button>
    </div>
    
    <div v-show="isVisible" class="monitor-content">
      <div class="metric">
        <span class="label">平均加载时间:</span>
        <span class="value">{{ averageLoadTime }}ms</span>
      </div>
      
      <div class="metric">
        <span class="label">缓存大小:</span>
        <span class="value">{{ formatBytes(cacheSize) }}</span>
      </div>
      
      <div class="language-times">
        <h5>各语言加载时间</h5>
        <div v-for="(time, locale) in loadTimes" :key="locale" class="language-metric">
          <span class="locale">{{ locale }}</span>
          <span class="time">{{ time }}ms</span>
        </div>
      </div>
      
      <div class="actions">
        <button @click="clearCache" class="action-btn">清理缓存</button>
        <button @click="refreshStats" class="action-btn">刷新统计</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { getPerformanceStats } from '../i18n/performance.js'

export default {
  name: 'I18nPerformanceMonitor',
  props: {
    showMonitor: {
      type: Boolean,
      default: process.env.NODE_ENV === 'development'
    }
  },
  setup() {
    const isVisible = ref(false)
    const averageLoadTime = ref(0)
    const cacheSize = ref(0)
    const loadTimes = ref({})
    
    let updateInterval = null
    
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value
    }
    
    const formatBytes = (bytes) => {
      if (bytes === 0) return '0 B'
      const k = 1024
      const sizes = ['B', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    }
    
    const updateStats = () => {
      try {
        const stats = getPerformanceStats()
        averageLoadTime.value = Math.round(stats.averageLoadTime)
        cacheSize.value = stats.cacheSize || 0
        loadTimes.value = Object.fromEntries(
          Object.entries(stats.loadTimes).map(([locale, time]) => [locale, Math.round(time)])
        )
      } catch (error) {
        console.warn('Failed to update i18n performance stats:', error)
      }
    }
    
    const refreshStats = () => {
      updateStats()
    }
    
    const clearCache = () => {
      try {
        // 清理所有i18n相关的缓存
        const keysToRemove = []
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key.startsWith('i18n_')) {
            keysToRemove.push(key)
          }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key))
        
        // 刷新统计
        updateStats()
        
        console.log('i18n cache cleared')
      } catch (error) {
        console.error('Failed to clear i18n cache:', error)
      }
    }
    
    const handleLocaleChange = (event) => {
      // 当语言改变时更新统计
      setTimeout(updateStats, 100)
    }
    
    onMounted(() => {
      // 初始更新
      updateStats()
      
      // 监听语言变化事件
      window.addEventListener('localeChanged', handleLocaleChange)
      
      // 定期更新统计（仅在开发环境）
      if (process.env.NODE_ENV === 'development') {
        updateInterval = setInterval(updateStats, 5000)
      }
    })
    
    onUnmounted(() => {
      window.removeEventListener('localeChanged', handleLocaleChange)
      
      if (updateInterval) {
        clearInterval(updateInterval)
      }
    })
    
    return {
      isVisible,
      averageLoadTime,
      cacheSize,
      loadTimes,
      toggleVisibility,
      formatBytes,
      refreshStats,
      clearCache
    }
  }
}
</script>

<style scoped>
.i18n-performance-monitor {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 8px;
  padding: 12px;
  font-family: monospace;
  font-size: 12px;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.monitor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.monitor-header h4 {
  margin: 0;
  font-size: 14px;
}

.toggle-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.monitor-content {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 8px;
}

.metric {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
}

.label {
  color: #ccc;
}

.value {
  color: #4caf50;
  font-weight: bold;
}

.language-times {
  margin-top: 8px;
}

.language-times h5 {
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #ccc;
}

.language-metric {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  font-size: 11px;
}

.locale {
  color: #2196f3;
}

.time {
  color: #ff9800;
}

.actions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}

.action-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 11px;
  flex: 1;
}

.action-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* RTL支持 */
html[dir="rtl"] .i18n-performance-monitor {
  left: 20px;
  right: auto;
}
</style>