<template>
  <div class="mapping-application">
    <section class="page-header bg-primary text-white py-5">
      <div class="container">
        <h1 class="display-5 fw-bold mb-3">测绘应用</h1>
        <p class="lead mb-0">无人机在测绘领域的智能解决方案</p>
      </div>
    </section>
    
    <section class="py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-8 mb-4 mb-lg-0">
            <h2 class="fw-bold mb-4">高精度测绘｜地形测量｜三维建模｜正射影像</h2>
            <p class="mb-4">麒风智能为测绘行业提供高效、精准的测绘解决方案。从地形测量到三维建模，我们的无人机系统能够在复杂环境下完成高精度测绘任务，提高工作效率，降低人力成本。</p>
            
            <div class="mb-5">
              <h3 class="h4 fw-bold mb-3">应用案例</h3>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h4 class="h5 fw-bold mb-3">某测绘公司</h4>
                    <p><span class="fw-bold">10平方公里</span>地形测绘</p>
                    <p class="mb-0">测绘精度<span class="fw-bold">厘米级</span></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="border rounded p-3 h-100">
                    <h4 class="h5 fw-bold mb-3">某城市规划局</h4>
                    <p><span class="fw-bold">1年</span>累计<span class="fw-bold">5000平方公里</span></p>
                    <p class="mb-0">航程城市规划测绘</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="bg-light p-4 rounded shadow-sm mb-4">
              <h3 class="h4 fw-bold mb-3">成功案例: 高原山区测绘</h3>
              <p>在四川小金县4000米海拔高原山区，麒风智能完成了高精度地形测绘工作，为后续的物流运输系统规划提供了精准的地形数据支持。</p>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>完成面积：15平方公里</li>
                <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>测绘精度：厘米级</li>
                <li><i class="bi bi-check-circle-fill text-success me-2"></i>作业时间：2天</li>
              </ul>
            </div>
            
            <div class="bg-light p-4 rounded shadow-sm">
              <h3 class="h4 fw-bold mb-3">适用场景</h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-2"><i class="bi bi-dash-circle me-2 text-primary"></i>地形测绘</li>
                <li class="mb-2"><i class="bi bi-dash-circle me-2 text-primary"></i>城市规划</li>
                <li class="mb-2"><i class="bi bi-dash-circle me-2 text-primary"></i>三维建模</li>
                <li class="mb-2"><i class="bi bi-dash-circle me-2 text-primary"></i>正射影像</li>
                <li><i class="bi bi-dash-circle me-2 text-primary"></i>地理信息采集</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MappingApplicationView'
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, #512da8 0%, #1e90ff 100%);
}
</style> 