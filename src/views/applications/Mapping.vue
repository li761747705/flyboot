<template>
  <div class="scene-page">
    <div class="scene-title-wrapper">
      <h1 class="scene-title">应用概述</h1>
      <h5>无人机在地形测绘和三维建模领域的应用日益普及，其高效、准确的特点使其成为现代工程的重要工具</h5>
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
            <img v-if="item.image" :src="item.image" class="scene-card-img" alt="" />
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
  name: 'MappingScene',
  data() {
    return {
      cards: [
        { title: '地形测量', image: '/images/applications/mapping/01（600X350）.png' },
        { title: '实景三维', image: '/images/applications/mapping/02（900X500）.png' },
        { title: '土地利用规划', image: '/images/applications/测绘400X620.png' },
        { title: '勘察设计', image: '/images/applications/测绘400X620.png' },
        { title: '古建筑三维测绘', image: '/images/applications/测绘400X620.png' }
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
  margin-bottom: 10px;
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
  background-color: #fff;
}
.scene-card:active,
.scene-card:focus {
  transform: scale(0.97);
  box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  border-color: #b3c6ff;
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
  position: relative;
}
.scene-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  padding: 0 15px 15px;
  width: 100%;
  background-color: #fff;
}
@media (max-width: 900px) {
  .scene-card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
@media (max-width: 600px) {
  .scene-title {
    font-size: 1.4rem;
  }
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