import { playerActionTypes as actionTypes } from "./constants";

import { getLyric } from "@/services/player";

import parseLyric from "@/utils/player/parseLyric";

const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

const changePlayQueueAction = (playQueue) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playQueue,
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

const changeCurrentSongAction = (currentSongIndex) => {
  return (dispatch, getState) => {
    const oldSongIndex = getState().getIn(['player', 'currentSongIndex']);
    const playQueue = getState().getIn(['player', 'playQueue']);

    if(currentSongIndex === -1 || currentSongIndex > playQueue.length - 1) {
      dispatch(changeCurrentSongIndexAction(oldSongIndex));
    } else {
      dispatch(changeCurrentSongIndexAction(currentSongIndex));
      dispatch(getLyricAction(playQueue[currentSongIndex].id))
    }

    dispatch(changeCurrentLyricIndexAction(0));
  }
}

const changLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyric,
});

const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((lyric) => {
      const parsedLyric = parseLyric(lyric);

      dispatch(changLyricAction(parsedLyric));
    });
  };
};

const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex,
});







export {
 changeSequenceAction,

 changePlayQueueAction,
 changeCurrentSongAction,

 getLyricAction,
 changeCurrentLyricIndexAction,
}