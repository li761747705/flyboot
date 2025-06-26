<!--场景化解决方案-->
<template>
  <div class="applications-page">
    <!-- 顶部 Banner -->
    <div class="banner">
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
          image: '/images/home/scene/Surveyingandmapping.png',
          icon: '/images/applications/mapping.png',
          link: '/applications/mapping'
        },
        { 
          id: 2,
          title: '水利', 
          image: '/images/home/scene/水利已选用.png',
          icon: '/images/applications/inspection.png',
          link: '/applications/inspection'
        },
        { 
          id: 3,
          title: '应急', 
          image: '/images/home/scene/应急已选用.png',
          icon: '/images/applications/delivery.png',
          link: '/applications/delivery'
        },
        { 
          id: 4,
          title: '交通', 
          image: '/images/home/scene/交通已选用.png',
          icon: '/images/applications/aerial.png',
          link: '/applications/aerial'
        },
        { 
          id: 5,
          title: '环保', 
          image: '/images/home/scene/环保.png',
          icon: '/images/applications/spraying.png',
          link: '/applications/spraying'
        },
        { 
          id: 6,
          title: '森林勘察', 
          image: '/images/home/scene/森林已选用.png',
          icon: '/images/applications/agriculture.png',
          link: '/applications/agriculture'
        },
        { 
          id: 7,
          title: '电力巡检', 
          image: '/images/home/scene/电力.png',
          icon: '/images/applications/firefighting.png',
          link: '/applications/firefighting'
        },
        { 
          id: 8,
          title: '农业应用', 
          image: '/images/home/scene/农林.png',
          icon: '/images/applications/farming.png',
          link: '/applications/farming'
        },
        { 
          id: 9,
          title: '运载应用', 
          image: '/images/home/scene/运载已选用.png',
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

.banner {
  height: 400px;
  background-color: antiquewhite;
  /* background-image: url('/images/applications/banner.jpg'); */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.banner-content {
  position: relative;
  z-index: 1;
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
  border-radius: 10px;
  padding: 0;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 220px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
}

.application-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card-overlay {
  width: 100%;
  /* background: rgba(0,0,0,0.45); */
  padding: 24px 0 16px 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.application-card h3 {
  font-size: 22px;
  color: #fff;
  margin: 0;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
}

@media (max-width: 992px) {
  .applications-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .applications-grid-3 {
    grid-template-columns: 1fr;
  }
}
</style> 