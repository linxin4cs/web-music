import React, { memo } from "react";

import { menuLinks } from "@/common/local_data/discover";

import { NavLink } from "react-router-dom";

import MenuWrapper from "./style";

const Menu = memo(() => {
  return (
    <MenuWrapper className="wrap-v1">
      {menuLinks.map((item) => {
        return (
          <div className="menu-item" key={item.key}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </div>
        );
      })}
    </MenuWrapper>
  );
});

export default Menu;
