import React, { memo } from "react";

import { getFormattedCount, getSizeImageUrl } from "../../utils/format";

import SongSheetCardWrapper from "./style";

const SongSheetCard = memo((props) => {
  const { songSheet } = props;

  return (
    <SongSheetCardWrapper>
      <div className="cover-top">
        <img src={getSizeImageUrl(songSheet.pictureUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getFormattedCount(songSheet.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom">{songSheet.name}</div>
    </SongSheetCardWrapper>
  );
});

export default SongSheetCard;
