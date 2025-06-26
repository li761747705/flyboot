<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">公共安全</h1>
      <p class="lead mb-0">无人机在公共安全领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>大范围空中巡逻，实时监控重点区域</li>
        <li>应急事件快速响应，提升处置效率</li>
        <li>高空取证，辅助执法</li>
        <li>夜间红外巡查，全天候作业</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>大型活动安保</h3>
        <p>无人机对大型活动现场进行空中巡查，实时发现异常，保障活动安全。</p>
      </div>
      <div class="case">
        <h3>应急事件处置</h3>
        <p>突发事件发生时，无人机快速到达现场，提供第一视角画面，辅助决策。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>城市巡逻</li>
        <li>大型活动安保</li>
        <li>应急事件响应</li>
        <li>交通管理</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PublicSafetyApplication'
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