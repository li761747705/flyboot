<template>
  <div class="jobs-page">
    <div class="jobs-banner">
      <img src="/images/about/careers/通用1900X400.png" :alt="$t('about.jobsPage.bannerAlt')" loading="lazy" />
    </div>
    <!-- 职位搜索区域 -->
    <section class="jobs-header-section">
      <div class="container">
        <div class="jobs-header">
          <h2 class="jobs-title">{{ $t('about.jobsPage.title') }}</h2>
          <p class="jobs-subtitle">{{ $t('about.jobsPage.subtitle') }}</p>
        </div>
        
        <div class="search-card">
          <div class="search-controls">
            <div class="search-group">
              <label for="category">
                <i class="bi bi-funnel"></i>
                {{ $t('about.jobsPage.search.labels.category') }}
              </label>
              <select 
                id="category"
                v-model="category" 
                class="search-select"
              >
                <option value="">{{ $t('about.jobsPage.search.options.allCategories') }}</option>
                <option v-for="cat in categories" :key="cat.value" :value="cat.value">{{ $t(cat.labelKey) }}</option>
              </select>
            </div>
            
            <div class="search-group">
              <label for="search">
                <i class="bi bi-search"></i>
                {{ $t('about.jobsPage.search.labels.search') }}
              </label>
              <input 
                id="search"
                v-model="search" 
                @keyup.enter="doSearch" 
                type="text" 
                class="search-input" 
                :placeholder="$t('about.jobsPage.search.placeholders.keyword')" 
              />
            </div>
            
            <button class="search-btn" @click="doSearch">
              <i class="bi bi-search"></i>
              {{ $t('about.jobsPage.search.buttons.search') }}
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
            <div class="table-cell header-title">{{ $t('about.jobsPage.tableHeaders.title') }}</div>
            <div class="table-cell header-type">{{ $t('about.jobsPage.tableHeaders.type') }}</div>
            <div class="table-cell header-salary">{{ $t('about.jobsPage.tableHeaders.salary') }}</div>
            <div class="table-cell header-date">{{ $t('about.jobsPage.tableHeaders.date') }}</div>
            <div class="table-cell header-action">{{ $t('about.jobsPage.tableHeaders.action') }}</div>
          </div>
          
          <div class="table-body">
            <div
              v-for="job in filteredJobs"
              :key="job.id"
              class="table-row"
              @click="showJobDetail(job)"
            >
              <div class="table-cell cell-title">
                <div class="job-title">{{ $t(job.titleKey) }}</div>
                <div class="job-location">
                  <i class="bi bi-geo-alt"></i>
                  {{ $t(job.locationKey) }}
                </div>
              </div>
              <div class="table-cell cell-type">
                <span class="type-badge" :class="getTypeClass(job.type)">
                  {{ $t(job.typeKey) }}
                </span>
              </div>
              <div class="table-cell cell-salary">{{ $t(job.salaryKey) }}</div>
              <div class="table-cell cell-date">{{ job.date }}</div>
              <div class="table-cell cell-action">
                <button class="detail-btn">
                  <i class="bi bi-arrow-right"></i>
                  {{ $t('about.jobsPage.buttons.viewDetail') }}
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
            <h3 class="modal-title">{{ $t(selectedJob.titleKey) }}</h3>
            <div class="modal-meta">
              <span class="meta-item">
                <i class="bi bi-geo-alt"></i>
                {{ $t(selectedJob.locationKey) }}
              </span>
              <span class="meta-item">
                <i class="bi bi-calendar"></i>
                {{ selectedJob.date }}
              </span>
              <span class="meta-item">
                <i class="bi bi-cash-coin"></i>
                {{ $t(selectedJob.salaryKey) }}
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
              {{ $t('about.jobsPage.detail.companyIntro.title') }}
            </h4>
            <p class="section-content">
              {{ $t('about.jobsPage.detail.companyIntro.content') }}
            </p>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-list-task"></i>
              {{ $t('about.jobsPage.detail.duties.title') }}
            </h4>
            <ul class="section-list">
              <li v-for="dKey in selectedJob.dutiesKeys" :key="dKey">{{ $t(dKey) }}</li>
            </ul>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-person-check"></i>
              {{ $t('about.jobsPage.detail.requirements.title') }}
            </h4>
            <ul class="section-list">
              <li v-for="rKey in selectedJob.requirementsKeys" :key="rKey">{{ $t(rKey) }}</li>
            </ul>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-gift"></i>
              {{ $t('about.jobsPage.detail.benefits.title') }}
            </h4>
            <p class="section-content">
              {{ $t('about.jobsPage.detail.benefits.content') }}
            </p>
          </div>
          
          <div class="detail-section">
            <h4 class="section-title">
              <i class="bi bi-envelope"></i>
              {{ $t('about.jobsPage.detail.contact.title') }}
            </h4>
            <p class="section-content">
              {{ $t('about.jobsPage.detail.contact.emailLabel') }} hr@ziyanuav.cn
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
            <h3 class="apply-title">{{ $t('about.jobsPage.apply.title') }}</h3>
            <p class="apply-subtitle">{{ $t('about.jobsPage.apply.subtitle') }}</p>
          </div>
          
          <form class="apply-form" @submit.prevent="submitApply">
            <div class="form-row">
              <div class="form-group">
                <label for="apply-name">
                  <i class="bi bi-person"></i>
                  {{ $t('about.jobsPage.apply.labels.name') }}
                </label>
                <input 
                  id="apply-name"
                  v-model="applyForm.name" 
                  type="text" 
                  class="form-input" 
                  :placeholder="$t('about.jobsPage.apply.placeholders.name')" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="apply-phone">
                  <i class="bi bi-telephone"></i>
                  {{ $t('about.jobsPage.apply.labels.phone') }}
                </label>
                <input 
                  id="apply-phone"
                  v-model="applyForm.phone" 
                  type="tel" 
                  class="form-input" 
                  :placeholder="$t('about.jobsPage.apply.placeholders.phone')" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="apply-position">
                  <i class="bi bi-briefcase"></i>
                  {{ $t('about.jobsPage.apply.labels.position') }}
                </label>
                <input 
                  id="apply-position"
                  v-model="applyForm.position" 
                  type="text" 
                  class="form-input" 
                  :placeholder="$t('about.jobsPage.apply.placeholders.position')" 
                  required 
                />
              </div>
              <div class="form-group">
                <label for="apply-email">
                  <i class="bi bi-envelope"></i>
                  {{ $t('about.jobsPage.apply.labels.email') }}
                </label>
                <input 
                  id="apply-email"
                  v-model="applyForm.email" 
                  type="email" 
                  class="form-input" 
                  :placeholder="$t('about.jobsPage.apply.placeholders.email')" 
                  required 
                />
              </div>
            </div>
            
            <div class="form-group">
              <label for="apply-location">
                <i class="bi bi-geo-alt"></i>
                {{ $t('about.jobsPage.apply.labels.location') }}
              </label>
              <select 
                id="apply-location"
                v-model="applyForm.location" 
                class="form-input" 
                required
              >
                <option value="">{{ $t('about.jobsPage.apply.options.selectLocation') }}</option>
                <option v-for="loc in locations" :key="loc.value" :value="loc.value">{{ $t(loc.labelKey) }}</option>
              </select>
            </div>
            
            <div class="form-actions">
              <button type="submit" class="apply-btn">
                <i class="bi bi-send"></i>
                {{ $t('about.jobsPage.apply.submit') }}
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
      categories: [
        { value: '研发类', labelKey: 'about.jobsPage.categories.dev' },
        { value: '销售类', labelKey: 'about.jobsPage.categories.sales' },
        { value: '客户类', labelKey: 'about.jobsPage.categories.service' }
      ],
      locations: [
        { value: '珠海', labelKey: 'about.jobsPage.locations.zhuhai' },
        { value: '上海', labelKey: 'about.jobsPage.locations.shanghai' },
        { value: '深圳', labelKey: 'about.jobsPage.locations.shenzhen' },
        { value: '广州', labelKey: 'about.jobsPage.locations.guangzhou' },
        { value: '成都', labelKey: 'about.jobsPage.locations.chengdu' },
        { value: '其他', labelKey: 'about.jobsPage.locations.other' }
      ],
      jobs: [
        {
          id: 1,
          title: '无人机系统工程师',
          titleKey: 'about.jobsPage.jobs.systemEngineer.title',
          type: '研发类',
          typeKey: 'about.jobsPage.types.dev',
          salary: '面议',
          salaryKey: 'about.jobsPage.salaries.negotiable',
          date: '2025-06-18',
          location: '珠海',
          locationKey: 'about.jobsPage.locations.zhuhai',
          dutiesKeys: [
            'about.jobsPage.jobs.systemEngineer.duties.item1',
            'about.jobsPage.jobs.systemEngineer.duties.item2',
            'about.jobsPage.jobs.systemEngineer.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.systemEngineer.requirements.item1',
            'about.jobsPage.jobs.systemEngineer.requirements.item2',
            'about.jobsPage.jobs.systemEngineer.requirements.item3'
          ]
        },
        {
          id: 2,
          title: '无人机软件工程师',
          titleKey: 'about.jobsPage.jobs.softwareEngineer.title',
          type: '研发类',
          typeKey: 'about.jobsPage.types.dev',
          salary: '面议',
          salaryKey: 'about.jobsPage.salaries.negotiable',
          date: '2025-06-18',
          location: '珠海',
          locationKey: 'about.jobsPage.locations.zhuhai',
          dutiesKeys: [
            'about.jobsPage.jobs.softwareEngineer.duties.item1',
            'about.jobsPage.jobs.softwareEngineer.duties.item2',
            'about.jobsPage.jobs.softwareEngineer.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.softwareEngineer.requirements.item1',
            'about.jobsPage.jobs.softwareEngineer.requirements.item2',
            'about.jobsPage.jobs.softwareEngineer.requirements.item3'
          ]
        },
        {
          id: 3,
          title: '无人机设计工程师',
          titleKey: 'about.jobsPage.jobs.designEngineer.title',
          type: '研发类',
          typeKey: 'about.jobsPage.types.dev',
          salary: '面议',
          salaryKey: 'about.jobsPage.salaries.negotiable',
          date: '2025-06-18',
          location: '珠海',
          locationKey: 'about.jobsPage.locations.zhuhai',
          dutiesKeys: [
            'about.jobsPage.jobs.designEngineer.duties.item1',
            'about.jobsPage.jobs.designEngineer.duties.item2',
            'about.jobsPage.jobs.designEngineer.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.designEngineer.requirements.item1',
            'about.jobsPage.jobs.designEngineer.requirements.item2',
            'about.jobsPage.jobs.designEngineer.requirements.item3'
          ]
        },
        {
          id: 4,
          title: 'PCB设计工程师',
          titleKey: 'about.jobsPage.jobs.pcbEngineer.title',
          type: '研发类',
          typeKey: 'about.jobsPage.types.dev',
          salary: '面议',
          salaryKey: 'about.jobsPage.salaries.negotiable',
          date: '2025-06-18',
          location: '珠海',
          locationKey: 'about.jobsPage.locations.zhuhai',
          dutiesKeys: [
            'about.jobsPage.jobs.pcbEngineer.duties.item1',
            'about.jobsPage.jobs.pcbEngineer.duties.item2',
            'about.jobsPage.jobs.pcbEngineer.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.pcbEngineer.requirements.item1',
            'about.jobsPage.jobs.pcbEngineer.requirements.item2',
            'about.jobsPage.jobs.pcbEngineer.requirements.item3'
          ]
        },
        {
          id: 5,
          title: '大客户销售经理',
          titleKey: 'about.jobsPage.jobs.keyAccountManager.title',
          type: '销售类',
          typeKey: 'about.jobsPage.types.sales',
          salary: '20K-40K/月',
          salaryKey: 'about.jobsPage.salaries.k20to40',
          date: '2025-06-18',
          location: '上海',
          locationKey: 'about.jobsPage.locations.shanghai',
          dutiesKeys: [
            'about.jobsPage.jobs.keyAccountManager.duties.item1',
            'about.jobsPage.jobs.keyAccountManager.duties.item2',
            'about.jobsPage.jobs.keyAccountManager.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.keyAccountManager.requirements.item1',
            'about.jobsPage.jobs.keyAccountManager.requirements.item2',
            'about.jobsPage.jobs.keyAccountManager.requirements.item3'
          ]
        },
        {
          id: 6,
          title: '客户服务专员',
          titleKey: 'about.jobsPage.jobs.customerService.title',
          type: '客户类',
          typeKey: 'about.jobsPage.types.service',
          salary: '8K-15K/月',
          salaryKey: 'about.jobsPage.salaries.k8to15',
          date: '2025-06-18',
          location: '成都',
          locationKey: 'about.jobsPage.locations.chengdu',
          dutiesKeys: [
            'about.jobsPage.jobs.customerService.duties.item1',
            'about.jobsPage.jobs.customerService.duties.item2',
            'about.jobsPage.jobs.customerService.duties.item3'
          ],
          requirementsKeys: [
            'about.jobsPage.jobs.customerService.requirements.item1',
            'about.jobsPage.jobs.customerService.requirements.item2',
            'about.jobsPage.jobs.customerService.requirements.item3'
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
        alert(this.$t('about.jobsPage.apply.alertFillAll'));
        return;
      }
      const subject = encodeURIComponent(this.$t('about.jobsPage.email.subject'));
      const body = encodeURIComponent(
        `${this.$t('about.jobsPage.email.labels.name')}${this.applyForm.name}\n${this.$t('about.jobsPage.email.labels.phone')}${this.applyForm.phone}\n${this.$t('about.jobsPage.email.labels.position')}${this.applyForm.position}\n${this.$t('about.jobsPage.email.labels.email')}${this.applyForm.email}\n${this.$t('about.jobsPage.email.labels.location')}${this.applyForm.location}`
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
