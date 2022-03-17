import React, { memo } from "react";

import Banner from "./banner";

import RecommendWrapper from "./style";

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner />
    </RecommendWrapper>
  );
});

export default Recommend;
