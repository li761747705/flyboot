<template>
  <div class="application-detail">
    <div class="header">
      <h1>集成应用</h1>
      <p>无人机与多系统集成，实现数据互通与智能协作，提升作业效率。</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>与GIS、物联网等系统无缝对接</li>
        <li>数据自动上传与分析</li>
        <li>支持多平台远程调度</li>
        <li>智能任务分配，提升协作效率</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>智慧城市巡检</h3>
        <p>无人机与城市管理平台集成，实现自动巡检与数据上报。</p>
      </div>
      <div class="case">
        <h3>农业物联网</h3>
        <p>无人机采集农田数据，实时上传至农业物联网平台，辅助精准农业。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>智慧城市</li>
        <li>农业物联网</li>
        <li>应急联动</li>
        <li>远程调度</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IntegrationApplication'
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