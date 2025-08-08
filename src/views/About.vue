<template>
  <div class="about-page">
   

    <!-- 子路由内容区 -->
    <router-view v-if="$route.path !== '/about'" />
    


    <!-- 主关于我们展示区 (仅在没有子路由时显示) -->
    <div v-else>
       <!-- 页面标题区 -->
    <section class="page-header">
      <!-- 顶部 Banner -->
      <div class="banner">
        <img class="banner-bg" src="/images/about/通用图片1900X300.png" alt="banner" loading="lazy" />
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1>关于麒风智能</h1>
          <p>不止于飞行，更关乎使命与愿景</p>
        </div>
      </div>
    </section>
      <section class="about-main-section">
        <div class="container">
      
          <!-- 公司厂房大图及简介（用数组渲染） -->
          <div v-for="(item, idx) in factoryList" :key="idx" class="about-factory-section mb-5"  >
            <img class="about-factory-img" src="/images/about/通用图片1900X640.png" alt="公司厂房" loading="lazy" />
            <div v-if="item.desc" class="about-factory-desc" v-html="item.desc"></div>
          </div>
          <!-- 公司介绍卡片 -->
          <div class="row mb-5">
            <div class="col-md-4 mb-4" v-for="card in aboutCards" :key="card.title">
              <div class="about-card">
                <div class="about-image">
                  <img :src="card.img" :alt="card.title" class="img-fluid" loading="lazy">
                  <div class="image-overlay">
                    <i :class="card.icon"></i>
                  </div>
                </div>
                <div class="about-content">
                  <h3>{{ card.title }}</h3>
                  <p>{{ card.desc }}</p>
                  <router-link :to="card.link" class="btn btn-primary">
                    <span>{{ card.btn }}</span>
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 技术实力展示 -->
          <div class="row mt-5">
            <div class="col-12">
              <div class="tech-stats-section">
                <div class="stats-header">
                  <h2>技术实力</h2>
                  <p>扎实的基本功：复杂环境下，稳定飞行，高效执行任务</p>
                </div>
                <div class="stats-grid">
                  <div class="stat-item" v-for="stat in stats" :key="stat.label">
                    <div class="stat-number">{{ stat.number }}</div>
                    <div class="stat-label">{{ stat.label }}</div>
                    <div class="stat-icon">
                      <i :class="stat.icon"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      factoryList: [
        {
          desc: '麒风智能专注于工业级无人机系统研发与创新应用，以尖端飞行控制、智能感知与集群协同技术为核心，致力于为全球客户提供安全、高效、可靠的全场景空中解决方案。+行业提供革命性的空中作业方案。'
        },
        {
          desc: '深耕行业十年，我们已构建覆盖测绘勘探、应急救援、能源巡检、智慧农业、物流运输等领域的完整产品矩阵。从厘米级精准定位的航测无人机，到复杂环境全天候作业的无人直升机，每一款产品都承载着对极致性能与用户价值的执着追求。'
        },
          {
          desc: '我们不仅提供硬件，更打造“端到端”服务体系——从定制化需求对接、专业飞手培训，到7×24小时全生命周期技术支持，始终以客户成功为航标，让科技之力真正赋能千行百业。以创新为翼，以责任为舵'
        },
        {
          desc: `<h2 style="font-size:1.3rem;margin-bottom:0.7em;">1. 核心团队</h2>
            <p>我们的团队由人工智能、工业设计等领域组成，核心成员平均拥有15年以上行业经验，曾主导多个国家级无人机项目研发。</p>
            <h2 style="font-size:1.3rem;margin:1.5em 0 0.7em 0;">2. 技术团队</h2>
            <p>60+人的专职研发团队，涵盖飞控系统、动力系统、传感器融合等关键技术方向，已申请200+项技术专利，其中发明专利占比超40%。</p>
            <h2 style="font-size:1.3rem;margin:1.5em 0 0.7em 0;">3. 生产团队</h2>
            <p>20000㎡现代化生产基地，配备SMT贴片机、六轴机械臂等智能设备，通过ISO9001质量管理体系认证，月产能达5000+台。</p>`
        }
      ],
      aboutCards: [
        {
          title: '公司简介',
          desc: '了解麒风智能的发展历程、企业使命和我们的技术优势',
          img: '/images/about/company.jpg',
          icon: 'bi bi-building',
          link: '/about/company',
          btn: '了解更多'
        },
        {
          title: '联系我们',
          desc: '获取我们的联系信息，包括电话、邮箱、地址以及在线咨询方式',
          img: '/images/about/contact.jpg',
          icon: 'bi bi-telephone',
          link: '/about/contact',
          btn: '联系我们'
        },
        {
          title: '加入我们',
          desc: '查看麒风智能的职位空缺，加入我们的团队，一起推动无人机技术的未来',
          img: '/images/about/jobs.jpg',
          icon: 'bi bi-people',
          link: '/about/jobs',
          btn: '查看职位'
        }
      ],
      stats: [
        { number: 51, label: '发明专利', icon: 'bi bi-lightbulb' },
        { number: 64, label: '实用新型专利', icon: 'bi bi-gear' },
        { number: 19, label: '外观专利', icon: 'bi bi-palette' },
        { number: 29, label: '软件著作权', icon: 'bi bi-code-square' }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, rgb(178,0,0) 0%, rgb(220,0,0) 100%);
  position: relative;
  overflow: hidden;
}

.banner {
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  pointer-events: none;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.banner-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.banner h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner p {
  font-size: 1.3rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* 主要内容区域 */
.about-main-section {
  padding: 4rem 0;
}

/* 关于卡片 */
.about-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.about-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-card:hover .about-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(178, 0, 0, 0.8), rgba(220, 0, 0, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 3rem;
  color: white;
}

.about-content {
  padding: 2rem;
}

.about-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.about-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-content .btn {
  color: rgb(178,0,0);
  background: #fff;
  border: none;
  transition: none;
}
.about-content .btn:hover {
  background: rgb(178,0,0);
  color: #fff;
  box-shadow: none;
  transform: none;
}

.section-line {
  background: rgb(178,0,0) !important;
}

/* 技术实力区域 */
.tech-stats-section {
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stats-header {
  text-align: center;
  margin-bottom: 3rem;
}

.stats-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.stats-header p {
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  color: white;
}

.stat-item:hover .stat-number,
.stat-item:hover .stat-label {
  color: white;
}

.stat-item:hover .stat-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner h1 {
    font-size: 2.5rem;
  }
  
  .banner p {
    font-size: 1.1rem;
  }
  
  .about-main-section {
    padding: 2rem 0;
  }
  
  .tech-stats-section {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 300px;
  }
  
  .banner h1 {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}

/* 新增样式 */
.about-factory-section {
  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-factory-img {
  width: 100%;
  max-width: 1900px;
  min-height: 320px;
  max-height: 640px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.10);
  margin-bottom: 2.2rem;
  display: block;
}
.about-factory-desc {
  font-size: 1.22rem;
  color: #222;
  text-align: center;
  line-height: 1.85;
  max-width: 1100px;
  margin: 0 auto 0 auto;
  padding: 0 18px;
}

.about-production-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-production-img {
  width: 100%;
  max-width: 1100px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin-bottom: 1.2rem;
  display: block;
}
.about-production-desc {
  font-size: 1.12rem;
  color: #222;
  text-align: center;
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto 1.5rem auto;
  padding: 0 16px;
}
.about-production-gallery {
  width: 100%;
  max-width: 1100px;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}
.about-production-gallery-img {
  width: 49%;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  object-fit: cover;
  display: block;
}
</style>