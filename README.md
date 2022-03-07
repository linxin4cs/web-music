# 网易云音乐

**使用 `React` 开发的 `网易云音乐` Web 版**

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