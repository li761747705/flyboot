<template>
  <div class="download-detail-page">
    <div class="download-container">
      <div class="page-header">
        <button class="back-btn" @click="goBack">
          <i class="bi bi-arrow-left"></i>
          返回
        </button>
        <h2 class="download-detail-title">
          <i class="bi bi-airplane"></i>
          固定翼无人机系列相关文档
        </h2>
        <p class="download-subtitle">获取最新的软件、固件和文档资料，支持多种产品型号</p>
      </div>
      
      <!-- 标签页切换 -->
      <div class="tab-container">
        <div class="tab-header">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab-btn', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <i :class="tab.icon"></i>
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <div class="download-table-wrapper">
            <table class="download-table">
              <thead>
                <tr>
                  <th>文档名称</th>
                  <th>版本</th>
                  <th>日期</th>
                  <th>格式</th>
                  <th>下载</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in currentDocs" :key="item.name" class="download-row">
                  <td class="doc-name">{{ item.name }}</td>
                  <td class="doc-version">{{ item.version }}</td>
                  <td class="doc-date">{{ item.date }}</td>
                  <td class="doc-format">{{ item.format }}</td>
                  <td class="doc-download">
                    <a :href="item.url" target="_blank" class="download-link">
                      <i :class="getFileIcon(item.format)"></i>
                      {{ item.format }}
                    </a>
                    <a :href="item.url" target="_blank" class="download-icon">
                      <i class="bi bi-download"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FixedwingDownload',
  metaInfo: {
    title: '固定翼无人机系列下载 - 麒风智能无人机'
  },
  data() {
    return {
      activeTab: 'docs',
      tabs: [
        { id: 'docs', name: '文档资料', icon: 'bi bi-file-earmark-text' },
        { id: 'firmware', name: '固件更新', icon: 'bi bi-cpu' }
      ],
      docsData: {
        docs: [
          { name: '固定翼无人机系列_用户手册', version: 'V1.0.3', date: '2024-01', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_快速指南', version: 'V1.0', date: '2024-01', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_技术规格书', version: 'V1.0', date: '2024-01', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_安全手册', version: 'V1.0', date: '2024-01', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_维护手册', version: 'V1.0', date: '2024-01', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_产品清单', version: 'V1.0', date: '2024-01', format: 'PDF', url: '#' }
        ],
        firmware: [
          { name: '固定翼无人机系列_固件更新说明', version: 'V1.0.3.71', date: '2024-06', format: 'PDF', url: '#' },
          { name: '固定翼无人机系列_固件包_V1.0.3.71', version: 'V1.0.3.71', date: '2024-06', format: 'BIN', url: '#' },
          { name: '固定翼无人机系列_固件升级工具', version: 'V1.0.2', date: '2024-05', format: 'EXE', url: '#' },
          { name: '固定翼无人机系列_固件回退包_V1.0.2', version: 'V1.0.2', date: '2024-05', format: 'BIN', url: '#' },
          { name: '固定翼无人机系列_固件校验工具', version: 'V1.0.1', date: '2024-04', format: 'EXE', url: '#' }
        ]
      }
    }
  },
  computed: {
    currentDocs() {
      return this.docsData[this.activeTab] || []
    }
  },
  methods: {
    goBack() {
      this.$router.push('/support/downloads');
    },
    getFileIcon(format) {
      const iconMap = {
        'PDF': 'bi bi-file-earmark-pdf',
        'BIN': 'bi bi-file-earmark-binary',
        'EXE': 'bi bi-file-earmark-code',
        'ZIP': 'bi bi-file-earmark-zip',
        'DOC': 'bi bi-file-earmark-word',
        'XLS': 'bi bi-file-earmark-excel'
      }
      return iconMap[format] || 'bi bi-file-earmark'
    }
  }
}
</script>

<style scoped>
.download-detail-page {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.download-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  margin-bottom: 2rem;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: rgb(178, 0, 0);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(178, 0, 0, 0.18);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(178, 0, 0, 0.28);
}

