<template>
  <div class="about-page">
    <!-- 页面标题区 -->
    <section class="page-header">
      <!-- 顶部 Banner -->
      <div class="banner">
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1>关于麒风智能</h1>
          <p>引领无人机技术创新，驱动行业数字化转型</p>
        </div>
      </div>
    </section>

    <!-- 子路由内容区 -->
    <router-view v-if="$route.path !== '/about'" />
    
    <!-- 主关于我们展示区 (仅在没有子路由时显示) -->
    <div v-else>
      <section class="about-main-section">
        <div class="container">
          <!-- 公司介绍卡片 -->
          <div class="row mb-5">
            <div class="col-md-4 mb-4">
              <div class="about-card">
                <div class="about-image">
                  <img src="/images/about/company.jpg" alt="麒风智能简介" class="img-fluid">
                  <div class="image-overlay">
                    <i class="bi bi-building"></i>
                  </div>
                </div>
                <div class="about-content">
                  <h3>公司简介</h3>
                  <p>了解麒风智能的发展历程、企业使命和我们的技术优势</p>
                  <router-link to="/about/company" class="btn btn-primary">
                    <span>了解更多</span>
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="col-md-4 mb-4">
              <div class="about-card">
                <div class="about-image">
                  <img src="/images/about/contact.jpg" alt="联系方式" class="img-fluid">
                  <div class="image-overlay">
                    <i class="bi bi-telephone"></i>
                  </div>
                </div>
                <div class="about-content">
                  <h3>联系我们</h3>
                  <p>获取我们的联系信息，包括电话、邮箱、地址以及在线咨询方式</p>
                  <router-link to="/about/contact" class="btn btn-primary">
                    <span>联系我们</span>
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
            
            <div class="col-md-4 mb-4">
              <div class="about-card">
                <div class="about-image">
                  <img src="/images/about/jobs.jpg" alt="人才招聘" class="img-fluid">
                  <div class="image-overlay">
                    <i class="bi bi-people"></i>
                  </div>
                </div>
                <div class="about-content">
                  <h3>加入我们</h3>
                  <p>查看麒风智能的职位空缺，加入我们的团队，一起推动无人机技术的未来</p>
                  <router-link to="/about/jobs" class="btn btn-primary">
                    <span>查看职位</span>
                    <i class="bi bi-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 技术实力展示 -->
          <div class="row mt-5">
            <div class="col-12">
              <div class="tech-stats-section">
                <div class="stats-header">
                  <h2>技术实力</h2>
                  <p>扎实的基本功：复杂环境下，稳定飞行，高效执行任务</p>
                </div>
                <div class="stats-grid">
                  <div class="stat-item">
                    <div class="stat-number">51</div>
                    <div class="stat-label">发明专利</div>
                    <div class="stat-icon">
                      <i class="bi bi-lightbulb"></i>
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">64</div>
                    <div class="stat-label">实用新型专利</div>
                    <div class="stat-icon">
                      <i class="bi bi-gear"></i>
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">19</div>
                    <div class="stat-label">外观专利</div>
                    <div class="stat-icon">
                      <i class="bi bi-palette"></i>
                    </div>
                  </div>
                  <div class="stat-item">
                    <div class="stat-number">29</div>
                    <div class="stat-label">软件著作权</div>
                    <div class="stat-icon">
                      <i class="bi bi-code-square"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  background: #f8f9fa;
  min-height: 100vh;
}

/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.banner {
  height: 400px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}

.banner-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;
}

.banner h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.banner p {
  font-size: 1.3rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

/* 主要内容区域 */
.about-main-section {
  padding: 4rem 0;
}

/* 关于卡片 */
.about-card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
}

.about-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.about-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.about-card:hover .about-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.about-card:hover .image-overlay {
  opacity: 1;
}

.image-overlay i {
  font-size: 3rem;
  color: white;
}

.about-content {
  padding: 2rem;
}

.about-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.about-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.about-content .btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.about-content .btn:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

/* 技术实力区域 */
.tech-stats-section {
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.stats-header {
  text-align: center;
  margin-bottom: 3rem;
}

.stats-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.stats-header p {
  color: #6c757d;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 12px;
  position: relative;
  transition: all 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.stat-item:hover .stat-number,
.stat-item:hover .stat-label {
  color: white;
}

.stat-item:hover .stat-icon {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.stat-label {
  font-size: 1rem;
  color: #6c757d;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.stat-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .banner h1 {
    font-size: 2.5rem;
  }
  
  .banner p {
    font-size: 1.1rem;
  }
  
  .about-main-section {
    padding: 2rem 0;
  }
  
  .tech-stats-section {
    padding: 2rem 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-item {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 300px;
  }
  
  .banner h1 {
    font-size: 2rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .about-content {
    padding: 1.5rem;
  }
}
</style> 