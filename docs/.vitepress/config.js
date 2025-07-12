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
        text: '⚡ 服务端',
        collapsed: false,
        items: [
          { text: 'nodejs', link: '/server/nodejs' },
        ]
      },
      {
        text: '🌐 SSR',
        collapsed: false,
        items: [
          { text: 'ssr', link: '/ssr/ssr' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205/my-notes' }
    ]
  }
} 