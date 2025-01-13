import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "work and life",
  description: "记录自己工作与生活",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/preface/index' }
    ],
    sidebar: [
      {
        text: '前言',
        link: '/preface/index',
      },
      {
        text: '第一章：工作与生活的感悟',
        items: [
          { text: '平衡的艺术', link: '/chapter1/index#平衡的艺术' },
          { text: '工作效率与时间管理', link: '/chapter1/index#工作效率与时间管理' },
          { text: '生活品质的提升', link: '/chapter1/index#生活品质的提升' },
          { text: '个人成长', link: '/chapter1/index#个人成长' },
          { text: '压力管理', link: '/chapter1/index#压力管理' }
        ]
      },
      {
        text: '第二章：生活锻炼与目标设定',
        items: [
          { text: '健康生活方式的建立', link: '/chapter2/index#健康生活方式的建立' },
          { text: '体能训练计划', link: '/chapter2/index#体能训练计划' },
          { text: '目标设定与实现', link: '/chapter2/index#目标设定与实现' },
          { text: '饮食与营养', link: '/chapter2/index#饮食与营养' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
