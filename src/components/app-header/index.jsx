import React, { memo } from "react";

import HeaderLeft from "./header-left";
import HeaderRight from "./header-right";

import HeaderWrapper from "./style";

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      {/* wrap-v1 已经在全局样式中定义 */}
      <div className="content wrap-v1">
        <HeaderLeft />
        <HeaderRight />
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});

export default AppHeader;
