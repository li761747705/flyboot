<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">海事应用</h1>
      <p class="lead mb-0">无人机在海事领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>远距离海域巡查，实时视频回传</li>
        <li>海上救援快速响应，提升救援效率</li>
        <li>海洋环境监测，数据采集全面</li>
        <li>支持多种载荷，适应复杂海事任务</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>海上溢油监测</h3>
        <p>通过无人机搭载高清摄像头，对海面溢油进行实时监测和定位，辅助应急处理。</p>
      </div>
      <div class="case">
        <h3>海上救援</h3>
        <p>无人机快速定位遇险船只，抛投救生圈，提升救援成功率。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>海事巡检</li>
        <li>海洋环境监测</li>
        <li>海上救援</li>
        <li>渔业监管</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MarineApplication'
}
</script>

<style scoped>
.application-detail { background: #fff; border-radius: 12px; padding: 40px 24px; max-width: 900px; margin: 40px auto; box-shadow: 0 2px 16px rgba(0,0,0,0.06); }
.header { text-align: center; margin-bottom: 32px; }
.header h1 { font-size: 2.5rem; margin-bottom: 12px; }
.header p { color: #666; font-size: 1.2rem; }
.section { margin-bottom: 32px; }
.section h2 { font-size: 1.4rem; color: #1a4fa0; margin-bottom: 16px; }
.case { background: #f5f8fa; border-radius: 8px; padding: 18px 20px; margin-bottom: 16px; }
ul { padding-left: 20px; }
li { margin-bottom: 8px; }
</style> 