<template>
  <div class="responsibility-page">
    <div class="responsibility-banner">
      <img src="/images/about/responsibility/通用-1900X400.png" :alt="$t('about.responsibilityPage.bannerAlt')" loading="lazy" />
    </div>
    <!-- 主要内容区下移 -->
    <div class="responsibility-content">
     <!-- 页面头部 -->
      <section class="responsibility-header">
        <div class="container">
          <div class="header-content">
            <h2 class="page-title">{{ $t('about.responsibilityPage.title') }}</h2>
            <p class="page-subtitle">{{ $t('about.responsibilityPage.subtitle') }}</p>
          </div>
        </div>
      </section>

      <!-- 社会责任项目 -->
      <section class="responsibility-projects">
        <div class="container">
          <div class="projects-container">
            <div
              class="project-item"
              :class="{ reverse: idx % 2 === 1 }"
              v-for="(item, idx) in projects"
              :key="item.title"
            >
              <div class="project-image">
                <div class="image-placeholder">
                  <img :src="item.img" :alt="$t(item.titleKey)" loading="lazy" />
                  </div>
              </div>
              <div class="project-content">
                <div class="project-header">
                  <div class="project-icon">
                    <i :class="item.icon"></i>
                  </div>
                  <h3 class="project-title">{{ $t(item.titleKey) }}</h3>
                </div>
                <div class="project-description">
                  <p>{{ $t(item.descKey) }}</p>
                  <div v-if="item.features" class="project-features">
                    <div class="feature-item" v-for="f in item.features" :key="f.textKey">
                      <i :class="f.icon"></i>
                      <span>{{ $t(f.textKey) }}</span>
                    </div>
                  </div>
                  <div v-if="item.stats" class="project-stats">
                    <div class="stat-item" v-for="s in item.stats" :key="s.labelKey">
                      <div class="stat-number">{{ s.number }}</div>
                      <div class="stat-label">{{ $t(s.labelKey) }}</div>
                    </div>
                  </div>
                  <div v-if="item.highlights" class="project-highlights">
                    <div class="highlight-item" v-for="h in item.highlights" :key="h.textKey">
                      <i :class="h.icon"></i>
                      <span>{{ $t(h.textKey) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 社会责任总结 -->
      <section class="responsibility-summary">
        <div class="container">
          <div class="summary-card">
            <div class="summary-header">
              <h3 class="summary-title">{{ $t('about.responsibilityPage.summary.title') }}</h3>
              <p class="summary-subtitle">{{ $t('about.responsibilityPage.summary.subtitle') }}</p>
            </div>
            <div class="summary-content">
              <div class="commitment-item" v-for="c in commitments" :key="c.titleKey">
                <i :class="c.icon"></i>
                <div class="commitment-text">
                  <h4>{{ $t(c.titleKey) }}</h4>
                  <p>{{ $t(c.descKey) }}</p>
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
  name: 'Responsibility',
  data() {
    return {
      projects: [
        {
          titleKey: 'about.responsibilityPage.projects.rescue.title',
          img: '/images/about/responsibility/通用430X420.png',
          icon: 'bi bi-heart-pulse',
          descKey: 'about.responsibilityPage.projects.rescue.desc',
          features: [
            { icon: 'bi bi-eye', textKey: 'about.responsibilityPage.projects.rescue.features.item1' },
            { icon: 'bi bi-wifi', textKey: 'about.responsibilityPage.projects.rescue.features.item2' },
            { icon: 'bi bi-shield-check', textKey: 'about.responsibilityPage.projects.rescue.features.item3' }
          ]
        },
        {
          titleKey: 'about.responsibilityPage.projects.agriculture.title',
          img: '/images/about/responsibility/通用430X420.png',
          icon: 'bi bi-droplet',
          descKey: 'about.responsibilityPage.projects.agriculture.desc',
          stats: [
            { number: '100+', labelKey: 'about.responsibilityPage.projects.agriculture.stats.item1' },
            { number: '90%+', labelKey: 'about.responsibilityPage.projects.agriculture.stats.item2' },
            { number: 'AI', labelKey: 'about.responsibilityPage.projects.agriculture.stats.item3' }
          ]
        },
        {
          titleKey: 'about.responsibilityPage.projects.earthquake.title',
          img: '/images/about/responsibility/通用430X420.png',
          icon: 'bi bi-telephone',
          descKey: 'about.responsibilityPage.projects.earthquake.desc',
          highlights: [
            { icon: 'bi bi-broadcast', textKey: 'about.responsibilityPage.projects.earthquake.highlights.item1' },
            { icon: 'bi bi-camera-video', textKey: 'about.responsibilityPage.projects.earthquake.highlights.item2' },
            { icon: 'bi bi-megaphone', textKey: 'about.responsibilityPage.projects.earthquake.highlights.item3' }
          ]
        }
      ],
      commitments: [
        {
          icon: 'bi bi-lightbulb',
          titleKey: 'about.responsibilityPage.summary.items.innovation.title',
          descKey: 'about.responsibilityPage.summary.items.innovation.desc'
        },
        {
          icon: 'bi bi-people',
          titleKey: 'about.responsibilityPage.summary.items.service.title',
          descKey: 'about.responsibilityPage.summary.items.service.desc'
        },
        {
          icon: 'bi bi-globe',
          titleKey: 'about.responsibilityPage.summary.items.environment.title',
          descKey: 'about.responsibilityPage.summary.items.environment.desc'
        }
      ]
    }
  }
}
</script>

<style scoped>
.responsibility-page {
  background: #f8f9fa;
  min-height: 100vh;
}

.responsibility-banner {
  width: 100%;
  height: 700px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
}
.responsibility-banner img {
  width: 100vw;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.responsibility-content {
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 16px 60px 16px;
}

/* 页面头部 */
.responsibility-header {
  color: rgb(0, 0, 0);
}

.header-content {
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 155px; /* 修改宽度，使其与文字等长 */
  height: 3px;
  background: rgb(178,0,0);
  border-radius: 2px;
}

.page-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-top: 1rem;
}

/* 项目区域 */
.responsibility-projects {
  padding: 3rem 0;
}

.projects-container {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.project-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.project-item.reverse {
  grid-template-columns: 1fr 1fr;
}

.project-item.reverse .project-image {
  order: 2;
}

.project-item.reverse .project-content {
  order: 1;
}

.project-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  border: 2px dashed #dee2e6;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  border-color: rgb(178,0,0);
  background: linear-gradient(135deg, #fff0f0, #ffe0e0);
}

.image-placeholder i {
  font-size: 3rem;
  color: rgb(178,0,0);
  margin-bottom: 1rem;
}

.image-placeholder span {
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  display: block;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgb(178,0,0), rgb(220,0,0));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
}

.project-description p {
  color: #2c3e50;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.project-features,
.project-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.feature-item,
.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 500;
}

.feature-item i,
.highlight-item i {
  color: rgb(178,0,0);
  font-size: 1rem;
}

.project-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 8px;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(178,0,0);
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.8rem;
  color: #6c757d;
  font-weight: 500;
}

