import React, { memo } from "react";

import { headerMenuLinks } from "@/common/local_data";

import { NavLink } from "react-router-dom";

import HeaderLeftWrapper from "./style";

const HeaderLeft = memo(() => {
  const renderMenu = (item, index) => (
    <li key={item.key}>
      {index < 3 ? (
        <>
          <NavLink className="menu-item" to={item.link}>
            {item.title}
            <i className="subscript-icon sprite_01" />
          </NavLink>
        </>
      ) : (
        <>
          <a className="menu-item" href={item.link}>
            {item.title}
          </a>
        </>
      )}
    </li>
  );

  return (
    <HeaderLeftWrapper>
      <a className="logo sprite_01" href="#/">
        网易云音乐
      </a>
      <ul className="menu">{headerMenuLinks.map(renderMenu)}</ul>
      <NavLink to="/mine"></NavLink>
      <NavLink to="/friend"></NavLink>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
