<!--行业应用-->
<template>
  <div class="applications-page">
    <!-- 顶部 Banner -->
    <div class="banner-img-wrapper">
     <img src="/images/applications/行业应用1900X700.png" :alt="$t('applications.pageTitle')" class="banner-img" loading="lazy" />
      <div class="banner-content">
       <h1>{{ currentTitle }}</h1>
       <h3>{{ currentDesc }}</h3>
      </div>
    </div>
  
    <!-- 应用展示区 -->
    <div class="applications-section" v-if="$route.path === '/applications'">
      <div class="container mt-4">
        <h2 class="text-center mb-5 position-relative">{{ $t('applications.sectionTitle') }}<span class="section-line"></span></h2>
        <h3 class="text-center mb-1">{{ $t('applications.sectionDescription') }}</h3>
      </div>
      <div class="container">
        <div class="applications-grid">
          <div v-for="app in applications" :key="app.id" class="application-card" @click="goToApplication(app.link)"
            :style="{ backgroundImage: 'url(' + app.image + ')' }">
              <h3>{{ app.title }}</h3>
              <h6>{{ app.remake }}</h6>
            <a :href="app.link" class="btn btn-light rounded-pill px-4" @click.stop>{{ $t('applications.moreButton') }}</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 路由出口 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Applications',
  metaInfo() {
    return {
      title: this.$t('meta.applications.title'),
      meta: [
        { name: 'description', content: this.$t('meta.applications.description') },
        { name: 'keywords', content: this.$t('meta.applications.keywords') }
      ]
    }
  },
  data() {
    return {}
  },
  methods: {
    goToApplication(route) {
      this.$router.push(route)
    }
  },
  computed: {
    applications() {
      // 依赖语言切换，确保文案更新
      const locale = this.$i18n && this.$i18n.locale;
      return [
        {
          id: 1,
          title: this.$t('applications.cards.mapping.title'),
          path: 'mapping',
          remake: this.$t('applications.cards.mapping.description'),
          image: '/images/applications/测绘400X620.png',
          link: '/applications/mapping',
          desc: this.$t('applications.cards.mapping.shortDesc'),
          __locale: locale
        },
        {
          id: 2,
          title: this.$t('applications.cards.inspection.title'),
          path: 'inspection',
          remake: this.$t('applications.cards.inspection.description'),
          image: '/images/applications/水利400X620.png',
          link: '/applications/inspection',
          desc: this.$t('applications.cards.inspection.shortDesc'),
          __locale: locale
        },
        {
          id: 3,
          title: this.$t('applications.cards.delivery.title'),
          path: 'delivery',
          remake: this.$t('applications.cards.delivery.description'),
          image: '/images/applications/应急400X620.png',
          link: '/applications/delivery',
          desc: this.$t('applications.cards.delivery.shortDesc'),
          __locale: locale
        },
        {
          id: 4,
          title: this.$t('applications.cards.aerial.title'),
          path: 'aerial',
          remake: this.$t('applications.cards.aerial.description'),
          image: '/images/applications/交通400X620.png',
          link: '/applications/aerial',
          desc: this.$t('applications.cards.aerial.shortDesc'),
          __locale: locale
        },
        {
          id: 5,
          title: this.$t('applications.cards.spraying.title'),
          path: 'spraying',
          remake: this.$t('applications.cards.spraying.description'),
          image: '/images/applications/环保400X620.png',
          link: '/applications/spraying',
          desc: this.$t('applications.cards.spraying.shortDesc'),
          __locale: locale
        },
        {
          id: 6,
          title: this.$t('applications.cards.agriculture.title'),
          path: 'agriculture',
          remake: this.$t('applications.cards.agriculture.description'),
          image: '/images/applications/森林400X620.png',
          link: '/applications/agriculture',
          desc: this.$t('applications.cards.agriculture.shortDesc'),
          __locale: locale
        },
        {
          id: 7,
          title: this.$t('applications.cards.powerline.title'),
          path: 'powerline',
          remake: this.$t('applications.cards.powerline.description'),
          image: '/images/applications/电力400X620.png',
          link: '/applications/powerline',
          desc: this.$t('applications.cards.powerline.shortDesc'),
          __locale: locale
        },
        {
          id: 8,
          title: this.$t('applications.cards.farming.title'),
          path: 'farming',
          remake: this.$t('applications.cards.farming.description'),
          image: '/images/applications/农业400X620.png',
          link: '/applications/farming',
          desc: this.$t('applications.cards.farming.shortDesc'),
          __locale: locale
        },
        {
          id: 9,
          title: this.$t('applications.cards.integration.title'),
          path: 'integration',
          remake: this.$t('applications.cards.integration.description'),
          image: '/images/applications/运载400X620.png',
          link: '/applications/integration',
          desc: this.$t('applications.cards.integration.shortDesc'),
          __locale: locale
        }
      ]
    },
    currentTitle() {
      const path = this.$route.path;
      const match = path.match(/^\/applications\/(\w+)/);
      if (match) {
        const found = this.applications.find(app => app.path === match[1]);
        return found ? found.title : this.$t('applications.pageTitle');
      }
      return this.$t('applications.pageTitle');
    },
    currentDesc() {
      const path = this.$route.path;
      const match = path.match(/^\/applications\/(\w+)/);
      if (match) {
        const found = this.applications.find(app => app.path === match[1]);
        return found ? (found.desc || this.$t('applications.pageDescription')) : this.$t('applications.pageDescription');
      }
      return this.$t('applications.pageDescription');
    }
  }
}
</script>

<style scoped>
.applications-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.banner-img-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.banner-img {
  width: 100%;
  height: 700px;
  object-fit: cover;
  display: block;
}

.banner-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.36);
  z-index: 2;
  pointer-events: none;
}

.banner h1 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.banner p {
  font-size: 24px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.applications-section {
  padding: 0 0 50px 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.application-card {
  background: #eee;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  position: relative;
  height: 320px;
  overflow: hidden;
   white-space: pre-wrap; /* 保留空格和换行 */
}

.application-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.application-card h3 {
  margin: 0;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 32px;
  left: 0;
  color: #fff;
}

.application-card h6 {
  margin: 0;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
}

.application-card .btn {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
}

.section-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 2px;
  background-color: rgb(178,0,0);
}

@media (max-width: 992px) {
  .applications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .application-card {
    height: 280px;
  }

  .application-card h3 {
    font-size: 1.3rem;
  }
}

@media (max-width: 600px) {
  .applications-grid {
    grid-template-columns: 1fr;
  }

  .application-card {
    height: 220px;
  }
}
</style>
