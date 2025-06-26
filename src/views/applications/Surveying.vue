<template>
  <div class="application-detail">
    <div class="header">
      <h1>测绘应用</h1>
      <p>无人机高效完成地形测绘、三维建模、地籍调查等测绘任务。</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>高精度航测，快速获取地理信息</li>
        <li>三维建模，数据可视化</li>
        <li>自动航线规划，作业高效</li>
        <li>多传感器融合，适应多场景</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>地形测绘</h3>
        <p>无人机搭载高精度相机，快速完成大面积地形测绘，生成正射影像和高程数据。</p>
      </div>
      <div class="case">
        <h3>三维建模</h3>
        <p>通过多角度航拍，生成真实三维模型，辅助城市规划与建设。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>地形测绘</li>
        <li>三维建模</li>
        <li>地籍调查</li>
        <li>工程测量</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SurveyingApplication'
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