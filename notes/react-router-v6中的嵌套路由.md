# react-router v6 中的嵌套路由

react-router v6 通过 <Route> 嵌套来达到路由嵌套的效果的文章比比皆是, 本文介绍通过路由表来实现嵌套路由.

## v5 路由表中的嵌套

v5 使用路由表, 需安装另一个包 `react-router-config`, 创建一个 js 类型的 router 配置文件, 如下:

![](https://gitee.com/sherlinz0/img-storage/raw/2129a95275a12ce5dfc3dd0418bee9d673d0d0de/react-router-v6%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1-v5-01.png)

且在需要在使用路由的组件中使用 `renderRoutes(routes)` 渲染路由, 如下.

![](https://gitee.com/sherlinz0/img-storage/raw/master/react-router-v6%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1-v5-03.png)

拿 `/discover` 页面为例, 为了达到嵌套路由的效果, 需要在 `<HYDiscover>` 组件中再使用 `renderRoutes(props.route.routes)` 渲染子路由, 如下:

![](https://gitee.com/sherlinz0/img-storage/raw/master/react-router-v6%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1-v5-02.png)

## v6 路由表中的嵌套

而再 v6 中有所不同, v6 中不需要再安装 `react-router-config` 包, 官方已经实现 `react-router-config` 相关功能, 详见 [Upgrading from v5](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md) 中的介绍.

v6 中创建路由表需将该表创建为函数式组件, 并且使用 `useRoutes(routes)` 钩子, 最后返回 `useRoutes(routes)` 的返回值, 其中 `routes` 中的属性与写法也有些不同, 如下:

![](https://gitee.com/sherlinz0/img-storage/raw/master/react-router-v6%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1-v6-01.png)

同样以 `/discover` 为例, 我在使用嵌套路由时, 仍想通过 `props.route.routes` 来实现, 后来通过 `console.log(props)` 发现没有 `route` 属性, 所以前往 [Upgrading from v5](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md) 查阅 `react-router-config` 相关内容, 得知在 `<Discover>` 组件中使用 `<Outlet>` 组件即可实现, 如下:

![](https://gitee.com/sherlinz0/img-storage/raw/master/react-router-v6%E4%B8%AD%E7%9A%84%E5%B5%8C%E5%A5%97%E8%B7%AF%E7%94%B1-v6-02.png)

## 参考

[1] **Upgrading from v5** https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md