.back-btn i {
  font-size: 1.1rem;
  color: rgb(178, 0, 0);
}

.download-detail-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.download-detail-title i {
  color: rgb(178, 0, 0);
  font-size: 1.8rem;
}

.download-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
}

/* 标签页样式 */
.tab-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-header {
  display: flex;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: #6c757d;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.tab-btn:hover {
  background: rgba(178, 0, 0, 0.08);
  color: rgb(178, 0, 0);
}

.tab-btn.active {
  background: white;
  color: rgb(178, 0, 0);
  font-weight: 600;
}

.tab-btn.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgb(178, 0, 0);
}

.tab-btn i {
  font-size: 1.2rem;
  color: rgb(178, 0, 0);
}

.tab-content {
  padding: 2rem;
}

.download-table-wrapper {
  overflow-x: auto;
}

.download-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}

.download-table th {
  background: rgb(178, 0, 0);
  color: white;
  font-weight: 600;
  text-align: left;
  padding: 1.2rem 1rem;
  font-size: 1.05rem;
}

.download-table td {
  padding: 1.2rem 1rem;
  border-bottom: 1px solid #e9ecef;
  vertical-align: middle;
}

.download-row {
  transition: all 0.3s ease;
}

.download-row:hover {
  background: #f8f9fa;
  transform: translateX(4px);
}

.download-row:nth-child(even) {
  background: #fafbfc;
}

.download-row:nth-child(even):hover {
  background: #f1f3f4;
}

.doc-name {
  font-weight: 500;
  color: #2c3e50;
  max-width: 300px;
}

.doc-version {
  color: rgb(178, 0, 0);
  font-weight: 600;
  font-family: 'Courier New', monospace;
}

.doc-date {
  color: #6c757d;
}

.doc-format {
  color: #495057;
  font-weight: 500;
}

.doc-download {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgb(178, 0, 0);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background: rgba(178, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.download-link:hover {
  background: rgba(178, 0, 0, 0.18);
  color: #fff;
  transform: translateY(-1px);
}

.download-link i {
  font-size: 1.1rem;
  color: rgb(178, 0, 0);
}

.download-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgb(178, 0, 0);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}

.download-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(178, 0, 0, 0.28);
}

.download-icon i {
  font-size: 1.1rem;
  color: white;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .download-container {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .download-detail-page {
    padding: 1.5rem 0;
  }
  
  .download-container {
    padding: 0 1rem;
  }
  
  .download-detail-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
  
  .download-detail-title i {
    font-size: 1.5rem;
  }
  
  .download-subtitle {
    font-size: 1rem;
    text-align: center;
  }
  
  .tab-header {
    flex-direction: column;
  }
  
  .tab-btn {
    padding: 1rem;
    font-size: 1rem;
  }
  
  .tab-btn i {
    font-size: 1.1rem;
  }
  
  .tab-content {
    padding: 1.5rem;
  }
  
  .download-table th,
  .download-table td {
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
  }
  
  .download-table th {
    font-size: 1rem;
  }
  
  .doc-name {
    max-width: 200px;
  }
  
  .doc-download {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
  
  .download-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .download-icon {
    width: 32px;
    height: 32px;
  }
  
  .download-icon i {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .download-container {
    padding: 0 0.5rem;
  }
  
  .download-detail-title {
    font-size: 1.6rem;
  }
  
  .download-subtitle {
    font-size: 0.9rem;
  }
  
  .tab-content {
    padding: 1rem;
  }
  
  .download-table th,
  .download-table td {
    padding: 0.75rem 0.5rem;
    font-size: 0.85rem;
  }
  
  .download-table th {
    font-size: 0.9rem;
  }
  
  .doc-name {
    max-width: 150px;
  }
  
  .download-link {
    padding: 0.3rem 0.6rem;
    font-size: 0.85rem;
  }
  
  .download-icon {
    width: 28px;
    height: 28px;
  }
  
  .download-icon i {
    font-size: 0.9rem;
  }
}
</style> 