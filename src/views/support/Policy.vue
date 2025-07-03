<template>
  <div class="policy-wrapper">
    <div class="policy-container">
      <h1 class="policy-title">
        <i class="bi bi-shield-check"></i>
        服务政策
      </h1>
      <p class="policy-subtitle">了解我们的服务承诺和保修条款，透明政策，让您安心使用</p>
      
      <div class="policy-main-card">
        <div class="policy-sidebar">
          <div
            v-for="(item, idx) in categories"
            :key="item.title"
            :class="['policy-category', { active: idx === activeIndex }]"
            @click="activeIndex = idx"
          >
            <div class="category-icon">
              <i :class="getCategoryIcon(item.title)"></i>
            </div>
            <span class="category-title">{{ item.title }}</span>
            <i class="bi bi-chevron-right category-arrow"></i>
          </div>
        </div>
        <div class="policy-content-area">
          <h2 class="policy-content-title">
            <i class="bi bi-info-circle"></i>
            {{ categories[activeIndex].title }}
          </h2>
          <div class="policy-content-detail">
            <template v-if="activeIndex === 0">
              <!-- 保修期表格 -->
              <div class="policy-table-wrapper">
                <table class="policy-table">
                  <thead>
                    <tr>
                      <th style="width: 120px;">售后类型</th>
                      <th>明细</th>
                      <th>以下条件不满足退换，终止条件</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle return">退</div>
                      </td>
                      <td>
                        产品签收后15个自然日内：<br>
                        1. 质量问题/人为损坏的非功能故障，且无使用痕迹；<br>
                        2. 运输过程中产生产品瑕疵，且运输公司提供损坏凭证
                      </td>
                      <td rowspan="3" class="conditions-cell">
                        ×自收货日起超过十五（15）个自然日后提出退换要求。<br>
                        ×退货不全，外包装、附件、赠品、说明书不完整或有私人原因导致受损。<br>
                        ×退换时无法提供原始购买凭证或单据，或事前未进行登记、验收。<br>
                        ×发生非产品本身质量问题导致的损坏、挤压，以及人为的损坏造成。非因物（如：进水、摔落），不在保修范围。未经检测判断非功能性故障的商品谢绝退换。<br>
                        ×拆解、涂改或丢失、机身序列号、防水标记、防伪标记等。<br>
                        ×因不可抗力造成损坏，如火灾、水灾、地震、交通事故等不可抗力造成损坏的产品。
                      </td>
                    </tr>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle exchange">换</div>
                      </td>
                      <td>
                        1. 自购买之日起产品本身质量问题影响用户正常使用，出现非人为的性能故障；<br>
                        2. 无任何使用痕迹，无法开机等非用户损坏的故障或其他无人为引起的退换要求；<br>
                        3. 提供有效的购买凭证、购机发票号。
                      </td>
                    </tr>
                    <tr>
                      <td class="type-cell">
                        <div class="type-circle repair">修</div>
                      </td>
                      <td>
                        <strong>特殊说明</strong><br>
                        (a)免费维修：维修件终身免费维修期限累计90天，取货寄件计费；<br>
                        (b)付费维修：维修件终身付费维修计算；<br>
                        (c)拒绝维修：进水、火灾、地震等；<br>
                        (d)折扣维修：保修期外，维修件折扣计算
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </template>
            <template v-else>
              <div v-for="(p, i) in categories[activeIndex].content" :key="i" class="policy-desc-block">
                <div class="desc-icon">
                  <i class="bi bi-check-circle"></i>
                </div>
                <div class="desc-content">{{ p }}</div>
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
  data() {
    return {
      activeIndex: 0,
      categories: [
        {
          title: '保修期',
          content: []
        },
        {
          title: '服务范围',
          content: [
            '本服务政策适用于本公司销售的所有无人机及配件产品。具体服务内容及流程请咨询官方客服。'
          ]
        },
        {
          title: '免责声明',
          content: [
            '本公司对因用户操作不当、擅自拆解、改装等原因造成的损坏不承担保修责任。详情请参阅产品说明书及相关政策。'
          ]
        }
      ]
    }
  },
  methods: {
    getCategoryIcon(title) {
      const iconMap = {
        '保修期': 'bi bi-calendar-check',
        '服务范围': 'bi bi-gear',
        '免责声明': 'bi bi-exclamation-triangle'
      }
      return iconMap[title] || 'bi bi-shield-check'
    }
  }
}
</script>

<style scoped>
.policy-wrapper {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.policy-container {
  max-width: 1200px;
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
  color: #667eea;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border-left: 4px solid transparent;
  margin: 0.25rem 0;
}

.policy-category:hover {
  background: rgba(255, 255, 255, 0.1);
  border-left-color: rgba(255, 255, 255, 0.5);
}

.policy-category.active {
  background: rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
}

.category-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.category-icon i {
  color: white;
  font-size: 1.2rem;
}

.category-title {
  flex: 1;
  color: white;
  font-weight: 500;
  font-size: 1rem;
}

.category-arrow {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.policy-category.active .category-arrow {
  transform: rotate(90deg);
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
  color: #667eea;
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
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
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
  background: linear-gradient(135deg, #ff6b6b, #ee5a52);
}

.type-circle.exchange {
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
}

.type-circle.repair {
  background: linear-gradient(135deg, #45b7d1, #96c93d);
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
  border-left: 4px solid #667eea;
  transition: all 0.3s ease;
}

.policy-desc-block:hover {
  background: #e9ecef;
  transform: translateX(4px);
}

.desc-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
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
</style> 