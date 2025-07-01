<!--场景化解决方案-->
<template>
  <div class="applications-page">
    <!-- 顶部 Banner -->
    <div class="banner-img-wrapper">
      <img src="/images/applications/场景化解决方案1900X700.png" alt="场景化解决方案" class="banner-img" />
      <div class="banner-content">
        <h1>场景化解决方案</h1>
        <p>为各行业提供专业的无人机解决方案</p>
      </div>
    </div>

    <!-- 应用展示区 -->
    <div class="applications-section" v-if="$route.path === '/applications'">
      <div class="container">
        <div class="applications-grid-3">
          <div v-for="app in applications" :key="app.id" class="application-card" @click="goToApplication(app.link)" :style="{ backgroundImage: 'url(' + app.image + ')'}">
            <div class="card-overlay">
              <h3>{{ app.title }}</h3>
              <a :href="app.link" class="btn btn-light rounded-pill px-4 mt-2" @click.stop>了解更多</a>
            </div>
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
  data() {
    return {
      applications: [
        { 
          id: 1,
          title: '测绘', 
          image: '/images/applications/测绘400X620.png',
          icon: '/images/applications/mapping.png',
          link: '/applications/mapping'
        },
        { 
          id: 2,
          title: '水利', 
          image: '/images/applications/水利400X620.png',
          icon: '/images/applications/inspection.png',
          link: '/applications/inspection'
        },
        { 
          id: 3,
          title: '应急', 
          image: '/images/applications/应急400X620.png',
          icon: '/images/applications/delivery.png',
          link: '/applications/delivery'
        },
        { 
          id: 4,
          title: '交通', 
          image: '/images/applications/交通400X620.png',
          icon: '/images/applications/aerial.png',
          link: '/applications/aerial'
        },
        { 
          id: 5,
          title: '环保', 
          image: '/images/applications/环保400X620.png',
          icon: '/images/applications/spraying.png',
          link: '/applications/spraying'
        },
        { 
          id: 6,
          title: '森林勘察', 
          image: '/images/applications/森林400X620.png',
          icon: '/images/applications/agriculture.png',
          link: '/applications/agriculture'
        },
        { 
          id: 7,
          title: '电力巡检', 
          image: '/images/applications/电力400X620.png',
          icon: '/images/applications/firefighting.png',
          link: '/applications/firefighting'
        },
        { 
          id: 8,
          title: '农业应用', 
          image: '/images/applications/农业400X620.png',
          icon: '/images/applications/farming.png',
          link: '/applications/farming'
        },
        { 
          id: 9,
          title: '运载应用', 
          image: '/images/applications/运载400X620.png',
          icon: '/images/applications/powerline.png',
          link: '/applications/powerline'
        }
      ]
    }
  },
  methods: {
    goToApplication(route) {
      this.$router.push(route)
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
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.36);
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
  padding: 60px 0;
}

.applications-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.application-card {
  background: #eee;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  position: relative;
  height: 320px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.application-card:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

.card-overlay {
  width: 100%;
  /* background: rgba(0,0,0,0.45); */
  padding: 24px 0 16px 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.application-card h3 {
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
}

@media (max-width: 992px) {
  .applications-grid-3 {
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
  .card-overlay {
    padding: 15px;
  }
  .banner {
    min-height: 120px;
    height: 38vw;
    max-height: 220px;
  }
}

@media (max-width: 600px) {
  .applications-grid-3 {
    grid-template-columns: 1fr;
  }
  .application-card {
    height: 220px;
  }
}
</style> 