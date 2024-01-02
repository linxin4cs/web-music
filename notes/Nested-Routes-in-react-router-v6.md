# Nested Routes in react-router v6

Articles on achieving nested routing in react-router v6 through nested <Route> are common. This article introduces the implementation of nested routing through a routing table.

## Nested in v5 Routing Table

In v5, to use a routing table, you need to install another package `react-router-config`. Create a JavaScript type router configuration file as follows:

![](/desc_static/asset/img/react-router-v6中的嵌套路由-v5-01.png)

And use `renderRoutes(routes)` in the component where routes are needed to render the routes, as follows.

![](/desc_static/asset/img/react-router-v6中的嵌套路由-v5-03.png)

Taking the `/discover` page as an example, to achieve nested routing, it is necessary to use `renderRoutes(props.route.routes)` in the `<HYDiscover>` component to render the sub-routes, as follows:

![](/desc_static/asset/img/react-router-v6中的嵌套路由-v5-02.png)

## Nested in v6 Routing Table

However, it's different in v6. In v6, it's not necessary to install the `react-router-config` package anymore, as the official has implemented the functionalities of `react-router-config`. See [Upgrading from v5](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md) for details.

In v6, the routing table should be created as a functional component, using the `useRoutes(routes)` hook, and returning the return value of `useRoutes(routes)`. The properties and writing methods in `routes` are also somewhat different, as follows:

![](/desc_static/asset/img/react-router-v6中的嵌套路由-v6-01.png)

Again taking `/discover` as an example, I still want to achieve nested routes through `props.route.routes`. After checking `console.log(props)`, I find no `route` property. So, I referred to [Upgrading from v5](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md) to learn about `react-router-config` and found that using the `<Outlet>` component in the `<Discover>` component can achieve this, as follows:

![](/desc_static/asset/img/react-router-v6中的嵌套路由-v6-02.png)

## Reference

[1] **Upgrading from v5** https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md
