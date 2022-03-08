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

由于 `react-router-config` 仍在使用 `react-router-dom` 的 v5 版本, 而 `yarn add react-router-dom` 默认安装 v6 版本, 使用上有一些差异, 如需使用 `react-router-config` 需修改一些配置, 且 `react-router-dom` v6 版本已经实现了 `react-router-config` 的大部分功能, 如路由表等, 因此我们直接使用 v6, 详细见 [router](./src/router/index.jsx)