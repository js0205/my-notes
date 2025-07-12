export default {
  title: '我的笔记',
  description: '个人知识库，基于 VitePress 构建',
  base: '/my-notes/', // GitHub Pages 仓库名
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [
      {
        text: '🚀 性能优化',
        collapsed: false,
        items: [
            { text: '性能指标', link: '/performance/performance' },
            { text: '低端机降级', link: '/performance/low-end-machine-downgrade' },
            { text: '离线包', link: '/performance/offline-package' },
            { text: '页面卡顿', link: '/performance/page-stutter' }
        ]
      },
      {
        text: '🔄 文件格式转换',
        collapsed: false,
        items: [
          { text: '图片压缩', link: '/conversion/image-compression' },
          { text: '视频', link: '/conversion/video' },
        ]
      },
      {
        text: '📦 打包工具',
        collapsed: false,
        items: [
          { text: 'Rspack', link: '/pack/rspack' },
          { text: 'Vite', link: '/pack/vite' },
          { text: 'Webpack', link: '/pack/webpack' },
        ]
      },
      {
        text: '🔧 技术栈',
        collapsed: false,
        items: [
          { text: 'Node.js', link: '/tech-stack/nodejs' },
          { text: 'BFF', link: '/tech-stack/bff' },
          { text: 'Egg', link: '/tech-stack/egg' },
          { text: 'Koa', link: '/tech-stack/koa' },
          { text: 'Cocos渲染', link: '/tech-stack/cocos-render' },
          { text: '微前端', link: '/tech-stack/microfrontend' },
          { text: 'WebAssembly', link: '/tech-stack/webassembly' },
        ]
      },
      {
        text: '🌐 SSR',
        collapsed: false,
        items: [
          { text: 'ssr', link: '/ssr/ssr' },
        ]
      },
      {
        text: '🤖 AiCoding',
        collapsed: false,
        items: [
          { text: 'D2C', link: '/aicoding/d2c' },
          { text: 'SSE', link: '/aicoding/sse' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205/my-notes' }
    ]
  }
} 