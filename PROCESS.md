# 过程文档

## 初始化项目

- 通过 `create-react-app` 脚手架 创建项目, 删除不需要的文件.
- `yarn install` 安装依赖
- `yarn start` 启动服务, 测试.

## 划分项目目录结构

详细请前往 [README.md](./README.md)

## 全局样式

为了避免原有样式带来的干扰, 详细见 [base.css](./src/assets/css/base.css)

## 配置别名

`React` 的 配置文件并没有暴露出来, 我们可以通过 `yarn eject` 来使各个配置文件暴露, 当然最好的方法还是 `yarn add @craco/craco` 安装 `craco` 库, 新建一个 `craco.config.js` 文件来配置. 详见 [craco.config.js](./craco.config.js)

## 配置路由

由于 `react-router-config` 仍在使用 `react-router-dom` 的 v5 版本, 而 `yarn add react-router-dom` 默认安装 v6 版本, 使用上有一些差异, 如需使用 `react-router-config` 需修改一些配置, 且 `react-router-dom` v6 版本已经实现了 `react-router-config` 的大部分功能, 如路由表等, 因此我们直接使用 v6, 详细见 [router](./src/router/index.jsx), 中途遇到一些问题, 详见 [react-router v6 中的嵌套路由](./notes/react-router-v6中的嵌套路由.md)

## 开发组件

- AppHeader
  - HeaderLeft
  - HeaderRight
- Router
  - Discover
    - Recommend
    - Ranking
    - Songs
    - Djradio
    - Artist
    - Album
- AppFooter
  - FooterLeft
  - FooterRight

## 网络请求

网络请求模块使用 `axios` 库, `services` 中 `config.js` 用于编写相关配置, 如 `BASE_URL` 基础 URL, `TIMEOUT` 超时设置和 `ERROR_TYPES` 错误类型等...

- `request.js` 中创建了 `axios` 实例
- `player.js` 中包含了与 播放器 的网络请求相关的函数
- `recommend.js` 中包含了与 推荐 页面网络请求相关的函数