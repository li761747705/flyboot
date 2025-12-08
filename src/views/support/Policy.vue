<template>
  <div class="policy-wrapper">
    <div class="policy-container">
      <h1 class="policy-title">
        <i class="bi bi-shield-check"></i>
        {{ $t('support.policyPage.title') }}
      </h1>
      <p class="policy-subtitle">{{ $t('support.policyPage.subtitle') }}</p>
      
      <div class="policy-main-card">
        <div class="policy-sidebar">
          <div
            v-for="(item, idx) in categories"
            :key="item.titleKey"
            :class="['policy-category', { active: idx === activeIndex }]"
            @click="activeIndex = idx"
          >
            <div class="category-icon">
              <i :class="item.icon"></i>
            </div>
            <span class="category-title">{{ $t(item.titleKey) }}</span>
            <i class="bi bi-chevron-right category-arrow"></i>
          </div>
        </div>
        <div class="policy-content-area">
          <h2 class="policy-content-title">
            <i class="bi bi-info-circle"></i>
            {{ $t(categories[activeIndex].titleKey) }}
          </h2>
          <div class="policy-content-detail">
            <template v-if="activeIndex === 0">
              <!-- 保修期表格 -->
              <div class="policy-table-wrapper">
                <table class="policy-table">
                  <thead>
                    <tr>
                      <th style="width: 120px;">{{ $t('support.policyPage.tableHeaders.type') }}</th>
                      <th>{{ $t('support.policyPage.tableHeaders.detail') }}</th>
                      <th>{{ $t('support.policyPage.tableHeaders.terminationConditions') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle return">{{ $t('support.policyPage.labels.return') }}</div>
                      </td>
                      <td>
                        {{ $t('support.policyPage.return.detailTitle') }}<br>
                        1. {{ $t('support.policyPage.return.detailItems.item1') }}<br>
                        2. {{ $t('support.policyPage.return.detailItems.item2') }}
                      </td>
                      <td rowspan="3" class="conditions-cell">
                        {{ $t('support.policyPage.conditions.items.item1') }}<br>
                        {{ $t('support.policyPage.conditions.items.item2') }}<br>
                        {{ $t('support.policyPage.conditions.items.item3') }}<br>
                        {{ $t('support.policyPage.conditions.items.item4') }}<br>
                        {{ $t('support.policyPage.conditions.items.item5') }}<br>
                        {{ $t('support.policyPage.conditions.items.item6') }}
                      </td>
                    </tr>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle exchange">{{ $t('support.policyPage.labels.exchange') }}</div>
                      </td>
                      <td>
                        1. {{ $t('support.policyPage.exchange.items.item1') }}<br>
                        2. {{ $t('support.policyPage.exchange.items.item2') }}<br>
                        3. {{ $t('support.policyPage.exchange.items.item3') }}
                      </td>
                    </tr>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle repair">{{ $t('support.policyPage.labels.repair') }}</div>
                      </td>
                      <td>
                        <strong>{{ $t('support.policyPage.repair.title') }}</strong><br>
                        {{ $t('support.policyPage.repair.items.itemA') }}<br>
                        {{ $t('support.policyPage.repair.items.itemB') }}<br>
                        {{ $t('support.policyPage.repair.items.itemC') }}<br>
                        {{ $t('support.policyPage.repair.items.itemD') }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
            <template v-else>
              <div v-for="pKey in categories[activeIndex].contentKeys" :key="pKey" class="policy-desc-block">
                <div class="desc-icon">
                  <i class="bi bi-check-circle"></i>
                </div>
                <div class="desc-content">{{ $t(pKey) }}</div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policy',
  metaInfo() {
    return {
      title: this.$t('meta.support.policy.title'),
      meta: [
        { name: 'description', content: this.$t('meta.support.policy.description') },
        { name: 'keywords', content: this.$t('meta.support.policy.keywords') }
      ]
    }
  },
  data() {
    return {
      activeIndex: 0,
      categories: [
        {
          titleKey: 'support.policyPage.categories.warranty',
          icon: 'bi bi-calendar-check',
          contentKeys: []
        },
        {
          titleKey: 'support.policyPage.categories.scope',
          icon: 'bi bi-gear',
          contentKeys: [
            'support.policyPage.contents.scope.item1'
          ]
        },
        {
          titleKey: 'support.policyPage.categories.disclaimer',
          icon: 'bi bi-exclamation-triangle',
          contentKeys: [
            'support.policyPage.contents.disclaimer.item1'
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.policy-wrapper {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  /* min-height: 100vh; */
  padding: 2rem 0;
}

.policy-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.policy-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.policy-title i {
  color: rgb(178,0,0);
  font-size: 2rem;
}

.policy-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #6c757d;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.policy-main-card {
  display: flex;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 500px;
}

.policy-sidebar {
  width: 320px;
  background: #fff;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
}

.policy-category {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 4px solid #fff;
  margin: 0.25rem 0;
  background: #fff;
  color: rgb(0,0,0);
  position: relative;
  z-index: 1;
}

.policy-category:hover {
  color: rgb(178,0,0);
  border-left: 4px solid rgb(178,0,0);
}

.policy-category:hover .category-title {
  color: rgb(178,0,0);
}

.policy-category:hover .category-arrow {
  color: rgb(178,0,0);
}

.policy-category .category-title {
  color: rgb(0,0,0);
  transition: color 0.3s;
}

.policy-category.active {
  background: #fff;
  color: rgb(178,0,0) !important;
  border-left: 4px solid rgb(178,0,0);
}
.policy-category.active .category-title {
  color: rgb(178,0,0) !important;
}
.policy-category.active .category-arrow {
  color: rgb(178,0,0) !important;
}

/* 取消边框色，边框为白色 */
.policy-table th, .policy-table td {
  border: 1px solid #fff;
}

.policy-content-area {
  flex: 1;
  padding: 2.5rem;
  background: #fff;
}

.policy-content-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.policy-content-title i {
  color: rgb(178,0,0);
  font-size: 1.3rem;
}

.policy-content-detail {
  color: #495057;
  font-size: 1.05rem;
  line-height: 1.8;
}

.policy-table-wrapper {
  overflow-x: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.policy-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  font-size: 1rem;
  border-radius: 12px;
  overflow: hidden;
}

.policy-table th, .policy-table td {
  border: 1px solid #e9ecef;
  padding: 1.2rem 1rem;
  vertical-align: top;
  text-align: left;
}

.policy-table th {
  background: #f3f3f3;
  color: #222;
  font-weight: 600;
  text-align: center;
  font-size: 1.1rem;
}

.type-cell {
  text-align: center;
  vertical-align: middle;
  width: 80px;
}

.type-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  margin: 0 auto;
}

.type-circle.return {
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
}

.type-circle.exchange {
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
}

.type-circle.repair {
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
}

.conditions-cell {
  background: #f8f9fa;
  font-size: 0.95rem;
  line-height: 1.6;
}

.policy-desc-block {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid rgb(178,0,0);
  transition: all 0.3s ease;
}

.policy-desc-block:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.desc-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.desc-icon i {
  color: white;
  font-size: 1rem;
}

.desc-content {
  flex: 1;
  line-height: 1.7;
}

.policy-content-area .btn, .policy-content-area button, .policy-content-area a.btn {
  color: rgb(178,0,0) !important;
  background: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}
.policy-content-area .btn:hover, .policy-content-area button:hover, .policy-content-area a.btn:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: none !important;
  box-shadow: none !important;
  transition: none !important;
}

.section-line {
  background: rgb(178,0,0) !important;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .policy-container {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .policy-wrapper {
    padding: 1.5rem 0;
  }
  
  .policy-container {
    padding: 0 1rem;
  }
  
  .policy-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .policy-title i {
    font-size: 1.5rem;
  }
  
  .policy-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .policy-main-card {
    flex-direction: column;
    min-height: auto;
  }
  
  .policy-sidebar {
    width: 100%;
    padding: 1rem 0;
  }
  
  .policy-category {
    padding: 0.75rem 1rem;
    margin: 0.125rem 0;
  }
  
  .category-icon {
    width: 32px;
    height: 32px;
    margin-right: 0.75rem;
  }
  
  .category-icon i {
    font-size: 1rem;
  }
  
  .category-title {
    font-size: 0.9rem;
  }
  
  .policy-content-area {
    padding: 1.5rem;
  }
  
  .policy-content-title {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }
  
  .policy-table th, .policy-table td {
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
  }
  
  .policy-table th {
    font-size: 1rem;
  }
  
  .type-circle {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
  
  .policy-desc-block {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  
  .desc-icon {
    width: 28px;
    height: 28px;
    margin-right: 0.75rem;
  }
  
  .desc-icon i {
    font-size: 0.9rem;
  }
  
  .desc-content {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .policy-container {
    padding: 0 0.5rem;
  }
  
  .policy-title {
    font-size: 1.8rem;
  }
  
  .policy-subtitle {
    font-size: 0.9rem;
  }
  
  .policy-content-area {
    padding: 1rem;
  }
  
  .policy-content-title {
    font-size: 1.2rem;
  }
  
  .policy-table th, .policy-table td {
    padding: 0.75rem 0.5rem;
    font-size: 0.85rem;
  }
  
  .policy-table th {
    font-size: 0.9rem;
  }
  
  .policy-desc-block {
    padding: 0.75rem;
  }
  
  .desc-content {
    font-size: 0.95rem;
  }
}

.category-icon {
  width: 40px;
  height: 40px;
  background: #f3f3f3;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.category-icon i {
  color: rgb(178,0,0);
  font-size: 1.2rem;
}
</style>
