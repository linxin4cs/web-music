import React, { memo } from "react";

import { headerLinks } from "@/common/local-date";

import { NavLink } from "react-router-dom";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

const AppHeader = memo(() => {
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
    <HeaderWrapper>
      {/* wrap-v1 已经在全局样式中定义 */}
      <span className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <ul className="navs">{headerLinks.map(renderNavs)}</ul>
          <NavLink to="/mine"></NavLink>
          <NavLink to="/friend"></NavLink>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </span>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
