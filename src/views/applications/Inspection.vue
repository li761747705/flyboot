<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">巡检应用</h1>
      <p class="lead mb-0">无人机在巡检领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>高空巡检，减少人工风险</li>
        <li>智能识别异常，及时预警</li>
        <li>远程实时回传，提升效率</li>
        <li>适应多种巡检场景</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>电力线路巡检</h3>
        <p>无人机对高压线路进行高空巡检，发现隐患及时处理。</p>
      </div>
      <div class="case">
        <h3>水利设施巡检</h3>
        <p>对水库、河道等水利设施进行定期巡检，保障安全。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>电力巡检</li>
        <li>水利巡检</li>
        <li>交通巡检</li>
        <li>工业设施巡检</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InspectionApplication'
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