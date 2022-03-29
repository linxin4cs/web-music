# web-music

**基于 `React` 开发的 `web-music`**

个人独立开发, 目的在于了解和熟悉前端项目开发流程.

技术栈: react, styled-components, redux, redux-thunk 等.

项目难点:
  - 路由 v5 与 v6 版本嵌套路由
  - 网络请求数据实体化 对网络请求到的数据进行处理, 筛选可用数据
  - 数据处理 处理歌词, 时间等数据
  - 组件开发 设计并开发一系列组件

运行演示:

![web-music-运行演示](https://img-1305590520.cos.ap-shanghai.myqcloud.com/web-music-%E8%BF%90%E8%A1%8C%E6%BC%94%E7%A4%BA.PNG)

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
  - entity 网络请求解析实体
  - pages 存放各页面的资源
  - router 存放路由配置
  - service 存放网络相关的配置
  - store 存放状态相关资源
  - utils 存放工具类资源
- notes 笔记

## 项目规范

- 文件夹及文件命名
  - 静态资源文件命名单词间以 `-` 分隔
  - 普通 JavaScript 及其他程序文件命名使用小驼峰
  - 组件文件命名单词以 `-` 分隔
  - 非组件文件夹命名单词间以 `_` 分隔
  - 组件文件夹命名单词以 `-` 分隔
- JavaScript变量名称 采用 小驼峰标识, 常量 全部使用 大写字母, 组件 采用 大驼峰
- CSS 采用 普通CSS 和 styled-component 结合来编写( 全局采用 普通CSS、局部采用 styled-component )
- 整个项目不再使用 class 组件, 统一使用函数式组件, 并且全面拥抱Hooks
- 所有的函数式组件, 为了避免不必要的渲染, 全部使用 `memo` 进行包裹
- 组件内部的状态，使用useState , useReducer. 业务数据全部放在redux中管理
- 函数组件内部基本按照如下顺序编写代码
  - 组件内部state管理
  - redux的hooks代码
  - 其他组件hooks代码
  - 其他逻辑代码
  - 返回JSX代码
- redux代码规范如下
  - 每个模块有自己独立的 reducer, 通过 combineReducer 进行合并
  - 异步请求代码使用 redux-thunk, 并且写在 actionCreators 中
  - redux直接采用 redux hooks 方式编写, 不再使用connect
- 网络请求采用 axios
  - 对 axios 进行二次封装
  - 所有的模块请求会放到一个请求文件中单独管理
- 项目使用 AntDesign
  - 部分使用 AntDesign 组件
  - 部分自己编写

## 使用的库

- `antd` React 组件库
- `@ant-design/icons` antd 图标库
- `@craco/craco` create-react-app configuration override
- `normalize.css` 重置 css, 使各浏览器行为一致
- `react-router-dom` React 路由
- `axios` 基于 Promise 的 网络请求库
- `styled-components` css in js, 样式组件库
- `redux` 状态管理库
- `react-redux` React 状态管理库
- `redux-thunk` redux 中间件
- `immutable` 不变数据流
- `redux-immutable` redux 中的 immutable
- 其他库自行搜索

## 页面介绍

本项目重在初步了解前端开发流程. 支持前端路由, 但由于开发组件工作量较大, 仅编写完成一个页面, 如下.

- web-music
  - 发现音乐
    - 推荐
  
该页面即为网易云音乐首页.

## 笔记

- [react-router v6 中的嵌套路由](./notes/react-router-v6中的嵌套路由.md)

## 感谢

- [`coderwhy` 老师的项目及课程](https://github.com/coderwhy/hy-react-web-music)
- [网易云 API](http://123.207.32.32:9001/)
- [网易云 API 文档](https://binaryify.github.io/NeteaseCloudMusicApi/#/)