<template>
  <div class="scene-page">
    <div class="scene-title-wrapper">
      <h1 class="scene-title">应用概述</h1>
      <h5>随着智慧水利建设推进，无人机凭借灵活机动、高效精准得特点，已成为水里管理得新型基础设施，其通过传感器融合与智能算法，实现水利全场景数字数字化覆盖。</h5>
    </div>
    <div class="scene-section">
      <h2 class="scene-section-title">应用场景</h2>
      <div class="scene-card-grid">
        <div
          v-for="item in cards"
          :key="item.title"
          class="scene-card"
          @click="onCardClick(item)"
          tabindex="0"
        >
          <div class="scene-card-img-wrapper">
            <img v-if="item.image" :src="item.image" alt="" class="scene-card-img">
            <span v-else class="scene-card-default-icon">+</span>
          </div>
          <div class="scene-card-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InspectionScene',
  data() {
    return {
      cards: [
        { title: '排污巡查', image: '/images/applications/inspection/01（600X350）.png' },
        { title: '水本采样', image: '/images/applications/inspection/02（900X500）.png' },
        { title: '水质检测', image: '/images/applications/水利400X620.png' },
        { title: '智能巡检', image: '/images/applications/水利400X620.png' },
        { title: '科学防汛', image: '/images/applications/水利400X620.png' }
      ]
    }
  },
  methods: {
    onCardClick() {
      // 可点击但不跳转
    }
  }
}
</script>

<style scoped>
.scene-page {
  background: #fff;
  min-height: 100vh;
}
.scene-title-wrapper {
  width: 100%;
  padding: 48px 0 0 0;
  text-align: center;
}
.scene-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 20px;
}
.scene-section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 16px 60px 16px;
}
.scene-section-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 32px;
  color: #222;
}
.scene-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 36px;
  margin-top: 8px;
}
.scene-card {
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 320px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.scene-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}
.scene-card-img-wrapper {
  width: 100%;
  height: 180px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  overflow: hidden;
}
.scene-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.scene-card-default-icon {
  font-size: 2.5rem;
  color: #bbb;
  font-weight: bold;
}
.scene-card-title {
  font-size: 1.18rem;
  color: #222;
  font-weight: 600;
  text-align: center;
  margin-top: auto;
  letter-spacing: 0.5px;
  padding: 8px 12px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
}
@media (max-width: 900px) {
  .scene-card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 600px) {
  .scene-card-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .scene-card {
    height: 220px;
  }
}
@media (max-width: 768px) {
  .scene-card {
    height: 280px;
  }
}
</style>