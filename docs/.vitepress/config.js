export default {
  title: 'TechVault',
  description: '个人技术知识库，基于 VitePress 构建 | 精美的技术文档站点',
  base: '/my-notes/',
  head: [
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: '我的笔记 - 个人知识库' }],
    ['meta', { name: 'og:description', content: '个人知识库，基于 VitePress 构建 | 精美的技术文档站点' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/index' },
      { text: '面试题', link: '/interview/interview' },
      { text: '性能优化', link: '/performance/performance' }
    ],
    sidebar: [
      {
        text: '性能优化',
        collapsed: true,
        items: [
            { text: '性能指标', link: '/performance/performance' },
            { text: '低端机降级', link: '/performance/low-end-machine-downgrade' },
            { text: '离线包', link: '/performance/offline-package' },
            { text: '页面卡顿', link: '/performance/page-stutter' },
            { text: '白屏', link: '/performance/white-screen' },
            { text: '性能优化通用思路', link: '/performance/outline' }
        ]
      },
      {
        text: '文件格式转换',
        collapsed: true,
        items: [
          { text: '图片压缩', link: '/conversion/image-compression' },
          { text: 'PDF预览', link: '/conversion/pdf-preview' },
          { text: 'iframe', link: '/conversion/iframe' },
          { text: '视频处理', link: '/conversion/video' }
        ]
      },
      {
        text: '打包工具',
        collapsed: true,
        items: [
          { text: 'Rspack', link: '/pack/rspack' },
          { text: 'Vite', link: '/pack/vite' },
          { text: 'Webpack', link: '/pack/webpack' },
          { text: '编译', link: '/pack/compile' },
        ]
      },
      {
        text: '面试题',
        collapsed: true,
        items: [
          { text: '面试题汇总', link: '/interview/interview' },
          { text: 'React', link: '/interview/react' },
          { text: '稳定性接入', link: '/interview/stability' },
          { text: 'i18n国际化资源', link: '/interview/i18n' },
          { text: 'l10n本地化', link: '/interview/l10n' },
        ]
      },
      {
        text: '技术栈',
        collapsed: true,
        items: [
          { text: 'Node.js', link: '/tech-stack/nodejs' },
          { text: 'BFF', link: '/tech-stack/bff' },
          { text: 'Egg', link: '/tech-stack/egg' },
          { text: 'Koa', link: '/tech-stack/koa' },
          { text: 'San', link: '/tech-stack/san' },
          { text: 'Cocos渲染', link: '/tech-stack/cocos-render' },
          { text: '微前端', link: '/tech-stack/microfrontend' },
          { text: 'WebAssembly', link: '/tech-stack/webassembly' },
          { text: 'SEO', link: '/tech-stack/seo' }
        ]
      },
      {
        text: '渲染技术',
        collapsed: true,
        items: [
          { text: 'SSR', link: '/render/ssr' },
          { text: 'CSR', link: '/render/csr' },
          { text: 'ER', link: '/render/er' }
        ]
      },
      {
        text: 'AiCoding',
        collapsed: true,
        items: [
          { text: 'Agent', link: '/aicoding/agent' },
          { text: 'D2C', link: '/aicoding/d2c' },
          { text: 'SSE', link: '/aicoding/sse' },
        ]
      },
      {
        text: '练习',
        collapsed: true,
        items: [
          { text: '选择器', link: '/exercise/select' },
        ]
      },
      {
        text: '第三方库',
        collapsed: true,
        items: [
          { text: 'TS编译相关库', link: '/libs/ts-libs' },
        ]
      },
      {
        text: '设计模式',
        collapsed: true,
        items: [
          { text: '策略模式', link: '/pattern/pattern' }
        ]
      },
      {
        text: '系统设计',
        collapsed: true,
        items: [
          { text: '系统设计', link: '/system/system-design' }
        ]
      },
      {
        text: 'API设计',
        collapsed: true,
        items: [
          { text: 'GraphQL', link: '/api/GraphQL' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205/my-notes' }
    ],
    
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2025 我的笔记'
    },
    
    editLink: {
      pattern: 'https://github.com/js0205/my-notes/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    outline: {
      label: '页面导航'
    },
    
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
} 