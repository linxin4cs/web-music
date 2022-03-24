import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getRankingAction } from "@/store/discover/recommend/actionCreators";

import TopicHeader from "@/components/topic-header";
import RankingCard from "../../../components/ranking-card";

import RankingWrapper from "./style";

const Ranking = memo(() => {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["discover", "recommend"]).get("upRanking"),
      newRanking: state.getIn(["discover", "recommend"]).get("newRanking"),
      originRanking: state
        .getIn(["discover", "recommend"])
        .get("originRanking"),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRankingAction(0));
    dispatch(getRankingAction(2));
    dispatch(getRankingAction(3));
  }, [dispatch]);

  return (
    <RankingWrapper>
      <TopicHeader title="榜单" />
      <div className="tops">
        <RankingCard
          title="飙升榜"
          pictureUrl="https://p1.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg"
          songs={upRanking}
        />
        <RankingCard
          title="新歌榜"
          pictureUrl="https://p1.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg"
          songs={newRanking}
        />
        <RankingCard
          title="原创榜"
          pictureUrl="https://p1.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg"
          songs={originRanking}
        />
      </div>
    </RankingWrapper>
  );
});

export default Ranking;
