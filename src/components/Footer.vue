<template>
  <footer class="text-dark py-5">
    <div class="container">
      <div class="row gy-4">
   
        <div class="col-lg-2 col-md-6 col-6">
          <h5 class="fw-bold mb-3">产品系列</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/products/fpv" class="text-dark text-decoration-none">穿越无人机</router-link></li>
            <li class="mb-2"><router-link to="/products/multi-rotor" class="text-dark text-decoration-none">多旋翼无人机</router-link></li>
            <li class="mb-2"><router-link to="/products/fixed-wing" class="text-dark text-decoration-none">固定翼无人机</router-link></li>
            <li class="mb-2"><router-link to="/products/helicopter" class="text-dark text-decoration-none">无人直升机</router-link></li>
         </ul>
        </div>
        <div class="col-lg-2 col-md-6 col-6">
          <h5 class="fw-bold mb-3">行业应用</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/applications/mapping" class="text-dark text-decoration-none">测绘</router-link></li>
            <li class="mb-2"><router-link to="/applications/inspection" class="text-dark text-decoration-none">水利</router-link></li>
            <li><router-link to="/applications/delivery" class="text-dark text-decoration-none">应急</router-link></li>
            <li><router-link to="/applications/agriculture" class="text-dark text-decoration-none">森林勘察</router-link></li>
            <li><router-link to="/applications/aerial" class="text-dark text-decoration-none">交通</router-link></li>
            <li><router-link to="/applications/powerline" class="text-dark text-decoration-none">电力巡检</router-link></li>
            <li><router-link to="/applications/spraying" class="text-dark text-decoration-none">环保</router-link></li>
            <li><router-link to="/applications/farming" class="text-dark text-decoration-none">农业应用</router-link></li>
            <li><router-link to="/applications/integration" class="text-dark text-decoration-none">运载应用</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 col-6">
          <h5 class="fw-bold mb-3">服务与支持</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/support/downloads" class="text-dark text-decoration-none">下载中心</router-link></li>
            <li><router-link to="/support/policy" class="text-dark text-decoration-none">售后服务政策</router-link></li>
            <li><router-link to="/support/faq" class="text-dark text-decoration-none">常见问题</router-link></li>
            <li><router-link to="/support/hotline" class="text-dark text-decoration-none">服务热线</router-link></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 col-6">
          <h5 class="fw-bold mb-3">关于我们</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><router-link to="/about/contact" class="text-dark text-decoration-none">联系我们</router-link></li>
            <li class="mb-2"><router-link to="/about/company" class="text-dark text-decoration-none">公司介绍</router-link></li>
            <li class="mb-2"><router-link to="/about/responsibility" class="text-dark text-decoration-none">社会责任</router-link></li>
            <li><router-link to="/about/join" class="text-dark text-decoration-none">招贤纳士</router-link></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="fw-bold mb-3">联系我们</h5>
          <p class="mb-2">售后邮箱：2236807538@qq.com</p>
          <p class="mb-0">招聘邮箱：2236807538@qq.com</p>
        </div>
      </div>
      <hr class="my-4 opacity-25" style="border-color: var(--line-color);">
      <div class="text-center">
        <p class="mb-0 small">© 2024 麒风智能科技有限公司. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
footer {
  background-color: #FFFFFF;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  border-top: 1px solid var(--line-color);
}

footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

footer a:hover {
  color: var(--accent-color) !important;
}

footer h5 {
  font-size: 1rem;
  margin-bottom: 1rem;
}

footer ul li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  footer p, footer a {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  footer h5 {
    font-size: 1rem;
  }
  
  footer .row > div {
    margin-bottom: 1.5rem;
  }
}
</style> 