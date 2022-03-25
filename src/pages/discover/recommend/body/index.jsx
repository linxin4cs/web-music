import React, { memo } from "react";

import BodyLeft from "./body-left";
import BodyRight from "./body-right";

import BodyWrapper from "./style";

const Body = memo(() => {
  return (
    <BodyWrapper className="wrap-v2">
      <BodyLeft />
      <BodyRight />
    </BodyWrapper>
  );
});

export default Body;
