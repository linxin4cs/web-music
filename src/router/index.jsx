import { useRoutes, Navigate } from "react-router-dom";

import Discover from "@/pages/discover";
import Album from "@/pages/discover/album";
import Artist from "@/pages/discover/artist";
import Djradio from "@/pages/discover/djradio";
import Ranking from "@/pages/discover/ranking";
import Recommend from "@/pages/discover/recommend";
import Songs from "@/pages/discover/songs";

import Mine from "@/pages/mine";
import Friend from "@/pages/friend";

// 使用 useRoutes 钩子
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate to='/discover' />
    },
    {
      path: "/discover",
      element: <Discover />,
      children: [
        { path: "/discover", element: <Navigate to='recommend' />,},
        { path: "recommend", element: <Recommend />, },
        { path: "ranking", element: <Ranking /> },
        { path: "songs", element: <Songs /> },
        { path: "djradio", element: <Djradio /> },
        { path: "artist", element: <Artist /> },
        { path: "album", element: <Album /> },
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
  ]);

  return routes;
};

export default Routes;
