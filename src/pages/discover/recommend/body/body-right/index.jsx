import React, { memo } from "react";

import Login from "./login";
import Singer from "./singer";
import Anchor from "./anchor";

import BodyRightWrapper from "./style";

const BodyRight = memo(() => {
  return (
    <BodyRightWrapper>
      <Login />
      <Singer />
      <Anchor />
    </BodyRightWrapper>
  );
});

export default BodyRight;
