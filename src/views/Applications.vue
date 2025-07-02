<!--行业应用-->
<template>
  <div class="applications-page">
    <!-- 顶部 Banner -->
    <div class="banner-img-wrapper">
     <img src="/images/applications/行业应用1900X700.png" alt="行业应用" class="banner-img" />
     <div class="banner-content">
       <h1>{{ currentTitle }}</h1>
       <h3>{{ currentDesc }}</h3>
     </div>
   </div>
  
    <!-- 应用展示区 -->
    <div class="applications-section" v-if="$route.path === '/applications'">
      <div class="container mt-1">
      <h2 class="text-center mb-5 position-relative">行业应用
        <span class="section-line"></span>
      </h2>
      <h3 class="text-center mb-1 position-relative">
        无人机在多个领域都有广泛的应用
      </h3>
    </div>
      <div class="container">
        <div class="applications-grid-3">
          <div v-for="app in applications" :key="app.id" class="application-card" @click="goToApplication(app.link)"
            :style="{ backgroundImage: 'url(' + app.image + ')' }">
            <div class="card-overlay">
              <h3>{{ app.title }}</h3>
              <h6>{{ app.remake }}</h6>
               <a :href="app.link" class="btn btn-light rounded-pill px-4 mt-2" @click.stop>更多</a>
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
          path: 'mapping',
          remake:'无人机测绘凭借高效快速的数据采集、高精度成果输出、灵活作业模式、成本效益显著以及强大的环境适应能力，已成为现代测绘领域的核心技术手段。',
          image: '/images/applications/测绘400X620.png',
          icon: '/images/applications/mapping.png',
          link: '/applications/mapping',
          desc: '灵活机动、精细准确、作业成本低、生产周期短'
        },
        {
          id: 2,
          title: '水利',
          path: 'inspection',
          remake:'提高监测效率、增强监测精度、提升应急响应能力、降低成本和提高安全性等方面。',
          image: '/images/applications/水利400X620.png',
          icon: '/images/applications/inspection.png',
          link: '/applications/inspection',
          desc: '督察手段现代化，提高工作效率，提升整体监管能力'
        },
        {
          id: 3,
          title: '应急',
          path: 'delivery',
          remake:'无人机可突破地面交通限制，在复杂地形中快速抵达灾区，实时监测灾情并制定救援方案，缩短响应时间。',
          image: '/images/applications/应急400X620.png',
          icon: '/images/applications/delivery.png',
          link: '/applications/delivery',
          desc: '利用快速灵活机动得特性，实现长时空中监测、实时多维动态呈现，创新应急管理体系。'
        },
        {
          id: 4,
          title: '交通',
          path: 'aerial',
          remake:'无人机航测技术在森林资源调查中的应用随着科技的不断发展，无人机航测技术逐渐应用于森林资源调查中，其高效、精准的特点在森林勘察中展现得淋漓尽致。',
          image: '/images/applications/交通400X620.png',
          icon: '/images/applications/aerial.png',
          link: '/applications/aerial',
          desc: '更准更快速地获取有效信息，复杂情况下迅速作出决策'
        },
        {
          id: 5,
          title: '环保',
          path: 'spraying',
          remake:'具备广域视野和快速机动能力，可实时监控交通状况，发现违规行为或拥堵情况后立即通过空中喊话提醒驾驶员，配合地面警力精准处置。',
          image: '/images/applications/环保400X620.png',
          icon: '/images/applications/spraying.png',
          link: '/applications/spraying',
          desc: '凭借高效、精准和环境适应性强的技术优势'
        },
        {
          id: 6,
          title: '森林勘察',
          path: 'agriculture',
          remake:'利用无人机搭载高清摄像设备、倾斜摄影测量技术等设备对电力线路、杆塔等元器件进行快速、高效的巡检。',
          image: '/images/applications/森林400X620.png',
          icon: '/images/applications/agriculture.png',
          link: '/applications/agriculture',
          desc: '监测森林资源、提供高效、安全的解决方案'
        },
        {
          id: 7,
          title: '电力巡检',
          path: 'powerline',
          remake:'无人机遥感系统可按需迅速查明环境现状，在建设项目环境保护管理、环境监测、环境监察、环境应急和生态保护等方面能够发挥极其重要的作用。',
          image: '/images/applications/电力400X620.png',
          icon: '/images/applications/firefighting.png',
          link: '/applications/powerline',
          desc: '安全、可靠、准确、高效的执行电力运维'
        },
        {
          id: 8,
          title: '农业应用',
          path: 'farming',
          remake:'无人机在农业领域的应用主要通过集成导航系统、传感器和自动化技术实现全流程智能化管理，主要涵盖植保作业、作物监测、精准施肥及收割等场景，显著提升农业生产效率并降低人力成本。',
          image: '/images/applications/农业400X620.png',
          icon: '/images/applications/farming.png',
          link: '/applications/farming',
          desc: '精准、高效、单人植保作业神器'
        },
        {
          id: 9,
          title: '运载应用',
          path: 'integration',
          remake:'无人机运载具有高效、灵活、成本低等优势，特别适用于偏远地区、复杂地形和紧急情况下的物流和运输需求。',
          image: '/images/applications/运载400X620.png',
          icon: '/images/applications/powerline.png',
          link: '/applications/integration',
          desc: '提高运输效率、减少碳排放和人力成本'
        }
      ]
    }
  },
  methods: {
    goToApplication(route) {
      this.$router.push(route)
    }
  },
  computed: {
     currentTitle() {
       const path = this.$route.path;
       const match = path.match(/^\/applications\/(\w+)/);
       if (match) {
         const found = this.applications.find(app => app.path === match[1]);
         return found ? found.title : '行业应用';
       }
       return '行业应用';
     },
     currentDesc() {
       const path = this.$route.path;
       const match = path.match(/^\/applications\/(\w+)/);
       if (match) {
         const found = this.applications.find(app => app.path === match[1]);
         return found ? ( found.desc || '广泛应用于测绘与地理信息、巡检、安防监控、应急等领域的多种应用场景。') : '广泛应用于测绘与地理信息、巡检、安防监控、应急等领域的多种应用场景。';
       }
       return '广泛应用于测绘与地理信息、巡检、安防监控、应急等领域的多种应用场景。';
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
  padding: 0 0 50px 0px;
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
  height: 100%;
  position: relative;
}

.application-card h3 {
  margin: 0 0 10px 0;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 32px;
  left: 0;
  color: #ffffff;
}

.application-card h6 {
  margin: 0 0 10px 0;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #ffffff;
}

.application-card .btn {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
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
/* 通用样式 */
.section-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 2px;
  background-color: rgb(255,0, 0);
}
</style>