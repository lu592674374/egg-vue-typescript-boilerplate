'use strict';
const data = {
  list: [ {
    hits: 200,
    id: 1,
    summary: '简单小巧的核心，渐进式技术栈，足以应付任何规模的应用',
    title: 'vue-渐进式JavaScript 框架',
    url: 'https://cn.vuejs.org',
  }, {
    hits: 550,
    id: 2,
    summary: 'webpack is a module bundler for modern JavaScript applications.',
    title: 'webpack配置官方文档',
    url: 'https://webpack.js.org/configuration/',
  }, {
    hits: 278,
    id: 3,
    summary: 'Born to buildbetter enterprise frameworks and apps with Node.js & Koa',
    title: 'egg-为企业级框架和应用而生',
    url: 'https://eggjs.org/',
  }, {
    hits: 998,
    id: 4,
    summary: '基于 Promise 的 HTTP 请求客户端，可同时在浏览器和 node.js 中使用',
    title: 'axios-基于 Promise 的 HTTP 请求客户端',
    url: 'https://www.awesomes.cn/repo/mzabriskie/axios',
  }, {
    hits: 232,
    id: 4,
    summary: 'Vuex 是一个专为Vue.js 应用程序开发的状态管理模式',
    title: 'Centralized State Management for Vue.js',
    url: 'https://github.com/vuejs/vuex',
  }, {
    hits: 565,
    id: 4,
    summary: '服务器渲染可以加快首屏速度,利于SEO',
    title: 'vue服务器渲染',
    url: 'http://csbun.github.io/blog/2016/08/vue-2-0-server-side-rendering/',
  }, {
    hits: 988,
    id: 4,
    summary: 'Webpack is an amazing tool.',
    title: 'webpack服务器构建',
    url: 'http://jlongster.com/Backend-Apps-with-Webpack--Part-I',
  }, {
    hits: 322,
    id: 4,
    summary: 'Webpack loader for Vue.js components',
    title: 'vue component loader for Webpack',
    url: 'https://github.com/vuejs/vue-loader',
  }, {
    hits: 566,
    id: 4,
    summary: 'It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze',
    title: 'vue-router--The official router for Vue.js',
    url: 'https://github.com/vuejs/vue-router',
  }, {
    hits: 434,
    id: 4,
    summary: 'Vue.js 生命周期和route的生命周期讲解',
    title: 'vue生命周期',
    url: 'http://www.jianshu.com/p/e9f884b6ba6c',
  }, {
    hits: 432,
    id: 4,
    summary: '将babel捧作前端一个划时代的工具一定也不为过，它的出现让许多程序员幸福地用上了es6新语法',
    title: 'babel到底将代码转换成什么鸟样',
    url: 'https://github.com/lcxfs1991/blog/issues/9',
  }, {
    hits: 565,
    id: 4,
    summary: 'HTTP2 的真正性能到底如何',
    title: 'HTTP2 的真正性能到底如何',
    url: 'https://segmentfault.com/a/1190000007219256?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly',
  }, {
    hits: 787,
    id: 4,
    summary: '使用SPDY加快你的网站速度',
    title: 'HTTP,HTTP2.0,SPDY,HTTPS讲解',
    url: 'http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/',
  }, {
    hits: 121,
    id: 4,
    summary: '助你入门 git 的简明指南',
    title: 'git - 简明指南',
    url: 'http://rogerdudler.github.io/git-guide/index.zh.html',
  }, {
    hits: 555,
    id: 4,
    summary: 'Migrating from v1 to v2',
    title: 'vue从1升级到2',
    url: 'https://webpack.js.org/guides/migrating/',
  }],
};

let id: number = 1;

data.list = data.list.concat(data.list);
data.list = data.list.concat(data.list);

data.list.forEach( (item) => {
  item.id = id++;
});

const total = data.list.length;
export function getPage(pageIndex: number = 1, pageSize: number = 10) {
  const start = (pageIndex - 1) * pageSize;
  const end = start + Number(pageSize);
  return { list: data.list.slice(start, end), total };
}

export function getDetail(id: number) {
  return data.list.filter( (item) => {
    return item.id === id;
  }).slice(0, 1);
}
