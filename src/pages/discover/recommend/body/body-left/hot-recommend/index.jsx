import React, { memo, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import TopicHeader from "@/components/topic-header";
import SongSheetCard from "@/components/song-sheet-card";

import { getHotRecommendsAction } from "@/store/discover/recommend/actionCreators";

import { HotRecommendWrapper } from "./style";

const HotRecommend = memo(() => {
  const songSheets = useSelector(
    (state) => state.getIn(["discover", "recommend"]).get("hotRecommends"),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotRecommendsAction(8));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <TopicHeader
        title="热门推荐"
        items={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {songSheets.map((item) => {
          return <SongSheetCard songSheet={item} key={item.id} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
