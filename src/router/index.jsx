import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// 动态加载, 延迟加载在初次渲染时未用到的组件
const Discover = lazy(() => import("@/pages/discover"));
const NewAlbum = lazy(() => import("@/pages/discover/new-album"));
const Singer = lazy(() => import("@/pages/discover/singer"));
const Radio = lazy(() => import("@/pages/discover/radio"));
const Ranking = lazy(() => import("@/pages/discover/ranking"));
const Recommend = lazy(() => import("@/pages/discover/recommend"));
const SongSheet = lazy(() => import("@/pages/discover/song-sheet"));

const Mine = lazy(() => import("@/pages/mine"));
const Friend = lazy(() => import("@/pages/friend"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      { path: "/discover", element: <Navigate to="recommend" /> },
      { path: "recommend", element: <Recommend /> },
      { path: "ranking", element: <Ranking /> },
      { path: "songs", element: <SongSheet /> },
      { path: "djradio", element: <Radio /> },
      { path: "artist", element: <Singer /> },
      { path: "album", element: <NewAlbum /> },
    ],
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/friend",
    element: <Friend />,
  },
];

const getWrappedRoutes = (routes) => {
  return routes.map((item) => {
    if(item.children) {
      item.children = getWrappedRoutes(item.children);
    }
    item.element = <Suspense fallback={<div>加载中...</div>}>
      {item.element}
    </Suspense>

    return item;
  })
}

// 使用 useRoutes 钩子
const Router = () => {
  const router = useRoutes(getWrappedRoutes(routes));

  return router;
};

export default Router;
