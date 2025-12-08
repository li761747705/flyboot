<!-- 下载中心 -->
<template>
  <div class="downloads-page">
    <div class="downloads-container">
      <h2 class="downloads-title">
        <i class="bi bi-download"></i>
        {{ $t('support.downloadsPage.title') }}
      </h2>
      <p class="downloads-subtitle">{{ $t('support.downloadsPage.subtitle') }}</p>
      <div class="downloads-grid">
        <div
          v-for="item in series"
          :key="item.titleKey"
          class="downloads-card"
          @click="goTo(item.link)"
          :style="{ backgroundImage: `url('${item.img}')` }"
        >
          <div class="card-bg-mask"></div>
          <div class="downloads-card-title">{{ $t(item.titleKey) }}</div>
          <div class="downloads-card-link">
            <span>{{ $t('support.downloadsPage.cardLinkText') }}</span>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Downloads',
  metaInfo() {
    return {
      title: this.$t('meta.support.downloads.title'),
      meta: [
        { name: 'description', content: this.$t('meta.support.downloads.description') },
        { name: 'keywords', content: this.$t('meta.support.downloads.keywords') }
      ]
    }
  },
  data() {
    return {
      series: [
        { titleKey: 'support.downloadsPage.series.fpv', link: '/download/fpv', img: '/images/support/download/产品系列：穿越机400X400.png' },    
        { titleKey: 'support.downloadsPage.series.multiRotor', link: '/download/multirotor', img: '/images/support/download/产品系列：多轴400X400.png' },
        { titleKey: 'support.downloadsPage.series.fixedWing', link: '/download/fixedwing', img: '/images/support/download/产品系列：固定翼400X400.png' },
        { titleKey: 'support.downloadsPage.series.helicopter', link: '/download/helicopter', img: '/images/support/download/产品系列：直升机400X400.png' }
      ]
    }
  },
  methods: {
    goTo(link) {
      this.$router.push(link)
    }
  }
}
</script>

<style scoped>
.downloads-page {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
  padding: 2rem 0;
}

.downloads-container {

  margin: 0 auto;
  padding: 0 2rem;
}

.downloads-title {
  font-size: 3.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.downloads-title i {
  color: rgb(178, 0, 0);
  font-size: 2.5rem;
}

.downloads-subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #6c757d;
  margin-bottom: 3.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.downloads-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.downloads-card {
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1/1;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 36px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.downloads-card-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #222;
  text-shadow: 0 2px 8px #fff, 0 0px 2px #fff, 0 0px 2px #fff;
}
.downloads-card-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  color: #222;
  font-weight: 700;
  transition: all 0.3s ease;
  justify-content: center;
  text-shadow: 0 2px 8px #fff, 0 0px 2px #fff, 0 0px 2px #fff;
  margin-bottom: 2.5rem;
}
.card-bg-mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  transition: background 0.3s;
}
.downloads-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(139, 148, 189, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}
.downloads-card:hover {
  transform: scale(1.08) translateY(-14px);
  box-shadow: 0 24px 64px rgba(102, 126, 234, 0.22);
  border-color: #3d4257;
}
.downloads-card:hover::before {
  opacity: 1;
}
.downloads-card:hover .downloads-card-link {
  color: #15191f;
}
.downloads-card-link i {
  transition: transform 0.3s ease;
}
.downloads-card:hover .downloads-card-link i {
  transform: translateX(10px);
}

@media (max-width: 1200px) {
  .downloads-container {
    max-width: 98%;
  }
  .downloads-grid {
    max-width: 98%;
  }
}
@media (max-width: 900px) {
  .downloads-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    max-width: 100%;
  }
  .downloads-card {
    max-width: 100%;
    aspect-ratio: 1/1;
  }
}
@media (max-width: 768px) {
  .downloads-page {
    padding: 1.5rem 0;
  }
  .downloads-container {
    padding: 0 1rem;
  }
  .downloads-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  .downloads-title i {
    font-size: 1.5rem;
  }
  .downloads-subtitle {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .downloads-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 100%;
  }
  .downloads-card {
    max-width: 100%;
    aspect-ratio: 1/1;
    border-radius: 20px;
  }
  .downloads-card-title {
    font-size: 1.3rem;
  }
  .downloads-card-link {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
}
@media (max-width: 576px) {
  .downloads-container {
    padding: 0 0.5rem;
  }
  .downloads-title {
    font-size: 1.5rem;
  }
  .downloads-subtitle {
    font-size: 0.9rem;
  }
  .downloads-card {
    height: 140px;
    border-radius: 12px;
  }
}
</style> 
