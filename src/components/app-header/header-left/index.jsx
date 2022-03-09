import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink } from "react-router-dom";

import HeaderLeftWrapper from "./style";

const HeaderLeft = memo(() => {
  const renderNavs = (nav, index) => (
    <li key={nav.key}>
      {index < 3 ? (
        <>
          <NavLink className="nav" to={nav.link}>
            {nav.title}
            <i className="subscript-icon sprite_01" />
          </NavLink>
        </>
      ) : (
        <>
          <a className="nav" href={nav.link}>
            {nav.title}
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
      <ul className="navs">{headerLinks.map(renderNavs)}</ul>
      <NavLink to="/mine"></NavLink>
      <NavLink to="/friend"></NavLink>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
