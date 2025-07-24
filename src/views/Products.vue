<template>
  <div class="products-page">
    <!-- 只在/products主页面显示主内容 -->
    <template v-if="$route.path === '/products'">
      <section v-for="banner in allBanners" :key="banner.title" class="support-banner clickable-banner"
        :style="{ backgroundImage: `url('${banner.bgImg}')`, height: banner.height }" @click="goTo(banner.link)">
        <div class="support-banner-overlay">
          <h1 class="support-banner-title">{{ banner.title }}</h1>
          <p class="support-banner-subtitle">{{ banner.subtitle }}</p>
          <p class="support-banner-subtitle">{{ banner.subtitle2 }}</p>
         </div>
      </section>
      <div class="container mt-5">
        <h2 class="text-center mb-4 position-relative">
          {{$t('products.titleCase')}}
          <span class="section-line"></span>
        </h2>
        <p class="text-center mb-3" style="font-size: 1.1rem; color: #333;">
          {{$t('products.titleCaseDes1')}}
         </p>
        <p class="text-center mb-5" style="font-size: 1.1rem; color: #333;">
          {{$t('products.titleCaseDes2')}}
        </p>
        <div v-for="(group, idx) in droneGroups" :key="group.title" class="row align-items-center mb-5 flex-wrap drone-group-row">
          <template v-if="idx % 2 === 0">
            <!-- 左图右文 -->
            <div class="col-md-6 mb-3 mb-md-0">
              <div>
                <template v-if="group.image">
                  <img :src="group.image" :alt="group.title" class="drone-group-img" loading="lazy" />
                </template>
                <template v-else>
                  <span class="drone-group-imgtext">{{ group.imageText }}</span>
                </template>
              </div>
            </div>
            <div class="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
              <div class="mb-2 drone-group-title">{{ group.title }}</div>
              <div class="mb-3 drone-group-desc">{{ group.desc }}</div>
              <router-link :to="group.link" class="btn btn-outline-danger rounded-pill px-4 drone-group-btn">
                查看产品 <span class="drone-group-btn-arrow">&gt;</span>
              </router-link>
            </div>
          </template>
          <template v-else>
            <!-- 左文右图 -->
            <div class="col-md-6 order-md-2 mb-3 mb-md-0">
              <div>
                <template v-if="group.image">
                  <img :src="group.image" :alt="group.title" class="drone-group-img" loading="lazy" />
                </template>
                <template v-else>
                  <span class="drone-group-imgtext">{{ group.imageText }}</span>
                </template>
              </div>
            </div>
            <div class="col-md-6 order-md-1 d-flex flex-column justify-content-center align-items-center text-center">
              <div class="mb-2 drone-group-title">{{ group.title }}</div>
              <div class="mb-3 drone-group-desc">{{ group.desc }}</div>
              <router-link :to="group.link" class="btn btn-outline-danger rounded-pill px-4 drone-group-btn">
                查看产品 <span class="drone-group-btn-arrow">&gt;</span>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </template>
    <!-- 子路由页面始终渲染 -->
    <router-view />
    <!-- 页面底部行业应用banner（Footer上方） -->
    <div class="industry-banner-block">
      <img src="/images/products/05.png" alt="行业应用" class="industry-banner-img" loading="lazy" />
      <div class="industry-banner-content">
        <span class="industry-banner-title">{{$t('common.applications')}}</span>
        <button class="industry-banner-btn" @click="$router.push('/applications')">{{$t('common.learnMore')}}</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      allBanners: [
        {
          title: this.$t('products.title'),
          subtitle: this.$t('products.description'),
          bgImg: '/images/products/通用-1900X400.png',
          height: '700px',
          link: '/support'
        }
      ],
      droneGroups: [
        {
          title: this.$t('products.droneGroups.fpvTitle'),
          imageText: '穿越无人机图片',
          desc: this.$t('products.droneGroups.fpvDes'),
          link: '/products/fpv',
          image: '/images/products/01.png',
        },
        {
          title: this.$t('products.droneGroups.multiRotorTitle'),
          imageText: '多旋翼无人机图片',
          desc: this.$t('products.droneGroups.multiRotorDes'),
          link: '/products/multi-rotor',
          image: '/images/products/02.png',
        },
        {
          title: this.$t('products.droneGroups.fixedWingTitle'),  
          imageText: '固定翼无人机',
          desc: this.$t('products.droneGroups.fixedWingDes'),
          link: '/products/fixed-wing',
          image: '/images/products/03.png',
        },
        {
          title: this.$t('products.droneGroups.helicopterTitle'),
          imageText: '无人直升机',
          desc: this.$t('products.droneGroups.helicopterDes'),
          link: '/products/helicopter',
          image: '/images/products/04.png',
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 统一下划线颜色 */
.section-line {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 2px;
  background: rgb(178,0,0) !important;
}

/* banner样式 */
.support-banner {
  position: relative;
  width: 100%;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  border-top: 2px solid #e0e0e0;
  border-bottom: 2px solid #e0e0e0;
  box-sizing: border-box;
  overflow: hidden;
  height: 700px !important;
}
.support-banner:last-of-type { margin-bottom: 0; }
.support-banner-overlay {
  width: 100%;
  text-align: center;
  padding: 60px 0 40px 0;
}
.support-banner-title {
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 1rem;
}
.support-banner-subtitle {
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0;
}

/* 产品分组卡片 */
.drone-group-row {
  min-height: 320px;
  margin-bottom: 3.5rem !important;
}
.drone-group-imgbox {
  width: 600px !important;
  height: 380px !important;
  font-size: 2rem;
  border-radius: 18px;
  border: 2px solid rgb(178,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.drone-group-img {
  width: 100% !important;
  height: 100% !important;
  border-radius: 12px;
  border: 2px solid #fff;
  object-fit: cover;
  box-shadow: 0 2px 12px rgba(106, 80, 80, 0.1);
  display: block;
  margin: 0 auto;
}
.drone-group-imgtext {
  font-size: 1.5rem;
  color: #222;
  opacity: 0.7;
}
.drone-group-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}
.drone-group-desc {
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2rem !important;
  max-width: 420px;
}
.drone-group-btn {
  font-size: 1.15rem;
  padding: 0.75rem 2.5rem;
  margin-bottom: 1.2rem;
  color: rgb(178,0,0) !important;
  background: #fff !important;
  border: 1.5px solid rgb(178,0,0) !important;
  border-radius: 999px !important;
  font-weight: 500;
  transition: none !important;
  display: inline-block;
}
.drone-group-btn:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: 1.5px solid rgb(178,0,0) !important;
}
.drone-group-btn-arrow {
  display: inline-block;
  margin-left: 0.5em;
  font-size: 1.2em;
  vertical-align: middle;
  transition: transform 0.2s;
}
.drone-group-btn:hover .drone-group-btn-arrow {
  transform: translateX(4px);
}

/* 行业应用banner */
.industry-banner-block {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
}
.industry-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.industry-banner-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.industry-banner-title {
  font-size: 2.2rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.industry-banner-btn {
  color: rgb(178,0,0) !important;
  background: #fff !important;
  border: 1.5px solid rgb(251, 251, 251) !important;
  border-radius: 999px !important;
  font-weight: 500;
  padding: 0.75rem 2.5rem !important;
  font-size: 1.15rem !important;
  line-height: 1.5;
  display: inline-block;
}
.industry-banner-btn:hover {
  background: rgb(178,0,0) !important;
  color: #fff !important;
  border: 1.5px solid rgb(178,0,0) !important;
}

@media (max-width: 992px) {
  .drone-group-row { min-height: 220px; }
  .drone-group-imgbox { height: 160px; font-size: 1.2rem; }
  .drone-group-title { font-size: 1.3rem; }
  .drone-group-desc { font-size: 1rem; max-width: 90vw; }
  .drone-group-btn { font-size: 1rem; padding: 0.5rem 1.5rem; }
  .industry-banner-block { height: 160px; }
  .industry-banner-title { font-size: 1.2rem; margin-bottom: 1rem; }
  .industry-banner-btn { font-size: 1rem; padding: 8px 20px; }
}
@media (max-width: 576px) {
  .drone-group-row { min-height: 120px; }
  .drone-group-imgbox { height: 80px; font-size: 1rem; }
  .drone-group-title { font-size: 1.1rem; }
  .drone-group-desc { font-size: 0.95rem; }
  .drone-group-btn { font-size: 0.95rem; padding: 0.4rem 1rem; }
  .industry-banner-block { height: 110px; }
  .industry-banner-title { font-size: 1rem; margin-bottom: 0.5rem; }
  .industry-banner-btn { font-size: 0.9rem; padding: 6px 14px; }
}
</style> 