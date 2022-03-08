import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";

import HeaderLeftWrapper from "./style";

const HeaderLeft = memo(() => {
  const renderNavs = (nav, index) => (
    <li key={nav.key}>
      {index < 3 ? (
        <>
          <NavLink to={nav.link} className="nav">
            {nav.title}
            <i className="subscript-icon sprite_01" />
          </NavLink>
        </>
      ) : (
        <>
          <a href={nav.link} className="nav">
            {nav.title}
          </a>
        </>
      )}
    </li>
  );

  return (
    <HeaderLeftWrapper>
      <a href="#/" className="logo sprite_01">
        网易云音乐
      </a>
      <ul className="navs">{headerLinks.map(renderNavs)}</ul>
      <NavLink to="/mine"></NavLink>
      <NavLink to="/friend"></NavLink>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
