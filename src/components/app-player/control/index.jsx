import React, { memo } from "react";

import ControlWrapper from "./style";

const Control = memo((props) => {
  const { playMusic, isPlaying } = props;

  return (
    <ControlWrapper isPlaying={isPlaying}>
      {/* <button className="sprite_player prev" onClick={toLast} /> */}
      <button className="sprite_player play" onClick={playMusic} />
      {/* <button className="sprite_player next" onClick={toNext} /> */}
    </ControlWrapper>
  );
});

export default Control;
