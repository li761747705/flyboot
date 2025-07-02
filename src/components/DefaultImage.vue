<template>
  <div class="default-image" :style="{ backgroundColor: bgColor }">
    <div class="image-content">
      <i class="bi" :class="iconClass"></i>
      <div class="image-text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultImage',
  props: {
    type: {
      type: String,
      default: 'drone'
    },
    text: {
      type: String,
      default: '图片加载中'
    },
    bgColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconClass() {
      const iconMap = {
        drone: 'bi-airplane',
        photography: 'bi-camera',
        industrial: 'bi-tools',
        logistics: 'bi-box-seam',
        agriculture: 'bi-flower1'
      };
      return iconMap[this.type] || 'bi-image';
    },
    computedBgColor() {
      if (this.bgColor) return this.bgColor;
      // 根据type自动适配主色调
      switch (this.type) {
        case 'drone':
          return '#f8f9fa'; // 浅灰
        case 'photography':
          return 'linear-gradient(135deg, #e0e7ff, #f8fafc)';
        case 'industrial':
          return 'linear-gradient(135deg, #f5f7fa, #c3cfe2)';
        case 'logistics':
          return 'linear-gradient(135deg, #f9fafb, #e3e6e8)';
        case 'agriculture':
          return 'linear-gradient(135deg, #e0ffe0, #f8fafc)';
        default:
          return '#f5f5f5';
      }
    }
  }
};
</script>

<style scoped>
.default-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.image-content {
  text-align: center;
}

.bi {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.image-text {
  font-size: 0.9rem;
}
</style> 