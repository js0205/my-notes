---
layout: home

hero:
  name: "TechVault"
  text: "个人技术知识库"
  image:
    src: /logo.svg
    alt: TechVault
  actions:
    - theme: brand
      text: 开始阅读
      link: /performance/performance
    - theme: alt
      text: 查看源码
      link: https://github.com/js0205/my-notes

features:
  - icon: 🚀
    title: 性能优化
    details: 深入探讨前端性能优化策略，包括低端机降级、离线包、页面卡顿和白屏问题的解决方案
    link: /performance/performance
  - icon: 💡
    title: 面试题库
    details: 精心整理的前端面试题，涵盖React、国际化、本地化等热门技术栈
    link: /interview/interview
  - icon: 📦
    title: 构建工具
    details: 现代前端构建工具深度解析，包括Rspack、Vite、Webpack等工具的使用和优化
    link: /pack/rspack
  - icon: 🔧
    title: 技术栈
    details: 全栈技术探索，从Node.js后端到微前端架构，覆盖完整的技术生态
    link: /tech-stack/nodejs
  - icon: 🌐
    title: 渲染技术
    details: 深入了解SSR、ESR等现代渲染技术，提升应用性能和用户体验
    link: /ssr/ssr
  - icon: 🤖
    title: AI编程
    details: 探索AI辅助编程的前沿技术，包括设计稿转代码和智能开发工具
    link: /aicoding/d2c
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(135deg, #3b82f6, #1e40af);
  
  --vp-home-hero-image-background-image: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.VPHome {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(30, 64, 175, 0.03) 100%);
}

.dark .VPHome {
  background: linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%);
}

.VPFeature {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.VPFeature:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.25);
}

.dark .VPFeature {
  background: rgba(30, 41, 59, 0.9);
  border-color: rgba(59, 130, 246, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .VPFeature:hover {
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-2px);
}

.VPFeature .icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.VPFeature .title {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}
</style>