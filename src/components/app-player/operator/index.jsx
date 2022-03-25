import React, { memo } from "react";

import OperatorWrapper from "./style";

const Operator = memo((props) => {
  const { changeSequence, sequence } = props;

  return (
    <OperatorWrapper sequence={sequence}>
      <div className="left">
        <button className="sprite_player btn favor"></button>
        <button className="sprite_player btn share"></button>
      </div>
      <div className="right sprite_player">
        <button className="sprite_player btn volume"></button>
        <button
          className="sprite_player btn loop"
          onClick={changeSequence}
        ></button>
        <button className="sprite_player btn playlist"></button>
      </div>
    </OperatorWrapper>
  );
});

export default Operator;
