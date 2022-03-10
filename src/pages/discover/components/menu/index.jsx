import React, { memo } from "react";

import { menuLinks } from "@/common/local-data/discover";

import { NavLink } from "react-router";

import MenuWrapper from "./style";

const Menu = memo(() => {
  return (
    <MenuWrapper>
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
