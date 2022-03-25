import React, { memo } from "react";

import Banner from "./banner";
import Body from "./body";

import RecommendWrapper from "./style";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner />
      <Body/>
    </RecommendWrapper>
  );
});

export default Recommend;
