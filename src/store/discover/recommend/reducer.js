import { Map } from "immutable";

import actionsTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: [],
  newRanking: [],
  originRanking: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionsTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionsTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);

    case actionsTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionsTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionsTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    
      default:
      return state;
  }
};

export default reducer;
