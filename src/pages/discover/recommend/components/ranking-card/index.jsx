import React, { memo } from "react";

import { getSizeImage } from "../../../../../utils/format";

import { NavLink } from "react-router-dom";

import { RankingCardWrapper } from "./style";

const RankingCard = memo((props) => {
  const { pictureUrl, title, songs = [] } = props;

  return (
    <RankingCardWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(pictureUrl)} alt="" />
          <NavLink to="/todo" className="image_cover">
          </NavLink>
        </div>
        <div className="info">
          <a href="/todo">{title}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {songs.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    // onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <NavLink to="/todo">查看全部 &gt;</NavLink>
      </div>
    </RankingCardWrapper>
  );
});

export default RankingCard;
