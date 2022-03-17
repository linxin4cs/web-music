import React, { memo } from "react";

import { BannerControlWrapper } from "./style";

const BannerControl = memo((props) => {
  return (
    <BannerControlWrapper>
      <button
        className="btn left"
        onClick={props.toPre}
      ></button>
      <button
        className="btn right"
        onClick={props.toNext}
      ></button>
    </BannerControlWrapper>
  );
});

export default BannerControl;
