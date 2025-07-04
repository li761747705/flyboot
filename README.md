# 麒风智能无人机网站

基于Vue.js + Bootstrap 5构建的麒风智能无人机企业网站，设计风格参考[麒风智能官网](https://www.ziyanuav.com/)。

## 项目特点

- 响应式设计，适配各种屏幕尺寸
- 采用麒风智能官网的蓝紫色调（主色：#512da8，辅助色：#1e90ff）
- 组件化开发，结构清晰
- 采用Vue Router实现页面路由
- 使用Bootstrap 5构建界面

## 项目结构

- **src/components/**: 公共组件（导航栏、页脚等）
- **src/views/**: 页面组件
  - **applications/**: 行业应用相关页面
  - **about/**: 关于我们相关页面
  - **knowledge/**: 无人机知识相关页面
  - **products/**: 产品相关页面
- **src/router/**: 路由配置
- **public/images/**: 图片资源

## 运行项目

### 环境要求

- Node.js 14.x 或更高版本
- npm 6.x 或更高版本

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run serve
```

### 打包生产环境代码

```bash
npm run build
```

## 图片资源

由于项目需要大量图片资源，请将相应的图片放置在`public/images/`目录下的对应子目录中。图片路径和说明可以在`public/placeholder.html`文件中查看。

### 主要图片目录

- **public/images/products/**: 产品图片
- **public/images/applications/**: 应用案例图片
- **public/images/about/**: 关于我们图片
- **public/images/knowledge/**: 新闻、媒体报道图片
- **public/images/agent/**: 代理商相关图片

## 主要依赖

- Vue.js 3.x
- Vue Router 4.x
- Bootstrap 5.x
- Bootstrap Icons
#   f l y b o o t  
 