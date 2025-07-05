// nav
module.exports = [
  { text: ' 首页 ', link: '/' },
  { text: ' 项目相关 ',link: '/pages/101948/',
      items: [
        { text: ' 产品概述 ', link: '/pages/101948/'},
        { text: ' 安装入门 ', link: '/pages/f081dc/'},
        { text: ' 参与贡献 ', link: '/pages/e881d0/'},
        { text: ' 最佳实践 ', link: '/pages/5683c6/',
            items: [
              { text: ' 动态字段关系管理 ', link: '/pages/84953d/'},
              { text: ' 配置钉钉同步 ', link: '/pages/94f43a/'},
              { text: ' 配置企业微信同步 ', link: '/pages/cf1698/'},
              { text: ' 配置企业飞书同步 ', link: '/pages/83c90b/'},
            ]
        },
        { text: ' 常见问题 ', link: '/pages/771802/'},
      ]
  },
  { text: ' 版本历史 ', link: '/pages/db2afa/' },
  { text: ' 周边相关 ',link: '/pages/17ba17/',
      items: [
        { text: 'openLDAP', link: '/pages/17ba17/'},
      ]
  },
  { text: ' 捐赠支持 ', link: '/pages/2b6725/' },
  { text: ' 在线体验 ',link: 'http://demo-go-ldap-admin.eryajf.net'},
  { text: ' 友情链接 ',
      items: [
        { text: 'Fantastic-admin 开箱即用的管理系统框架 ', link: 'https://fantastic-admin.hurui.me'},
      ]
  },
]