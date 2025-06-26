<template>
  <div class="application-detail">
    <div class="header">
      <h1 class="display-5 fw-bold mb-3">喷洒应用</h1>
      <p class="lead mb-0">无人机在喷洒领域的智能解决方案</p>
    </div>
    <section class="section">
      <h2>应用亮点</h2>
      <ul>
        <li>精准喷洒，减少农药浪费</li>
        <li>高效作业，提升农田管理效率</li>
        <li>智能航线规划，自动避障</li>
        <li>适应多种作物类型</li>
      </ul>
    </section>
    <section class="section">
      <h2>应用案例</h2>
      <div class="case">
        <h3>水稻田喷洒</h3>
        <p>无人机对水稻田进行高效喷洒，提升作业效率。</p>
      </div>
      <div class="case">
        <h3>果园病虫害防治</h3>
        <p>通过智能喷洒，实现果园病虫害精准防治。</p>
      </div>
    </section>
    <section class="section">
      <h2>适用场景</h2>
      <ul>
        <li>水稻田喷洒</li>
        <li>果园喷洒</li>
        <li>蔬菜基地</li>
        <li>病虫害防治</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SprayingApplication'
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