# 麒风智能无人机网站项目

## 项目概述

这是一个基于 Vue.js 3 + Bootstrap 5 构建的麒风智能无人机企业网站项目。该网站采用响应式设计，支持多语言国际化，展示无人机产品、行业应用、公司信息和技术支持等内容。

### 主要技术栈

- **前端框架**: Vue.js 3.x
- **UI 框架**: Bootstrap 5.x
- **路由管理**: Vue Router 4.x
- **国际化**: Vue I18n 11.x
- **构建工具**: Vue CLI 5.x
- **动画库**: Animate.css, Wow.js
- **事件总线**: Mitt
- **开发语言**: JavaScript

### 项目结构

```
D:\Hys\flyboot1\flyboot\
├───public/                 # 静态资源目录
│   ├───images/            # 图片资源
│   │   ├───about/         # 关于我们相关图片
│   │   ├───applications/  # 行业应用图片
│   │   ├───home/          # 首页图片
│   │   ├───navbar/        # 导航栏图标
│   │   ├───products/      # 产品图片
│   │   ├───solutions/     # 解决方案图片
│   │   └───support/       # 支持页面图片
│   └───docs/              # 文档资源
├───src/                   # 源代码目录
│   ├───assets/            # 项目资源
│   │   ├───css/           # 自定义样式
│   │   └───images/        # 项目内部图片
│   ├───components/        # 公共组件
│   │   ├───NavBar.vue     # 导航栏组件
│   │   ├───Footer.vue     # 页脚组件
│   │   ├───LanguageSwitcher.vue  # 语言切换组件
│   │   └───DefaultImage.vue     # 默认图片组件
│   ├───i18n/              # 国际化配置
│   │   ├───index.js       # i18n 配置文件
│   │   └───locales/       # 语言包
│   │       ├───zh.js      # 简体中文
│   │       ├───zh-hk.js   # 繁体中文
│   │       ├───en.js      # 英语
│   │       └───...        # 其他语言包
│   ├───router/            # 路由配置
│   │   └───index.js       # 路由定义
│   ├───views/             # 页面组件
│   │   ├───Home.vue       # 首页
│   │   ├───Products.vue   # 产品页面
│   │   ├───Applications.vue  # 应用页面
│   │   ├───About.vue      # 关于页面
│   │   ├───Support.vue    # 支持页面
│   │   └───[子目录]/      # 各页面子组件
│   ├───App.vue            # 根组件
│   └───main.js            # 入口文件
├───package.json           # 项目依赖配置
├───vue.config.js          # Vue CLI 配置
├───babel.config.js        # Babel 配置
├───.eslintrc.js          # ESLint 配置
└───README.md             # 项目说明文档
```

## 构建和运行

### 环境要求

- Node.js 14.x 或更高版本
- npm 6.x 或更高版本

### 常用命令

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run serve

# 构建生产环境代码
npm run build

# 代码检查
npm run lint
```

### 开发服务器配置

开发服务器配置在 `vue.config.js` 中：
- 关闭了保存时的 lint 检查 (`lintOnSave: false`)
- 禁用了错误覆盖 (`client.overlay: false`)

## 开发约定

### 组件命名
- 使用 PascalCase 命名组件 (例如: `NavBar.vue`, `Footer.vue`)
- 组件文件名应与其内容功能相符

### 资源引用
- 页面中图片统一使用 `public/images` 下的资源
- 使用绝对路径 `/images/...` 引用，便于部署与缓存
- 支持懒加载 (`loading="lazy"`)

### 样式规范
- 优先使用 Bootstrap 5 的栅格与工具类
- 自定义样式放在 `src/assets/css/styles.css`
- 使用 CSS 变量定义主题颜色和间距
- 支持响应式设计，使用媒体查询适配不同屏幕

### 路由约定
- 所有页面组件置于 `src/views/`
- 应用页面路径采用 `/applications/<slug>` 格式
- 产品页面路径采用 `/products/<type>` 格式
- 路由配置统一在 `src/router/index.js` 中管理

### 代码检查
- 项目已启用 ESLint，使用 `plugin:vue/vue3-essential` 规则
- 提交前建议运行 `npm run lint`

## 国际化支持

项目已集成 `vue-i18n`，支持多语言切换：

### 支持语言
- 简体中文 (zh)
- 繁体中文 (zh-hk)
- 英语 (en)
- 法语 (fr)
- 西班牙语 (es)
- 印地语 (hi)
- 俄语 (ru)
- 葡萄牙语 (pt)
- 阿拉伯语 (ar)
- 孟加拉语 (bn)

### 语言资源管理
- 语言资源位于 `src/i18n/locales/` 目录
- 使用命名空间组织翻译内容: `common`, `navBar`, `footer`, `home`, `products`, `applications` 等
- 在组件中通过 `$t('namespace.key')` 访问翻译内容

### RTL 支持
- 特别支持阿拉伯语的 RTL (从右到左) 布局
- 在 `App.vue` 中实现了 RTL 样式切换

## 图片资源管理

### 主要图片目录
- `public/images/products/`: 产品图片
- `public/images/applications/`: 应用案例图片
- `public/images/about/`: 关于我们图片
- `public/images/support/`: 支持页面图片

### 图片优化建议
- 使用 WebP 格式优化大图
- 实现响应式图片加载
- 使用懒加载技术
- 为关键资源添加预加载

## 部署指南

### 构建生产版本
```bash
npm run build
```
构建完成后，`dist/` 目录包含所有生产环境文件。

### 静态托管
- 可将 `dist/` 目录部署到任意静态服务器 (Nginx/Apache/OSS/静态空间)
- 项目包含 `.vercel/project.json`，支持 Vercel 快速部署

### CDN 建议
- 对 `public/images/` 下的大图启用 CDN 与长缓存
- 使用 `Cache-Control: max-age=31536000` 设置缓存策略

## 浏览器支持

- 面向现代浏览器 (Chrome/Edge/Firefox/Safari) 最新两个版本
- 不支持 IE 浏览器
- 使用 `browserslist` 控制构建目标与自动前缀

## 常见问题解决

### 模块找不到问题
若报错 `Cannot find module 'bootstrap-vue-3/dist/utils'`，请避免在语言文件中引入运行时模块，或将相关依赖置于 `dependencies` 并确保版本兼容。

### 国际化未生效
确认组件中使用 `$t()`，并在语言切换后组件能重新渲染。

### 图片加载缓慢
优先转换为 WebP 并压缩；在移动端使用响应式图片；为背景图添加懒加载逻辑。

## 开发工具配置

### ESLint 配置
项目使用 ESLint 进行代码规范检查，配置文件为 `.eslintrc.js`，使用 Vue 3 推荐规则集。

### Babel 配置
Babel 配置文件为 `babel.config.js`，确保代码兼容性。

### Vue CLI 配置
Vue CLI 配置文件为 `vue.config.js`，包含开发服务器和构建优化配置。

## 贡献指南

1. 提交前运行 `npm run lint` 确保代码规范
2. 新增页面/模块请保持命名与目录约定一致
3. 补充对应的国际化与图片资源
4. 遵循现有的代码风格和架构模式

## 项目特点

- 响应式设计，适配各种屏幕尺寸
- 采用蓝紫色调设计风格 (主色: #512da8, 辅助色: #1e90ff)
- 组件化开发，结构清晰
- 完整的多语言支持，包括 RTL 布局
- 优化的图片加载策略
- 完善的路由系统，支持嵌套路由和参数传递
- 事件总线系统，方便组件间通信