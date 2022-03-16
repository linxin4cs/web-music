import React, { memo } from "react";

import Menu from "./components/menu";

import { Outlet } from "react-router-dom";

import DiscoverWrapper from "./style";

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <Menu className="wrap-v1" />
      </div>
      {/* 嵌套路由 */}
      <Outlet />
    </DiscoverWrapper>
  );
});

export default Discover;
