<template>
  <div class="scene-page">
    <div class="scene-title-wrapper">
      <h1 class="scene-title">{{ $t('applicationsDetail.surveying.title') }}</h1>
      <h5>{{ $t('applicationsDetail.surveying.overviewDesc') }}</h5>
    </div>
    <div class="scene-section">
      <h2 class="scene-section-title">{{ $t('applicationsDetail.common.sectionTitle') }}</h2>
      <div class="scene-card-grid">
        <div
          v-for="item in cards"
          :key="item.titleKey"
          class="scene-card"
          @click="onCardClick(item)"
          tabindex="0"
        >
          <div class="scene-card-img-wrapper">
            <span class="scene-card-default-icon">+</span>
          </div>
          <div class="scene-card-title">{{ $t(item.titleKey) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurveyingScene',
  data() {
    return {
      cards: [
        { titleKey: 'applicationsDetail.surveying.cards.item1' },
        { titleKey: 'applicationsDetail.surveying.cards.item2' },
        { titleKey: 'applicationsDetail.surveying.cards.item3' },
        { titleKey: 'applicationsDetail.surveying.cards.item4' },
        { titleKey: 'applicationsDetail.surveying.cards.item5' }
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
  margin-bottom: 0;
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
  justify-content: center;
  height: 320px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 0;
  border: none;
  outline: none;
}
.scene-card:hover {
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}
.scene-card-img-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  overflow: hidden;
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
