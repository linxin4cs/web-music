import React, { memo } from "react";

import { dicoverMenu } from "@/common/local-data";

import { NavLink, Outlet } from "react-router-dom";

import { DiscoverWrapper, TopMenu } from "./style";

const Discover = memo((props) => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.key}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/* 嵌套路由 */}
      <Outlet />
    </DiscoverWrapper>
  );
});

export default Discover;
