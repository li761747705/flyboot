<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">安防应用</h1>
      <p class="lead mb-0">无人机在安防领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>自动巡逻，实时视频回传</li>
        <li>智能识别异常，及时预警</li>
        <li>夜间红外巡查，全天候作业</li>
        <li>远程调度，提升安保效率</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>园区安防</h3>
        <p>无人机定时巡逻园区，发现异常自动报警，提升园区安全等级。</p>
      </div>
      <div class="case">
        <h3>边境防控</h3>
        <p>无人机对边境线进行高频巡查，及时发现非法入侵。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>园区安防</li>
        <li>边境防控</li>
        <li>大型活动安保</li>
        <li>夜间巡逻</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DefenseApplication'
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