import actionTypes from "./constants";

import { fetchLyric } from "@/services/appPlayer";

import parseLyric from "@/utils/parseLyric";

const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

const changePlayQueueAction = (playQueue) => ({
  type: actionTypes.CHANGE_PLAY_QUEUE,
  playQueue,
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex,
});

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});

const changeCurrentSongWrappedAction = (currentSongIndex) => {
  return (dispatch, getState) => {
    const oldSongIndex = getState().getIn(["player", "currentSongIndex"]);
    const playQueue = getState().getIn(["player", "playQueue"]);
    const sequence = getState().getIn(["player", "sequence"]);

    if (currentSongIndex === -1 || currentSongIndex > playQueue.length - 1 || sequence === 2) {
      dispatch(changeCurrentSongIndexAction(oldSongIndex));
      dispatch(changeCurrentSongAction(playQueue[oldSongIndex]));
    } else {
      dispatch(changeCurrentSongIndexAction(currentSongIndex));
      dispatch(getLyricAction(playQueue[currentSongIndex].id));
      dispatch(changeCurrentSongAction(playQueue[currentSongIndex]));
    }
    dispatch(changeCurrentLyricIndexAction(0));
  };
};

const changLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_LYRIC,
  lyric,
});

const getLyricAction = (id) => {
  return (dispatch) => {
    fetchLyric(id).then((lyric) => {
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
  changeCurrentSongWrappedAction,
  getLyricAction,
  changeCurrentLyricIndexAction,
  changeCurrentSongIndexAction,
};
