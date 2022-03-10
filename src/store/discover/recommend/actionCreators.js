import actionsTypes from "./constants";

import {
  fetchNewAlbums,
  fetchHotRecommends,
  fetchTopBanners,
  fetchRanking,
} from "@/services/discover/recommend";

const changeTopBannersAction = (topBanners) => ({
  type: actionsTypes.CHANGE_TOP_BANNERS,
  topBanners,
});

const changeHotRecommendsAction = (hotRecommends) => ({
  type: actionsTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends,
});

const changeNewAlbumsAction = (newAlbums) => ({
  type: actionsTypes.CHANGE_NEW_ALBUMS,
  newAlbums,
});

const changeUpRankingAction = (upRanking) => ({
  type: actionsTypes.CHANGE_UP_RANKING,
  upRanking,
});

const changeNewRankingAction = (newRanking) => ({
  type: actionsTypes.CHANGE_NEW_RANKING,
  newRanking,
});

const changeOriginRankingAction = (originRanking) => ({
  type: actionsTypes.CHANGE_ORIGIN_RANKING,
  originRanking,
});

const getTopBannersAction = () => {
  return (dispatch) => {
    fetchTopBanners().then((banners) => {
      dispatch(changeTopBannersAction(banners));
    });
  };
};

const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    fetchHotRecommends(limit).then((result) => {
      dispatch(changeHotRecommendsAction(result));
    });
  };
};

const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    fetchNewAlbums(limit).then((albums) => {
      dispatch(changeNewAlbumsAction(albums));
    });
  };
};

const getRankingAction = (idx) => {
  return (dispatch) => {
    fetchRanking(idx).then((ranking) => {

      switch (idx) {
        case 0:
          dispatch(changeUpRankingAction(ranking));
          break;
        case 2:
          dispatch(changeNewRankingAction(ranking));
          break;
        case 3:
          dispatch(changeOriginRankingAction(ranking));
          break;
        default:
      }
    });
  };
};

export {
  getTopBannersAction,
  getNewAlbumsAction,
  getHotRecommendsAction,
  getRankingAction,
};
