import { useRoutes, Navigate } from "react-router-dom";

import Discover from "@/pages/discover";
import NewAlbum from "@/pages/discover/new-album";
import Singer from "@/pages/discover/singer";
import Radio from "@/pages/discover/radio";
import Ranking from "@/pages/discover/ranking";
import Recommend from "@/pages/discover/recommend";
import SongSheet from "@/pages/discover/song-sheet";

import Mine from "@/pages/mine";
import Friend from "@/pages/friend";

// 使用 useRoutes 钩子
const Routes = () => {
  const routes = useRoutes([
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
  ]);

  return routes;
};

export default Routes;
