<template>
  <div class="company-page">

    <div class="company-banner">
      <img src="/images/about/company/通用-11900X400.png" :alt="$t('about.companyPage.bannerAlt')" loading="lazy" />
    </div>

    <!-- 顶部导航 -->
    <div class="nav-bar">
      <div class="nav-container">
        <div 
          v-for="tab in tabs"
          :key="tab.key"
          class="nav-item" 
          :class="{ 'active': activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          <i :class="tab.icon"></i>
          {{ $t(tab.labelKey) }}
        </div>
      </div>
    </div>

    <!-- Tab内容区域 -->
    <section v-if="activeTab === 'company'" class="company-section">
      <div class="container">
        <!-- 公司简介 -->
        <div class="company-intro">
          <div class="intro-text">
            <p>{{ $t('about.companyPage.intro.p1') }}</p>
            <p>{{ $t('about.companyPage.intro.p2') }}</p>
            <p>{{ $t('about.companyPage.intro.p3') }}</p>
          </div>
        </div>

        <!-- 核心数据 -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-card" v-for="stat in stats" :key="stat.labelKey">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ $t(stat.labelKey) }}</div>
              <div class="stat-icon">
                <i :class="stat.icon"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- 全球布局地图 -->
        <div class="map-section">
          <div class="map-container">
            <div class="map-placeholder">
              <span class="map-text">{{ $t('about.companyPage.map.title') }}</span>
              <div
                v-for="city in cities"
                :key="city.name"
                class="city-marker"
                :style="{ left: city.left, top: city.top }"
              >
                <div class="marker-dot"></div>
                <span class="city-name">{{ city.name }}</span>
              </div>
              </div>
          </div>
        </div>

        <!-- 合作国家说明 -->
        <div class="partnership-section">
          <div class="partnership-content">
            <p class="partnership-intro">{{ $t('about.companyPage.partnership.intro') }}</p>
            <div class="region-list">
              <div class="region-item" v-for="region in regions" :key="region.nameKey">
                <span class="region-name">{{ $t(region.nameKey) }}</span>
                <span class="region-countries">{{ $t(region.countriesKey) }}</span>
              </div>
            </div>
            <p class="partnership-summary">{{ $t('about.companyPage.partnership.summary') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section v-if="activeTab === 'history'" class="history-section">
      <div class="container">
        <div class="timeline-container">
          <div class="timeline-item" v-for="item in history" :key="item.year">
              <div class="timeline-image">
                <div class="image-placeholder">
                <img :src="item.img" :alt="$t('about.companyPage.history.imageAlt', { year: item.year })" loading="lazy" />
                </div>
              </div>
            <div class="timeline-marker">
              <div class="timeline-dot"></div>
            </div>
            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}｜{{ $t(item.titleKey) }}</div>
              <div class="timeline-description">
                <ul>
                  <li v-for="descKey in item.descKeys" :key="descKey">{{ $t(descKey) }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section v-if="activeTab === 'culture'" class="culture-section">
      <div class="container">
        <div class="culture-container">
          <div class="culture-item" v-for="(item, idx) in culture" :key="item.titleKey">
            <div class="culture-image" v-if="idx % 2 === 0">
              <img class="about-section-img" :src="item.img" :alt="$t(item.titleKey)" loading="lazy" />
            </div>
            <div class="culture-content">
              <div class="culture-title">
                <i :class="item.icon"></i>
                {{ $t(item.titleKey) }}
              </div>
              <div class="culture-list">
                <div class="culture-point" v-for="pointKey in item.pointsKeys" :key="pointKey">
                  <i class="bi bi-check-circle"></i>
                  <span v-html="$t(pointKey)"></span>
                </div>
              </div>
              </div>
            <div class="culture-image" v-if="idx % 2 === 1">
              <img class="about-section-img" :src="item.img" :alt="$t(item.titleKey)" loading="lazy" />
              </div>
              </div>
        </div>
      </div>
    </section>
 </div>
</template>

<script>
export default {
  name: 'Company',
  data() {
    return {
      activeTab: 'company',
      tabs: [
        { key: 'company', labelKey: 'about.companyPage.tabs.company', icon: 'bi bi-building' },
        { key: 'history', labelKey: 'about.companyPage.tabs.history', icon: 'bi bi-clock-history' },
        { key: 'culture', labelKey: 'about.companyPage.tabs.culture', icon: 'bi bi-heart' }
      ],
      stats: [
        { number: '2021年', labelKey: 'about.companyPage.stats.established', icon: 'bi bi-calendar-check' },
        { number: 10, labelKey: 'about.companyPage.stats.servedRegions', icon: 'bi bi-globe' },
        { number: '500+', labelKey: 'about.companyPage.stats.partners', icon: 'bi bi-people' }
      ],
      cities: [
        { name: 'SILICON VALLEY', left: '12%', top: '38%' },
        { name: 'WASHINGTON DC', left: '18%', top: '45%' },
        { name: 'NEW YORK', left: '22%', top: '33%' },
        { name: 'BILBAO', left: '44%', top: '38%' },
        { name: 'TEL AVIV', left: '54%', top: '44%' },
        { name: 'TANZANIA', left: '60%', top: '70%' },
        { name: 'BOMBAY / BANGALORE', left: '70%', top: '60%' },
        { name: 'BEIJING', left: '80%', top: '28%' },
        { name: 'SHANGHAI', left: '85%', top: '38%' }
      ],
      regions: [
        { nameKey: 'about.companyPage.partnership.regions.eu.name', countriesKey: 'about.companyPage.partnership.regions.eu.countries' },
        { nameKey: 'about.companyPage.partnership.regions.em.name', countriesKey: 'about.companyPage.partnership.regions.em.countries' },
        { nameKey: 'about.companyPage.partnership.regions.ap.name', countriesKey: 'about.companyPage.partnership.regions.ap.countries' }
      ],
      history: [
        {
          year: '2025年',
          titleKey: 'about.companyPage.history.items.y2025.title',
          img: '/images/about/company/通用410X240.png',
          descKeys: ['about.companyPage.history.items.y2025.desc.item1']
        },
        {
          year: '2024年',
          titleKey: 'about.companyPage.history.items.y2024.title',
          img: '/images/about/company/通用410X240.png',
          descKeys: ['about.companyPage.history.items.y2024.desc.item1', 'about.companyPage.history.items.y2024.desc.item2']
        },
        {
          year: '2023年',
          titleKey: 'about.companyPage.history.items.y2023.title',
          img: '/images/about/company/通用410X240.png',
          descKeys: ['about.companyPage.history.items.y2023.desc.item1']
        },
        {
          year: '2022年',
          titleKey: 'about.companyPage.history.items.y2022.title',
          img: '/images/about/company/通用410X240.png',
          descKeys: ['about.companyPage.history.items.y2022.desc.item1']
        },
        {
          year: '2021年',
          titleKey: 'about.companyPage.history.items.y2021.title',
          img: '/images/about/company/通用410X240.png',
          descKeys: ['about.companyPage.history.items.y2021.desc.item1']
        }
      ],
      culture: [
        {
          titleKey: 'about.companyPage.culture.values.title',
          icon: 'bi bi-heart-fill',
          img: '/images/about/company/通用620X420.png',
          pointsKeys: [
            'about.companyPage.culture.values.points.item1',
            'about.companyPage.culture.values.points.item2',
            'about.companyPage.culture.values.points.item3',
            'about.companyPage.culture.values.points.item4',
            'about.companyPage.culture.values.points.item5',
            'about.companyPage.culture.values.points.item6',
            'about.companyPage.culture.values.points.item7'
          ]
        },
        {
          titleKey: 'about.companyPage.culture.training.title',
          icon: 'bi bi-mortarboard',
          img: '/images/about/company/通用620X420.png',
          pointsKeys: [
            'about.companyPage.culture.training.points.item1',
            'about.companyPage.culture.training.points.item2',
            'about.companyPage.culture.training.points.item3'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.company-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* 导航栏 */
.nav-bar {
  background: linear-gradient(38deg, #4483b1 0%, #102f4f 100%);
  padding: 1rem 0;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 0;
  max-width: 1600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  padding: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

.nav-item.active {
  background: white;
  color: rgb(178,0,0);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.nav-item i {
  font-size: 1.1rem;
}

/* 公司介绍区域 */
.company-section {
  padding: 2rem 0;
}

.company-intro {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.intro-text p:last-child {
  margin-bottom: 0;
}

/* 统计数据 */
.stats-section {
  margin-bottom: 3rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
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
}

/* 地图区域 */
.map-section {
  margin-bottom: 3rem;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.map-container {
  background: white;
  background-image: url('/public/images/about/company/01.png');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.map-placeholder {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.map-text {
  color: #192b3a;
  font-size: 1.2rem;
  font-weight: 500;
}

.city-marker {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.marker-dot {
  width: 12px;
  height: 12px;
  background: rgb(178,0,0);
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.city-name {
  font-size: 0.8rem;
  color: #2c3e50;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}

/* 合作说明 */
.partnership-section {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}

.partnership-intro {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.region-list {
  margin-bottom: 2rem;
}

.region-item {
  display: flex;
  margin-bottom: 1rem;
  align-items: baseline;
}

.region-name {
  font-weight: 600;
  color: rgb(178,0,0);
  min-width: 100px;
}

.region-countries {
  color: #2c3e50;
}

.partnership-summary {
  color: #6c757d;
  line-height: 1.6;
  font-style: italic;
}

/* 发展历程 */
.history-section {
  padding: 2rem 0;
}

.timeline-container {
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  transform: translateX(-50%);
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(178, 0, 0, 0.3);
}

.timeline-item {
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;
}

.timeline-item:nth-child(1) { animation-delay: 0.1s; }
.timeline-item:nth-child(2) { animation-delay: 0.2s; }
.timeline-item:nth-child(3) { animation-delay: 0.3s; }
.timeline-item:nth-child(4) { animation-delay: 0.4s; }
.timeline-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 偶数项：图片在右，文字在左 */
.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

/* 奇数项：图片在左，文字在右 */
.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-content {
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(178, 0, 0, 0.1);
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 20px 20px 0 0;
}

/* 奇数项：文字向右偏移 */
.timeline-item:nth-child(odd) .timeline-content {
  margin-left: 3rem;
  transform: translateX(20px);
}

/* 偶数项：文字向左偏移 */
.timeline-item:nth-child(even) .timeline-content {
  margin-right: 3rem;
  transform: translateX(-20px);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.timeline-item:nth-child(odd) .timeline-content:hover {
  transform: translateX(20px) translateY(-5px);
}

.timeline-item:nth-child(even) .timeline-content:hover {
  transform: translateX(-20px) translateY(-5px);
}

.timeline-year {
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.timeline-year::before {
  content: '';
  width: 20px;
  height: 3px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 2px;
}

.timeline-description ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.timeline-description li {
  color: #2c3e50;
  line-height: 1.8;
  margin-bottom: 0.8rem;
  padding-left: 2rem;
  position: relative;
  font-size: 1.05rem;
}

.timeline-description li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: rgb(178,0,0);
  font-weight: bold;
  font-size: 0.8rem;
  top: 0.2rem;
}

.timeline-description li:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  pointer-events: none;
}

.timeline-dot {
  width: 24px;
  height: 24px;
  background: white;
  border: 5px solid rgb(178,0,0);
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(178, 0, 0, 0.4);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: rgb(178,0,0);
  border-radius: 50%;
}

.timeline-item:hover .timeline-dot {
  transform: scale(1.2);
  box-shadow: 0 6px 25px rgba(178, 0, 0, 0.6);
}

.timeline-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 410px;
  height: 240px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  border: 2px dashed #dee2e6;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.image-placeholder::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(178, 0, 0, 0.1), rgba(220, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.timeline-item:hover .image-placeholder::before {
  opacity: 1;
}

.image-placeholder i {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
  color: rgb(178,0,0);
  transition: all 0.3s ease;
  z-index: 1;
  position: relative;
}

.timeline-item:hover .image-placeholder i {
  transform: scale(1.1);
  color: rgb(220,0,0);
}

.image-placeholder span {
  font-size: 0.95rem;
  text-align: center;
  font-weight: 500;
  z-index: 1;
  position: relative;
}

/* 企业文化 */
.culture-section {
  padding: 2rem 0;
}

.culture-container {
  max-width: 1600px;
  margin: 0 auto;
}

.culture-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.culture-item:nth-child(even) {
  grid-template-columns: 1fr 1fr;
}

.culture-item:nth-child(even) .culture-image {
  order: 2;
}

.culture-item:nth-child(even) .culture-content {
  order: 1;
}

.culture-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 2rem;
}

.culture-title i {
  color: rgb(178,0,0);
}

.culture-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.culture-point {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  line-height: 1.6;
}

.culture-point i {
  color: rgb(178,0,0);
  font-size: 1.1rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
}

.culture-point span {
  color: #2c3e50;
}

.culture-image {
  display: flex;
  justify-content: center;
}

.culture-image .image-placeholder {
  width: 100%;
  height: 250px;
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .company-intro,
  .stats-section,
  .map-section,
  .partnership-section,
  .timeline-container,
  .culture-container {
    max-width: 95%;
  }
  
  .nav-container {
    max-width: 95%;
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: 2rem;
  }
  
  .timeline-item:nth-child(even) .timeline-content {
    margin-right: 2rem;
  }
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    border-radius: 12px;
    max-width: 90%;
  }
  
  .nav-item {
    border-radius: 8px;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-container::before {
    left: 30px;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
  }
  
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    flex-direction: column;
  }
  
  .timeline-content {
    margin: 1rem 0 0 4rem;
    width: calc(100% - 4rem);
    transform: none !important;
  }
  
  .timeline-content:hover {
    transform: translateY(-5px) !important;
  }
  
  .timeline-marker {
    left: 30px;
    top: 0;
    transform: translateX(-50%);
    position: absolute;
  }
  
  .timeline-image {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
  
  .image-placeholder {
    width: 100%;
    height: 150px;
  }
  
  .culture-item {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .culture-item:nth-child(even) .culture-image {
    order: 1;
  }
  
  .culture-item:nth-child(even) .culture-content {
    order: 2;
  }
  
  .company-intro,
  .partnership-section {
    padding: 2rem;
  }
}

@media (max-width: 576px) {
  .company-intro,
  .stats-section,
  .map-section,
  .partnership-section,
  .timeline-container,
  .culture-container {
    max-width: 98%;
  }
  
  .nav-container {
    max-width: 98%;
  }
  
  .company-intro,
  .partnership-section {
    padding: 1.5rem;
  }
  
  .timeline-content {
    padding: 1.5rem;
    margin-left: 3rem;
    width: calc(100% - 3rem);
  }
  
  .timeline-marker {
    left: 12px;
  }
  
  .timeline-image {
    margin-left: 3rem;
    width: calc(100% - 3rem);
  }
  
  .culture-item {
    padding: 1.5rem;
  }
  
  .timeline-container::before {
    left: 20px;
  }
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
.company-banner {
  width: 100%;
  height: 520px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}

  .company-banner img {
  width: 100vw;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style>
