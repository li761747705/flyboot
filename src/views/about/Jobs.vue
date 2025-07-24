<template>
  <div class="jobs-page">
    <div class="jobs-banner">
      <img src="/images/about/careers/通用1900X400.png" alt="招贤纳士" loading="lazy" />
    </div>
    <!-- 职位搜索区域 -->
    <section class="jobs-header-section">
      <div class="container">
        <div class="jobs-header">
          <h2 class="jobs-title">加入我们</h2>
          <p class="jobs-subtitle">与麒风智能一起，创造无人机技术的未来</p>
        </div>
        
        <div class="search-card">
          <div class="search-controls">
            <div class="search-group">
              <label for="category">
                <i class="bi bi-funnel"></i>
                职位类别
              </label>
              <select 
                id="category"
                v-model="category" 
                class="search-select"
              >
                <option value="">全部类别</option>
                <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
              </select>
            </div>
            
            <div class="search-group">
              <label for="search">
                <i class="bi bi-search"></i>
                搜索职位
              </label>
              <input 
                id="search"
                v-model="search" 
                @keyup.enter="doSearch" 
                type="text" 
                class="search-input" 
                placeholder="输入职位关键词..." 
              />
            </div>
            
            <button class="search-btn" @click="doSearch">
              <i class="bi bi-search"></i>
              搜索
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 职位列表区域 -->
    <section class="jobs-list-section">
      <div class="container">
        <div class="jobs-table-card">
          <div class="table-header">
            <div class="table-cell header-title">职位名称</div>
            <div class="table-cell header-type">类别</div>
            <div class="table-cell header-salary">薪资</div>
            <div class="table-cell header-date">发布时间</div>
            <div class="table-cell header-action">操作</div>
          </div>
          
          <div class="table-body">
            <div
              v-for="job in filteredJobs"
              :key="job.id"
              class="table-row"
              @click="showJobDetail(job)"
            >
              <div class="table-cell cell-title">
                <div class="job-title">{{ job.title }}</div>
                <div class="job-location">
                  <i class="bi bi-geo-alt"></i>
                  {{ job.location }}
                </div>
              </div>
              <div class="table-cell cell-type">
                <span class="type-badge" :class="getTypeClass(job.type)">
                  {{ job.type }}
                </span>
              </div>
              <div class="table-cell cell-salary">{{ job.salary }}</div>
              <div class="table-cell cell-date">{{ job.date }}</div>
              <div class="table-cell cell-action">
                <button class="detail-btn">
                  <i class="bi bi-arrow-right"></i>
                  查看详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 职位详情弹窗 -->
    <div v-if="showDetail" class="modal-overlay" @click.self="showDetail = false">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title-section">
            <h3 class="modal-title">{{ selectedJob.title }}</h3>
            <div class="modal-meta">
              <span class="meta-item">
                <i class="bi bi-geo-alt"></i>
                {{ selectedJob.location }}
              </span>
              <span class="meta-item">
                <i class="bi bi-calendar"></i>
                {{ selectedJob.date }}
              </span>
              <span class="meta-item">
                <i class="bi bi-cash-coin"></i>
                {{ selectedJob.salary }}
              </span>
            </div>
          </div>
          <button class="modal-close" @click="showDetail = false">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-building"></i>
              公司介绍
            </h4>
            <p class="section-content">
              麒风智能是一家专注于工业级无人机研发、生产与应用的高科技企业，致力于为测绘、农业、安防行業提供高效智能的无人机解决方案。
            </p>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-list-task"></i>
              岗位职责
            </h4>
            <ul class="section-list">
              <li v-for="(duty, i) in selectedJob.duties" :key="i">{{ duty }}</li>
            </ul>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-person-check"></i>
              任职要求
            </h4>
            <ul class="section-list">
              <li v-for="(req, i) in selectedJob.requirements" :key="i">{{ req }}</li>
            </ul>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-gift"></i>
              福利待遇
            </h4>
            <p class="section-content">
              五险一金、带薪年假、节日福利、年度体检、团建活动、项目奖金等。
            </p>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-envelope"></i>
              联系方式
            </h4>
            <p class="section-content">
              邮箱：hr@ziyanuav.cn
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 应聘表单区域 -->
    <section class="apply-section">
      <div class="container">
        <div class="apply-card">
          <div class="apply-header">
            <h3 class="apply-title">在线应聘</h3>
            <p class="apply-subtitle">填写以下信息，我们将尽快与您联系</p>
          </div>
          
          <form class="apply-form" @submit.prevent="submitApply">
            <div class="form-row">
              <div class="form-group">
                <label for="apply-name">
                  <i class="bi bi-person"></i>
                  姓名
                </label>
                <input 
                  id="apply-name"
                  v-model="applyForm.name" 
                  type="text" 
                  class="form-input" 
                  placeholder="请输入您的姓名" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="apply-phone">
                  <i class="bi bi-telephone"></i>
                  联系电话
                </label>
                <input 
                  id="apply-phone"
                  v-model="applyForm.phone" 
                  type="tel" 
                  class="form-input" 
                  placeholder="请输入您的联系电话" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="apply-position">
                  <i class="bi bi-briefcase"></i>
                  应聘岗位
                </label>
                <input 
                  id="apply-position"
                  v-model="applyForm.position" 
                  type="text" 
                  class="form-input" 
                  placeholder="请输入应聘岗位" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="apply-email">
                  <i class="bi bi-envelope"></i>
                  邮箱地址
                </label>
                <input 
                  id="apply-email"
                  v-model="applyForm.email" 
                  type="email" 
                  class="form-input" 
                  placeholder="请输入您的邮箱地址" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="apply-location">
                <i class="bi bi-geo-alt"></i>
                期望工作地点
              </label>
              <select 
                id="apply-location"
                v-model="applyForm.location" 
                class="form-input" 
                required
              >
                <option value="">请选择工作地点</option>
                <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
              </select>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="apply-btn">
                <i class="bi bi-send"></i>
                提交应聘
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Jobs',
  data() {
    return {
      category: '',
      search: '',
      showDetail: false,
      selectedJob: {},
      applyForm: {
        name: '',
        phone: '',
        position: '',
        email: '',
        location: ''
      },
      categories: ['研发类', '销售类', '客户类'],
      locations: ['珠海', '上海', '深圳', '广州', '成都', '其他'],
      jobs: [
        {
          id: 1,
          title: '无人机系统工程师',
          type: '研发类',
          salary: '面议',
          date: '2025-06-18',
          location: '珠海',
          duties: [
            '负责无人机系统集成与测试',
            '参与无人机系统方案设计',
            '协助项目推进与技术支持'
          ],
          requirements: [
            '本科及以上学历，电子、自动化等相关专业',
            '有无人机相关经验优先',
            '具备良好的沟通与团队协作能力'
          ]
        },
        {
          id: 2,
          title: '无人机软件工程师',
          type: '研发类',
          salary: '面议',
          date: '2025-06-18',
          location: '珠海',
          duties: [
            '负责无人机软件开发与维护',
            '参与飞控系统开发',
            '优化软件性能与稳定性'
          ],
          requirements: [
            '本科及以上学历，计算机、自动化等相关专业',
            '熟悉C/C++/Python等编程语言',
            '有嵌入式开发经验优先'
          ]
        },
        {
          id: 3,
          title: '无人机设计工程师',
          type: '研发类',
          salary: '面议',
          date: '2025-06-18',
          location: '珠海',
          duties: [
            '负责无人机结构设计',
            '参与产品外观与功能设计',
            '协助生产工艺改进'
          ],
          requirements: [
            '本科及以上学历，机械设计等相关专业',
            '熟练使用CAD/SolidWorks等设计软件',
            '有无人机设计经验优先'
          ]
        },
        {
          id: 4,
          title: 'PCB设计工程师',
          type: '研发类',
          salary: '面议',
          date: '2025-06-18',
          location: '珠海',
          duties: [
            '负责PCB电路板设计',
            '参与硬件方案评审',
            '协助产品测试与调试'
          ],
          requirements: [
            '本科及以上学历，电子相关专业',
            '熟练使用Altium Designer等EDA工具',
            '有PCB设计经验优先'
          ]
        },
        {
          id: 5,
          title: '大客户销售经理',
          type: '销售类',
          salary: '20K-40K/月',
          date: '2025-06-18',
          location: '上海',
          duties: [
            '负责公司无人机产品的大客户销售与市场拓展',
            '维护与开发重点行业客户关系',
            '参与销售策略制定与执行'
          ],
          requirements: [
            '本科及以上学历，市场营销等相关专业',
            '3年以上大客户销售经验',
            '具备良好的沟通与谈判能力'
          ]
        },
        {
          id: 6,
          title: '客户服务专员',
          type: '客户类',
          salary: '8K-15K/月',
          date: '2025-06-18',
          location: '成都',
          duties: [
            '负责客户咨询与技术支持',
            '处理客户投诉与问题反馈',
            '协助客户培训与产品演示'
          ],
          requirements: [
            '大专及以上学历，专业不限',
            '具备良好的沟通与服务意识',
            '有客服经验优先'
          ]
        }
      ]
    }
  },
  computed: {
    filteredJobs() {
      let filtered = this.jobs;
      if (this.category) filtered = filtered.filter(job => job.type === this.category);
      if (this.search) {
        const s = this.search.toLowerCase();
        filtered = filtered.filter(job =>
          job.title.toLowerCase().includes(s) ||
          job.location.toLowerCase().includes(s)
        );
      }
      return filtered;
    }
  },
  methods: {
    showJobDetail(job) {
      this.selectedJob = job;
      this.showDetail = true;
    },
    getTypeClass(type) {
      return {
        '研发类': 'type-dev',
        '销售类': 'type-sales',
        '客户类': 'type-service'
      }[type] || '';
    },
    submitApply() {
      if (Object.values(this.applyForm).some(v => !v)) {
        alert('请完整填写所有信息');
        return;
      }
      const subject = encodeURIComponent('麒风智能职位应聘申请');
      const body = encodeURIComponent(
        `姓名：${this.applyForm.name}\n联系电话：${this.applyForm.phone}\n应聘岗位：${this.applyForm.position}\n邮箱：${this.applyForm.email}\n期望工作地点：${this.applyForm.location}`
      );
      window.location.href = `mailto:hr@ziyanuav.cn?subject=${subject}&body=${body}`;
      this.applyForm = { name: '', phone: '', position: '', email: '', location: '' };
    }
  }
}
</script>

