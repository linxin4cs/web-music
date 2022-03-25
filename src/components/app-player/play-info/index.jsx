import React, { memo } from "react";

import { getSizeImageUrl } from "../../../utils/format";

import { NavLink } from "react-router-dom";
import { Slider } from "antd";

import PlayInfoWrapper from "./style";

const PlayInfo = memo((props) => {
  const { currentSong, progress, onSliderChange, onSliderAfterChange, currentTime, duration } = props;

  return (
    <PlayInfoWrapper>
      <div className="image">
        <NavLink to="/todo">
          <img src={getSizeImageUrl(currentSong.pictureUrl, 35)} alt="" />
        </NavLink>
      </div>
      <div className="info">
        <div className="song">
          <span className="song-name">{currentSong.name}</span>
          <NavLink to="/todo" className="singer-name">
            {currentSong.singer.name}
          </NavLink>
        </div>
        <div className="progress">
          <Slider
            defaultValue={30}
            value={progress}
            onChange={onSliderChange}
            onAfterChange={onSliderAfterChange}
          />
          <div className="time">
            <span className="now-time">{currentTime}</span>
            <span className="divider">/</span>
            <span className="duration">{duration}</span>
          </div>
        </div>
      </div>
    </PlayInfoWrapper>
  );
});

export default PlayInfo;
