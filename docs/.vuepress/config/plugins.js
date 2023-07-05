// 插件配置
module.exports = [
  'vuepress-plugin-baidu-autopush', // 百度自动推送
  // 全文搜索插件 meilisearch
  [
    'vuepress-plugin-meilisearch',
      {
          hostUrl: 'https://search.eryajf.net',        // meilisearch 服务端域名
          apiKey: "8d05703c1896278c2507375b47b8bf4d8366ad00b2a1e7a24c5fcc38744af48d", // 只有搜索权限的 key
          indexUid: 'ldapdoc',
          // placeholder: 'Search as you type...',   // 在搜索栏中显示的占位符
          maxSuggestions: 9,                      // 最多显示几个搜索结果
          cropLength: 30,                         // 每个搜索结果最多显示多少个字符
      },
  ],
  // add sitemap
  [
    'sitemap', {
      hostname: 'http://ldapdoc.eryajf.net',
      exclude: ["/404.html"],
    },
  ],
  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'e12125ba1d24defa06c1e9d26a2b8cd9',
    },
  ],
  'vuepress-plugin-mermaidjs',
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