<style scoped>
.jobs-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* 头部区域 */
.jobs-header-section {
  padding: 3rem 0;
}

.jobs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.jobs-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}

.jobs-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 155px; /* 修改宽度，使其与文字等长 */
  height: 3px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 2px;
}

.jobs-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
  margin-top: 1rem;
}

/* 搜索区域 */
.search-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin: 0 auto;
}

.search-controls {
  display: grid;
  grid-template-columns: 1fr 2fr auto;
  gap: 1.5rem;
  align-items: end;
}

.search-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.search-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
}

.search-group label i {
  color: rgb(178,0,0);
  font-size: 1rem;
}

.search-select,
.search-input {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.search-select:focus,
.search-input:focus {
  outline: none;
  border-color: rgb(178,0,0);
  background: white;
  box-shadow: 0 0 0 3px rgba(178, 0, 0, 0.1);
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(178, 0, 0, 0.3);
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(178, 0, 0, 0.4);
}

/* 职位列表 */
.jobs-list-section {
  padding: 3rem 0;
}

.jobs-table-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin: 0 auto;
}

.table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
  padding: 1rem;
  font-weight: 600;
}

.table-cell {
  padding: 1rem;
  display: flex;
  align-items: center;
}

.header-title {
  font-size: 1.1rem;
}

