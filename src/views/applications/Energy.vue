<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">能源应用</h1>
      <p class="lead mb-0">无人机在能源领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>高空巡检，减少人工风险</li>
        <li>红外检测，精准发现隐患</li>
        <li>自动航线规划，作业高效</li>
        <li>多场景适应，支持风电、光伏等能源设施</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>风电巡检</h3>
        <p>无人机对风力发电机组进行高空巡检，发现叶片损伤等问题，辅助维护。</p>
      </div>
      <div class="case">
        <h3>光伏电站检测</h3>
        <p>通过红外成像，快速定位光伏板故障点，提升检修效率。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>风电巡检</li>
        <li>光伏检测</li>
        <li>输电线路巡检</li>
        <li>应急抢修</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EnergyApplication'
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