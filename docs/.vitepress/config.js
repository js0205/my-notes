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
        text: '🚀 快速开始',
        collapsed: false,
        items: [
          { text: '介绍', link: '/guide/introduction' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '安装配置', link: '/guide/installation' }
        ]
      },
      {
        text: '💻 编程技术',
        collapsed: false,
        items: [
          { text: 'JavaScript', link: '/programming/javascript' },
          { text: 'TypeScript', link: '/programming/typescript' },
          { text: 'Vue.js', link: '/programming/vue' },
          { text: 'React', link: '/programming/react' },
          { text: 'Node.js', link: '/programming/nodejs' }
        ]
      },
      {
        text: '🛠️ 开发工具',
        collapsed: true,
        items: [
          { text: 'VS Code', link: '/tools/vscode' },
          { text: 'Git', link: '/tools/git' },
          { text: 'Docker', link: '/tools/docker' },
          { text: 'Webpack', link: '/tools/webpack' }
        ]
      },
      {
        text: '🌐 Web技术',
        collapsed: true,
        items: [
          { text: 'HTML/CSS', link: '/web/html-css' },
          { text: '响应式设计', link: '/web/responsive' },
          { text: 'WebAPI', link: '/web/webapi' },
          { text: '性能优化', link: '/web/performance' }
        ]
      },
      {
        text: '📚 学习笔记',
        collapsed: true,
        items: [
          { text: '算法', link: '/notes/algorithms' },
          { text: '数据结构', link: '/notes/data-structures' },
          { text: '设计模式', link: '/notes/design-patterns' },
          { text: '系统设计', link: '/notes/system-design' }
        ]
      },
      {
        text: '🔧 项目实战',
        collapsed: true,
        items: [
          { text: '博客系统', link: '/projects/blog' },
          { text: '后台管理', link: '/projects/admin' },
          { text: '移动应用', link: '/projects/mobile' }
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/js0205' }
    ]
  }
} 