.table-body {
  max-height: 600px;
  overflow-y: auto;
}

.table-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #e9ecef;
  transition: all 0.3s ease;
  cursor: pointer;
}

.table-row:hover {
  background: #f8f9fa;
  transform: translateX(5px);
}

.cell-title {
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.job-title {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
}

.job-location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.job-location i {
  color: rgb(178,0,0);
}

.type-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
}

.type-dev {
  background: #28a745;
}

.type-sales {
  background: #ffc107;
  color: #212529;
}

.type-service {
  background: #17a2b8;
}

.cell-salary {
  font-weight: 600;
  color: #e74c3c;
}

.cell-date {
  color: #6c757d;
  font-size: 0.9rem;
}

.detail-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detail-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(178, 0, 0, 0.3);
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 1600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 2rem 1rem 2rem;
  border-bottom: 1px solid #e9ecef;
}

.modal-title-section {
  flex: 1;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.modal-meta {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6c757d;
  font-size: 0.9rem;
}

.meta-item i {
  color: rgb(178,0,0);
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #f8f9fa;
  color: #2c3e50;
}

.modal-body {
  padding: 2rem;
}

.detail-section {
  margin-bottom: 2rem;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.section-title i {
  color: rgb(178,0,0);
}

.section-content {
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section-list li {
  color: #2c3e50;
  line-height: 1.6;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.section-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: rgb(178,0,0);
  font-weight: bold;
}

/* 应聘表单 */
.apply-section {
  padding: 3rem 0;
}

.apply-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin: 0 auto;
}

.apply-header {
  text-align: center;
  margin-bottom: 2rem;
}

.apply-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.apply-subtitle {
  color: #6c757d;
  font-size: 1rem;
}

.apply-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
}

.form-group label i {
  color: rgb(178,0,0);
  font-size: 1rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.form-input:focus {
  outline: none;
  border-color: rgb(178,0,0);
  background: white;
  box-shadow: 0 0 0 3px rgba(178, 0, 0, 0.1);
}

.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.apply-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(178, 0, 0, 0.3);
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(178, 0, 0, 0.4);
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .search-card,
  .jobs-table-card,
  .modal-content,
  .apply-card {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .search-controls {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .search-card {
    max-width: 90%;
  }
  
  .table-header,
  .table-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  
  .table-cell {
    padding: 0.5rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .modal-content {
    margin: 1rem;
    max-height: 95vh;
    max-width: 90%;
  }
  
  .modal-header {
    padding: 1.5rem;
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .jobs-title {
    font-size: 2rem;
  }
  
  .apply-card {
    padding: 2rem;
    max-width: 90%;
  }
}

@media (max-width: 576px) {
  .search-card,
  .apply-card {
    padding: 1.5rem;
    max-width: 98%;
  }
  
  .jobs-title {
    font-size: 1.8rem;
  }
  
  .modal-content {
    margin: 0.5rem;
    max-width: 98%;
  }
}

.jobs-banner {
  width: 100%;
  height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

.jobs-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.about-section-img {
  width: 100%;
  max-width: 620px;
  height: auto;
  display: block;
  margin: 32px auto 24px auto;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  object-fit: cover;
}
</style>