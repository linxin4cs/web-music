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
      <a className="author-center" href="https://music.163.com/login?targetUrl=%2Fcreatorcenter">创作者中心</a>
      <a href="https://music.163.com/login?targetUrl=%2Fcreatorcenter">登录</a>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
