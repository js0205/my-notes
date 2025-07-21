export default {
  title: '我的笔记',
  description: '个人知识库，基于 VitePress 构建',
  base: '/my-notes/', // GitHub Pages 仓库名
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/performance/performance' }
    ],
    sidebar: [
      {
        text: '🚀 性能优化',
        collapsed: false,
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
        text: '🔄 文件格式转换',
        collapsed: true,
        items: [
          { text: '图片压缩', link: '/conversion/image-compression' },
          { text: '视频', link: '/conversion/video' },
          { text: 'PDF预览', link: '/conversion/pdf-preview' },
          { text: 'iframe', link: '/conversion/iframe' }
        ]
      },
      {
        text: '📦 打包工具',
        collapsed: true,
        items: [
          { text: 'Rspack', link: '/pack/rspack' },
          { text: 'Vite', link: '/pack/vite' },
          { text: 'Webpack', link: '/pack/webpack' },
          { text: '编译', link: '/pack/compile' },
        ]
      },
      {
        text: '💡 面试题',
        collapsed: false,
        items: [
          { text: '面试题汇总', link: '/interview/interview' },
          { text: 'React面试题', link: '/interview/react' },
          { text: 'i18n国际化面试题', link: '/interview/i18n' },
          { text: 'l10n本地化面试题', link: '/interview/l10n' },
        ]
      },
      {
        text: '🔧 技术栈',
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
        text: '🌐 渲染技术',
        collapsed: true,
        items: [
          { text: 'SSR', link: '/render/ssr' },
          { text: 'ESR', link: '/render/esr' },
        ]
      },
      {
        text: '🤖 AiCoding',
        collapsed: true,
        items: [
          { text: 'D2C', link: '/aicoding/d2c' },
          { text: 'SSE', link: '/aicoding/sse' },
        ]
      },
      {
        text: '📚 第三方库',
        collapsed: true,
        items: [
          { text: 'TS编译相关库', link: '/libs/ts-libs' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205/my-notes' }
    ]
  }
} 