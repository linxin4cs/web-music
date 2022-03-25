import React, { memo } from "react";

import { getSizeImageUrl } from "@/utils/format";

import { NavLink } from "react-router-dom";

import { AlbumCardWrapper } from "./style";

export default memo(function AlbumCard(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;

  return (
    <AlbumCardWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImageUrl(info.pictureUrl, size)} alt="" />
        <NavLink to="/todo" className="cover image_cover">
          {info.name}
        </NavLink>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.singer}</div>
      </div>
    </AlbumCardWrapper>
  );
});
