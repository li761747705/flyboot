<template>
  <div class="product-detail-page multirotor-detail">
    <!-- 产品英雄区域 -->
    <section class="hero-section">
      <div class="hero-background" :style="{ backgroundImage: `url('${current && current.bannerImg ? current.bannerImg : ''}')`, backgroundSize: 'cover', backgroundPosition: 'center' }">
        <div class="hero-pattern"></div>
        <div class="hero-overlay">
          <div class="container">
            <div class="hero-content">
              <div class="product-badge">
                <i class="bi bi-grid-3x3"></i>
                <span>多旋翼无人机</span>
              </div>
              <h1 class="product-title">{{ current.name }}</h1>
              <p class="product-subtitle">专业级多旋翼无人机，稳定悬停，精准控制，广泛应用</p>
              <div class="product-highlights">
                <div class="highlight-item">
                  <i class="bi bi-pause-circle"></i>
                  <span>稳定悬停</span>
                </div>
                <div class="highlight-item">
                  <i class="bi bi-gear-wide"></i>
                  <span>精准控制</span>
                </div>
                <div class="highlight-item">
                  <i class="bi bi-camera"></i>
                  <span>广泛应用</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品详情内容 -->
    <section class="product-content">
      <div class="container">
        <!-- 飞行性能展示 -->
        <div class="feature-section">
          <div class="feature-grid">
            <div class="feature-image">
              <div class="image-placeholder" :style="{ background: `url('${current && current.featureImg ? current.featureImg : ''}') center/cover no-repeat` }">
              </div>
            </div>
            <div class="feature-content">
              <div class="feature-header">
                <h2 class="feature-title">飞行性能</h2>
                <div class="feature-icon">
                  <i class="bi bi-speedometer2"></i>
                </div>
              </div>
              <p class="feature-description">
                六轴设计使得无人机具有更好的平衡性和稳定性，这种设计可以提供更强的抗风能力和更稳定的飞行表现，适合在复杂环境中使用
              </p>
              <div class="feature-list">
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>稳定悬停能力</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>精准飞行控制</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>多种应用场景</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>优秀的机动性能</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 高强结构展示 -->
        <div class="feature-section reverse">
          <div class="feature-grid">
            <div class="feature-content">
              <div class="feature-header">
                <h2 class="feature-title">高强结构</h2>
                <div class="feature-icon">
                  <i class="bi bi-shield-check"></i>
                </div>
              </div>
              <p class="feature-description">
                轻小便携，操作简单易上手，利于单人部署高效执行作业任务，碳纤维复合材料的高比强度和比刚度特性使得无人机在保证结构强度的同时，重量大大减轻，具有良好的的抗疲劳性和耐久性，能够适应长时间的飞行任务，确保无人机的稳定性和可靠性。
              </p>
              <div class="feature-list">
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>碳纤维机架设计</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>铝合金结构件</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>轻量化高强度</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>优秀的抗疲劳性</span>
                </div>
              </div>
            </div>
            <div class="feature-image">
              <div class="image-placeholder" :style="{ background: `url('${current && current.featureImg ? current.featureImg : ''}') center/cover no-repeat` }">
              </div>
            </div>
          </div>
        </div>

        <!-- 优势展示（可选） -->
        <div class="feature-section">
          <div class="feature-grid">
            <div class="feature-image">
              <div class="image-placeholder" :style="{ background: `url('${current && current.featureImg ? current.featureImg : ''}') center/cover no-repeat` }">
              </div>
            </div>
            <div class="feature-content">
              <div class="feature-header">
                <h2 class="feature-title">优势</h2>
                <div class="feature-icon">
                  <i class="bi bi-speedometer2"></i>
                </div>
              </div>
              <p class="feature-description">
                六轴无人机在飞行作业具有多种功能和优势。通常采用六个旋翼作为动力源，这种设计使得无人机具备垂直降落、悬停、灵活飞行等特点，适用于多种作业环境。
              </p>
              <div class="feature-list">
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>稳定悬停能力</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>精准飞行控制</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>多种应用场景</span>
                </div>
                <div class="feature-item">
                  <i class="bi bi-check-circle-fill"></i>
                  <span>优秀的机动性能</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 产品参数标签页 -->
        <div class="specs-section">
          <div class="specs-header">
            <h2 class="specs-title">产品参数</h2>
            <p class="specs-subtitle">详细的技术规格和配置信息</p>
          </div>

          <div class="specs-tabs">
            <div class="tab-buttons">
              <button class="tab-btn" :class="{ active: activeTab === 'basic' }" @click="activeTab = 'basic'">
                <i class="bi bi-info-circle"></i>
                基本参数
              </button>
              <button class="tab-btn" :class="{ active: activeTab === 'tech' }" @click="activeTab = 'tech'">
                <i class="bi bi-gear"></i>
                技术参数
              </button>
              <button class="tab-btn" :class="{ active: activeTab === 'package' }" @click="activeTab = 'package'">
                <i class="bi bi-box-seam"></i>
                包装清单
              </button>
            </div>

            <div class="tab-content">
              <!-- 基本参数 -->
              <div v-show="activeTab === 'basic'" class="tab-pane">
                <div v-if="!current" style="color: red; padding: 1rem;">
                  调试信息：current对象为空
                </div>
                <div v-else-if="!current.basic" style="color: red; padding: 1rem;">
                  调试信息：current.basic为空，current对象：{{ JSON.stringify(current) }}
                </div>
                <div v-else>
                  <div class="specs-grid">
                    <div class="spec-item" v-for="(value, key) in current.basic" :key="key">
                      <div class="spec-label">{{ key }}</div>
                      <div class="spec-value">{{ value }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 技术参数 -->
              <div v-show="activeTab === 'tech'" class="tab-pane">
                <div class="package-content">
                  <div class="package-section" v-for="(value, key) in current.tech" key="key">
                    <h3 class="package-title">
                      <i class="bi bi-box-seam"></i>
                     {{key}}
                    </h3>
                    <div class="package-list">
                      <div class="package-item" v-for="(value, key) in value" key="key">
                        <i class="bi bi-check2-circle"></i>
                        <span>{{ key }} {{value}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 包装清单 -->
              <div v-show="activeTab === 'package'" class="tab-pane">
                <div class="package-content">
                  <div class="package-section">
                    <h3 class="package-title">
                      <i class="bi bi-box-seam"></i>
                      标配清单
                    </h3>
                    <div class="package-list">
                      <div class="package-item" v-for="(value, key) in packaging_list" key="key">
                        <i class="bi bi-check2-circle"></i>
                        <span>{{ key }} {{value}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="package-section">
                    <h3 class="package-title">
                      <i class="bi bi-file-text"></i>
                      随机文件
                    </h3>
                    <div class="package-list" v-for="(value, key) in packaging_documents" key="key">
                      <div class="package-item">
                        <i class="bi bi-file-text"></i>
                        <span>{{ key }} {{value}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 保修服务 -->
        <div class="warranty-section">
          <div class="warranty-header">
            <h2 class="warranty-title">保修服务</h2>
            <p class="warranty-subtitle">专业的售后保障，让您使用无忧</p>
          </div>
          <div class="warranty-content">
            <div class="warranty-item">
              <div class="warranty-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <div class="warranty-text">
                <h3>保修期限</h3>
                <p>我们承诺对提供的产品给予一年保修期限，在这期间，客户可以享受到全方位保修服务。从产品交付之日起计算，无论是产品硬件故障，还是因产品质量问题导致性能异常等情况，我们将负责解决。</p>
              </div>
            </div>
            <div class="warranty-item">
              <div class="warranty-icon">
                <i class="bi bi-tools"></i>
              </div>
              <div class="warranty-text">
                <h3>硬件维修与更换</h3>
                <p>涵盖产品的各个零部件，如主板、显示屏、硬盘、电源等，若这些硬件出现非人为损坏故障，我们将免费进行维修或更换。</p>
              </div>
            </div>
            <div class="warranty-item">
              <div class="warranty-icon">
                <i class="bi bi-headset"></i>
              </div>
              <div class="warranty-text">
                <h3>快速响应</h3>
                <p>对于一般故障，客户可通过电话、邮件等方式向我们反馈，我们的客服人员会在接到反馈后2小时回复客户，确认已收到问题，然后，根据故障具体情况，在24小时内为客户提供解决方案。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MultiRotorDetail',
  data() {
    return {
      activeTab: 'basic',
      products: {
        'multirotor-m600': {
          name: 'M600 专业多旋翼',
          banner: 'M600 专业多旋翼',
          bannerImg: '/images/products/multirotor/01.png',
          featureImg: '/images/products/multirotor/02.png',
          basic: {
            '机身尺寸': '600 mm',
            '重量(不含电池)': '2.8 kg',
            '机架材质': '碳纤维',
            '动力系统': '无刷电机',
            '螺旋桨尺寸': '13寸',
            '电池容量': '6000mAh'
          },
          //技术参数
          tech: {
            '飞行器': {
              '起飞重量': '',
              '尺寸': '',
              '最大上升速度': '',
              '最大下降速度': '',
              '最大水平飞行速度': '',
              '最大起飞海拔': '',
              '最长飞行时间': '',
              '最长悬停时间': '',
              '最大续航历程': '',
              '最大抗风速度': '',
              '最大可倾斜角度': '',
              '工作环境温度': '',
              '卫星导航系统': '',
              '悬停精度': ''
            },
            '电池': {
              '容量': '',
              '重量': '',
              '标称电压': '',
              '充电限制电压': '',
              '电池类型': '',
              '能量': '',
              '充电环境': '',
              '充电耗时': '',
              '电池尺寸': ''
            },
            '充电器': {
              '输入': '',
              '输出': ''
            },
            '遥控器': {           
              '最长续航时间': '',
              '工作环境温度': '',
              '充电环境温度': '',
              '充电时间': '',
              '充电方式': '',
              '电池容量': '',
              '重量': '',
              '尺寸': ''
            }
          }
        },
        'multirotor-m800': {
          name: 'M800 大型多旋翼',
          banner: 'M800 大型多旋翼',
          bannerImg: '/images/products/multirotor/01.png',
          featureImg: '/images/products/multirotor/02.png',
          basic: {
            '机身尺寸': '800 mm',
            '重量(不含电池)': '4.2 kg',
            '机架材质': '碳纤维',
            '动力系统': '无刷电机',
            '螺旋桨尺寸': '15寸',
            '电池容量': '8000mAh'
          },
            //技术参数
            tech: {
            '飞行器': {
              '起飞重量': '',
              '尺寸': '',
              '最大上升速度': '',
              '最大下降速度': '',
              '最大水平飞行速度': '',
              '最大起飞海拔': '',
              '最长飞行时间': '',
              '最长悬停时间': '',
              '最大续航历程': '',
              '最大抗风速度': '',
              '最大可倾斜角度': '',
              '工作环境温度': '',
              '卫星导航系统': '',
              '悬停精度': ''
            },
            '电池': {
              '容量': '',
              '重量': '',
              '标称电压': '',
              '充电限制电压': '',
              '电池类型': '',
              '能量': '',
              '充电环境': '',
              '充电耗时': '',
              '电池尺寸': ''
            },
            '充电器': {
              '输入': '',
              '输出': ''
            },
            '遥控器': {           
              '最长续航时间': '',
              '工作环境温度': '',
              '充电环境温度': '',
              '充电时间': '',
              '充电方式': '',
              '电池容量': '',
              '重量': '',
              '尺寸': ''
            }
          }
        },
        'multirotor-m400': {
          name: 'M400 轻型多旋翼',
          banner: 'M400 轻型多旋翼',
          bannerImg: '/images/products/multirotor/01.png',
          featureImg: '/images/products/multirotor/02.png',
          basic: {
            '机身尺寸': '400 mm',
            '重量(不含电池)': '1.8 kg',
            '机架材质': '碳纤维',
            '动力系统': '无刷电机',
            '螺旋桨尺寸': '10寸',
            '电池容量': '4000mAh'
          },
             //技术参数
             tech: {
            '飞行器': {
              '起飞重量': '',
              '尺寸': '',
              '最大上升速度': '',
              '最大下降速度': '',
              '最大水平飞行速度': '',
              '最大起飞海拔': '',
              '最长飞行时间': '',
              '最长悬停时间': '',
              '最大续航历程': '',
              '最大抗风速度': '',
              '最大可倾斜角度': '',
              '工作环境温度': '',
              '卫星导航系统': '',
              '悬停精度': ''
            },
            '电池': {
              '容量': '',
              '重量': '',
              '标称电压': '',
              '充电限制电压': '',
              '电池类型': '',
              '能量': '',
              '充电环境': '',
              '充电耗时': '',
              '电池尺寸': ''
            },
            '充电器': {
              '输入': '',
              '输出': ''
            },
            '遥控器': {           
              '最长续航时间': '',
              '工作环境温度': '',
              '充电环境温度': '',
              '充电时间': '',
              '充电方式': '',
              '电池容量': '',
              '重量': '',
              '尺寸': ''
            }
          }
        },
        'multirotor-m1000': {
          name: 'M1000 重型多旋翼',
          banner: 'M1000 重型多旋翼',
          bannerImg: '/images/products/multirotor/01.png',
          featureImg: '/images/products/multirotor/02.png',
          basic: {
            '机身尺寸': '1000 mm',
            '重量(不含电池)': '6.5 kg',
            '机架材质': '碳纤维',
            '动力系统': '无刷电机',
            '螺旋桨尺寸': '18寸',
            '电池容量': '12000mAh'
          },
             //技术参数
             tech: {
            '飞行器': {
              '起飞重量': '',
              '尺寸': '',
              '最大上升速度': '',
              '最大下降速度': '',
              '最大水平飞行速度': '',
              '最大起飞海拔': '',
              '最长飞行时间': '',
              '最长悬停时间': '',
              '最大续航历程': '',
              '最大抗风速度': '',
              '最大可倾斜角度': '',
              '工作环境温度': '',
              '卫星导航系统': '',
              '悬停精度': ''
            },
            '电池': {
              '容量': '',
              '重量': '',
              '标称电压': '',
              '充电限制电压': '',
              '电池类型': '',
              '能量': '',
              '充电环境': '',
              '充电耗时': '',
              '电池尺寸': ''
            },
            '充电器': {
              '输入': '',
              '输出': ''
            },
            '遥控器': {           
              '最长续航时间': '',
              '工作环境温度': '',
              '充电环境温度': '',
              '充电时间': '',
              '充电方式': '',
              '电池容量': '',
              '重量': '',
              '尺寸': ''
            }
          }
        }
      },
      //包装清单-标配清单
      packaging_list:{
            "飞行器机身":"×1",
            "螺旋桨":"×4",
            "智能飞控":"x1",
            "动力电池":"x2",
            "充电器":"x1",
            "遥控器":"x1"
          },
      packaging_documents:{
          "产品说明书":"x1",
          "快速入门指南":"x1",
          "免责声明":"x1",
          "合格证":"x1"
      },  
      current: null
    }
  },
  created() {
    const id = this.$route.params.id
    this.current = this.products[id] || this.products['multirotor-m600']
  },
  methods: {
    goBack() {
      this.$router.push('/products/multi-rotor')
    }
  }
}
</script>

<style scoped>
.product-detail-page {
  min-height: 100vh;
  background: #f8f9fa;
}

/* 返回导航 */
.back-navigation {
  background: #fff;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}

.back-btn:hover {
  background: #f8f9fa;
  color: #495057;
  transform: translateX(-2px);
}

/* 英雄区域 */
.hero-section {
  position: relative;
  height: 700px;
  overflow: hidden;
}

.hero-background {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: patternMove 20s ease-in-out infinite;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  z-index: 1;
}

.hero-content {
  color: #fff;
  text-align: center;
  position: relative;
  z-index: 2;
}

.product-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.product-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.product-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.product-highlights {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.highlight-item:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

/* 产品内容 */
.product-content {
  padding: 4rem 0;
}

/* 特性区域 */
.feature-section {
  margin-bottom: 4rem;
}

.feature-section.reverse .feature-grid {
  flex-direction: row-reverse;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.feature-image {
  position: relative;
}

.image-placeholder {
  height: 380px;
  width: 600px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder i {
  font-size: 4rem;
  color: #fff;
  opacity: 0.8;
}

.feature-content {
  padding: 2rem;
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.feature-title {
  font-size: 2rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

.feature-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #B20000, #B20000);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
}

.feature-description {
  color: #6c757d;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.feature-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #495057;
  font-weight: 500;
}

.feature-item i {
  color: rgba(178, 0,0, 1);
  font-size: 1.2rem;
}

/* 规格区域 */
.specs-section {
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.specs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.specs-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.specs-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
}

.specs-tabs {
  width: 100%;
}

.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #f8f9fa;
  border: none;
  border-radius: 12px;
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover {
  background: #e9ecef;
  color: #495057;
}

.tab-btn.active {
  background: linear-gradient(135deg, #B20000,#B20000);
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(178, 0, 0, 0.4);
}

.tab-content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
}

.tab-pane {
  display: block;
}

.tab-pane[v-show="false"] {
  display: none;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.spec-item {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.spec-label {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.spec-value {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
}

/* 包装清单 */
.package-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.package-section {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.package-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.package-title i {
  color: #667eea;
}

.package-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.package-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #495057;
  font-weight: 500;
}

.package-item i {
  color: #28a745;
  font-size: 1.1rem;
}

/* 保修服务 */
.warranty-section {
  background: #fff;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.warranty-header {
  text-align: center;
  margin-bottom: 3rem;
}

.warranty-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.warranty-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
}

.warranty-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.warranty-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.warranty-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.warranty-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #B20000, #B20000);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.warranty-text h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.warranty-text p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

@keyframes patternMove {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(-10px, -10px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-section {
    height: 400px;
  }

  .product-title {
    font-size: 2.5rem;
  }

  .product-highlights {
    gap: 1rem;
  }

  .highlight-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .feature-section.reverse .feature-grid {
    flex-direction: column;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  .specs-section {
    padding: 2rem 1rem;
  }

  .tab-buttons {
    flex-direction: column;
    gap: 0.5rem;
  }

  .package-content {
    grid-template-columns: 1fr;
  }

  .warranty-content {
    grid-template-columns: 1fr;
  }

  .warranty-item {
    flex-direction: column;
    text-align: center;
  }
}
</style> 