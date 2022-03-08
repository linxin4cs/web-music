import React, { memo } from "react";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import HeaderRightWrapper from "./style";

const HeaderRight = memo(() => {
  return (
    <HeaderRightWrapper>
      <Input
        className="search"
        placeholder="音乐/视频/电台/用户"
        prefix={<SearchOutlined />}
      />
      <button className="">创作者中心</button>
      <button>登录</button>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
