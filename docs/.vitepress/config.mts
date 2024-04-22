import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Project UI",
  description: "UI Introduction",
  base: "/ZL-UI-DOC/",
  appearance: true, // 外观切换 - 深色浅色
  ignoreDeadLinks: false, // 当设置为 true 时，VitePress 不会因为死链接而导致构建失败。
  lastUpdated: true, // 显示页面最后更新时间
  markdown: {
    // markdown 解析配置
    lineNumbers: true, // 显示行号
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    i18nRouting: true,
    langMenuLabel: "Change language",
    externalLinkIcon: true,
    outline: 'deep', // 在大纲中显示的标题级别
    outlineTitle: '快速导航', // 大纲的标题
    lastUpdatedText: '上次更新', // 上次更新时间显示文本
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com/sunshine8624" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    docFooter: { // 文档底部文本
      prev: '上一页',
      next: '下一页'
    },
    editLink: {
      pattern: "https://gitee.com/sunshine8624",
      text: "Edit this page on Gitee",
    },
  },
});
