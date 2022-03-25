import React, { memo } from "react";

import HotRecommend from "./hot-recommend";
import NewAlbum from "./new-album";
import Ranking from "./ranking";

import BodyLeftWrapper from "./style";

const BodyLeft = memo(() => {
  return (
    <BodyLeftWrapper>
      <HotRecommend />
      <NewAlbum />
      <Ranking />
    </BodyLeftWrapper>
  );
});

export default BodyLeft;
