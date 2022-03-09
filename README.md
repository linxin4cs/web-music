# 网易云音乐

**基于 `React` 开发的 `网易云音乐` Web 版**

## 本地启动项目

- `yarn install` 安装依赖
- `yarn start` 启动服务
- 打开浏览器输入对应服务地址

## 项目结构

- public 构建时, 直接将该文件夹中的资源复制到构建后的文件夹中
- src 项目主要资源文件夹
  - assets 存放静态资源, 如 css, font, img等
  - common 存放公共数据, 如常量, 本地存储等
  - components 存放可复用的组件
  - pages 存放各页面的资源
  - router 存放路由配置
  - service 存放网络相关的配置
  - store 存放状态相关资源
  - utils 存放工具类资源

## 项目规范

- 文件夹, 文件名称统一小写, 多个单词以连接符 ( - ) 连接
- 组件名称前加上自己的标识符, 用以区分 其他人, 其他库 的组件
- JavaScript变量名称 采用 小驼峰标识, 常量 全部使用 大写字母, 组件 采用 大驼峰
- CSS 采用 普通CSS 和 `styled-component` 结合来编写( 全局采用 普通CSS、局部采用 `styled-component` )
- 整个项目不再使用 class组件, 统一使用 函数式组件, 并且全面拥抱 `Hooks`
- 所有的函数式组件, 为了避免不必要的渲染, 全部使用 `memo` 进行包裹
- 组件内部的状态，使用 `useState` , `useReducer`. 业务数据全部放在 `redux` 中管理
- 函数组件内部基本按照如下顺序编写代码
  - 组件内部 `state` 管理
  - `redux` 的 `hooks` 代码
  - 其他组件 `hooks` 代码
  - 其他逻辑代码
  - 返回 `JSX` 代码
- `redux` 代码规范如下
  - 每个模块有自己独立的 `reducer`, 通过 `combineReducer` 进行合并
  - 异步请求代码使用 `redux-thunk`, 并且写在 `actionCreators` 中
  - `redux` 直接采用 `redux hooks` 方式编写, 不再使用 `connect`
- 网络请求采用 `axios`
  - 对 `axios` 进行二次封装
  - 所有的模块请求会放到一个请求文件中单独管理
- 项目使用 `AntDesign`
  - 部分使用 `AntDesign` 组件
  - 部分自己编写

## 使用的库

- `antd` React 组件库
- `@ant-design/icons` antd 图标库
- `@craco/craco` create-react-app configuration override
- `normalize.css` 重置 css, 使各浏览器行为一致
- `react-router-dom` React 路由
- `axios` 基于 Promise 的 网络请求库
- `styled-components` css in js, 样式组件库
- 其他库自行搜索

## 组件说明

- App - 应用入口
  - AppHeader 主页头部
    - HeaderLeft 头部左侧
    - HeaderRight 头部右侧
  - Routes 路由
  - AppFooter 主页脚部
    - FooterLeft
    - FooterRight

## 页面介绍

## 笔记

- [react-router v6 中的嵌套路由](./notes/react-router-v6中的嵌套路由.md)

## 感谢

- [`coderwhy` 老师的项目及课程](https://github.com/coderwhy/hy-react-web-music)
- [网易云 API](http://123.207.32.32:9001/)
- [网易云 API 文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)