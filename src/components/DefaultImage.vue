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
      default: '#f5f5f5'
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