<template>
  <div class="scene-page">
    <div class="scene-title-wrapper">
      <h1 class="scene-title">应用概述</h1>
      <h5>通过无人机搭载地高清摄像头和传感器，能够实时获取道路上车辆地行驶速度、密度、和流向等信息。</h5>
        <h5>  相比传统地固定摄像头和地面传感器，无人机能够覆盖更广地区域，并且可以更具需要灵活调整监测位置和角度，从而更全面、准确地掌握交通流量状况。</h5>
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
  name: 'AerialScene',
  data() {
    return {
      cards: [
        { title: '违法抓拍与执法', image: '/images/applications/aerial/01（600X350）.png' },
        { title: '事故快速处置', image: '/images/applications/aerial/02(900X500).png' },
        { title: '现场测绘与勘察', image: '/images/applications/交通400X620.png' },
        { title: '路况监测与引导', image: '/images/applications/交通400X620.png' },
        { title: '设施巡查与隐患排查', image: '/images/applications/交通400X620.png' }
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
  margin-top: 6px;
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