<template>
  <div class="support-page">
    <!-- 固定顶部banner -->
    <section
      class="support-banner clickable-banner"
      :style="{ backgroundImage: `url('${fixedBanner.bgImg}')`, height: fixedBanner.height }"
      @click="goTo(fixedBanner.link)"
    >
      <div class="support-banner-overlay">
        <div class="banner-content">
          <h1 class="support-banner-title">{{ fixedBanner.title }}</h1>
          <p class="support-banner-subtitle">{{ fixedBanner.subtitle }}</p>
          <p class="support-banner-subtitle">{{ fixedBanner.subtitle2 }}</p>
          <div class="banner-arrow">
            <i class="bi bi-arrow-down"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- 只在/support主页面展示所有子banners -->
    <template v-if="$route.path === '/support'">
      <section
        v-for="(banner, idx) in allBanners"
        :key="banner.title"
        class="support-banner clickable-banner"
        :style="{ backgroundImage: `url('${banner.bgImg}')`, height: banner.height }"
        @click="goTo(banner.link)"
      >
        <div class="support-banner-overlay">
          <div class="banner-content">
            <div class="banner-icon">
              <i :class="getBannerIcon(banner.title)"></i>
            </div>
            <h2 class="support-banner-title">{{ banner.title }}</h2>
            <p class="support-banner-subtitle">{{ banner.subtitle }}</p>
            <p class="support-banner-subtitle">{{ banner.subtitle2 }}</p>
            <div class="banner-action">
              <span class="action-text">点击查看详情</span>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </template>
    
    <router-view v-if="$route.path !== '/support'" />
  </div>
</template>

<script>
export default {
  name: 'Support',
  metaInfo: {
    title: '技术支持 - 麒风智能无人机'
  },
  data() {
    return {
      fixedBanner: {
        title: '服务与支持',
        subtitle: '我们提供全面的技术支持与服务，确保您的问题快速解决',
        subtitle2: '专业团队，7×24小时为您服务',
        bgImg: '/images/home/service.png',
        height: '700px',
        link: '/support'
      },
      allBanners: [
        {
          title: '下载中心',
          subtitle: '获取最新的软件、固件和文档资料',
          subtitle2: '支持多种产品型号，持续更新维护',
          bgImg: '/images/home/download.png',
          height: '500px',
          link: '/support/downloads'
        },
        {
          title: '售后服务政策',
          subtitle: '了解我们的服务承诺和保修条款',
          subtitle2: '透明政策，让您安心使用',
          bgImg: '/images/home/after-sale.png',
          height: '600px',
          link: '/support/policy'
        },
        {
          title: '常见问题',
          subtitle: '快速找到您需要的答案',
          subtitle2: '分类整理，便于查找',
          bgImg: '/images/home/after-sale.png',
          height: '600px',
          link: '/support/faq'
        },
        {
          title: '服务热线',
          subtitle: '热线电话：400-888-8888',
          subtitle2: '周一至周六：9:00-18:00',
          bgImg: '/images/home/after-sale.png',
          height: '600px',
          link: '/support/hotline'
        }
      ]
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    },
    getBannerIcon(title) {
      const iconMap = {
        '下载中心': 'bi bi-download',
        '售后服务政策': 'bi bi-shield-check',
        '常见问题': 'bi bi-question-circle',
        '服务热线': 'bi bi-telephone'
      }
      return iconMap[title] || 'bi bi-arrow-right'
    }
  }
}
</script>

<style scoped>
.support-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* Banner样式 */
.support-banner {
  position: relative;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: 0;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s ease;
}

.support-banner:last-of-type {
  margin-bottom: 0;
}

.support-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  z-index: 1;
}

.support-banner-overlay {
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 4rem 2rem;
}

.banner-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.banner-icon {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
}

.banner-icon i {
  font-size: 2rem;
  color: white;
}

.support-banner-title {
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  margin: 0;
  line-height: 1.2;
}

.support-banner-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin: 0;
  line-height: 1.5;
  max-width: 600px;
}

.banner-arrow {
  margin-top: 2rem;
  animation: bounce 2s infinite;
}

.banner-arrow i {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
}

.banner-action {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.banner-action:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.action-text {
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
}

.banner-action i {
  color: white;
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.banner-action:hover i {
  transform: translateX(3px);
}

/* 点击效果 */
.clickable-banner {
  cursor: pointer;
  transition: all 0.3s ease;
}

.clickable-banner:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.clickable-banner:hover::before {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
}

/* 动画效果 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .banner-content {
    max-width: 95%;
  }
}

@media (max-width: 768px) {
  .support-banner {
    margin-bottom: 1rem;
  }
  
  .support-banner-overlay {
    padding: 2rem 1rem;
  }
  
  .banner-content {
    max-width: 90%;
    gap: 1rem;
  }
  
  .banner-icon {
    width: 60px;
    height: 60px;
  }
  
  .banner-icon i {
    font-size: 1.5rem;
  }
  
  .support-banner-title {
    font-size: 2rem;
  }
  
  .support-banner-subtitle {
    font-size: 1rem;
  }
  
  .banner-arrow {
    margin-top: 1rem;
  }
  
  .banner-arrow i {
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .support-banner-overlay {
    padding: 1.5rem 0.5rem;
  }
  
  .banner-content {
    max-width: 98%;
  }
  
  .support-banner-title {
    font-size: 1.8rem;
  }
  
  .support-banner-subtitle {
    font-size: 0.9rem;
  }
  
  .banner-action {
    padding: 0.5rem 1rem;
  }
  
  .action-text {
    font-size: 0.85rem;
  }
}

/* 时间线样式（保留原有样式） */
.text-accent {
  color: var(--accent-color);
}

.bg-accent {
  background-color: var(--accent-color);
  color: white;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 2px;
  background: var(--block-background);
  left: 50px;
  top: 0;
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  left: 25px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1;
}

.timeline-content {
  margin-left: 100px;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-icon {
    width: 40px;
    height: 40px;
    left: 10px;
    font-size: 1.2rem;
  }
  
  .timeline-content {
    margin-left: 60px;
    padding: 1rem;
  }
}
</style> 