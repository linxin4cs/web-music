import { combineReducers } from "redux-immutable";

import recommendReducer from "@/store/discover/recommend";
import playReducer from "@/store/player";

const reducer = combineReducers({
  discover: combineReducers({
    recommend: recommendReducer,
  }),
  player: playReducer,
});

export default reducer;