export default {
  title: '我的笔记',
  description: '个人知识库，基于 VitePress 构建',
  base: '/my-notes/', // GitHub Pages 仓库名
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/about' }
    ],
    
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205/my-notes' }
    ]
  }
} 