/* 总结区域 */
.responsibility-summary {
  padding: 3rem 0;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1600px;
  margin: 0 auto;
}

.summary-header {
  text-align: center;
  margin-bottom: 3rem;
}

.summary-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.summary-subtitle {
  color: #6c757d;
  font-size: 1rem;
}

.summary-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.commitment-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.commitment-item:hover {
  background: linear-gradient(135deg, #fff0f0, #ffe0e0);
  transform: translateY(-2px);
}

.commitment-item i {
  font-size: 2rem;
  color: rgb(178,0,0);
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.commitment-text h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.commitment-text p {
  color: #6c757d;
  line-height: 1.5;
  font-size: 0.95rem;
}

/* 响应式设计 */
@media (max-width: 1600px) {
  .projects-container,
  .summary-card {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .project-item,
  .project-item.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem;
    max-width: 90%;
  }
  
  .project-item.reverse .project-image,
  .project-item.reverse .project-content {
    order: unset;
  }
  
  .project-stats {
    grid-template-columns: 1fr;
  }
  
  .summary-content {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .summary-card {
    padding: 2rem;
    max-width: 90%;
  }
}

@media (max-width: 576px) {
  .project-item {
    padding: 1.5rem;
    max-width: 98%;
  }
  
  .image-placeholder {
    height: 200px;
  }
  
  .project-title {
    font-size: 1.3rem;
  }
  
  .page-title {
    font-size: 1.8rem;
  }
  
  .summary-card {
    padding: 1.5rem;
    max-width: 98%;
  }
  
  .commitment-item {
    flex-direction: column;
    text-align: center;
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
</style>
