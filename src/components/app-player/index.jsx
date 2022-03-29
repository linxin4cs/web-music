import React, { memo, useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getPlaySongUrl, getFormattedTime } from "@/utils/format";
import { getDisorderedPlayQueue } from "../../utils/handlePlayQueue";
import {
  changeSequenceAction,
  changeCurrentLyricIndexAction,
  getLyricAction,
  changePlayQueueAction,
  changeCurrentSongIndexAction,
} from "@/store/app_player/actionCreators";

import Control from "./control";
import PlayInfo from "./play-info";
import Operator from "./operator";

import { message } from "antd";

import AppPlayerWrapper from "./style";

const AppPlayer = memo(() => {
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    playQueue,
    currentSong,
    currentSongIndex,
    sequence,
    lyric,
    currentLyricIndex,
  } = useSelector(
    (state) => ({
      playQueue: state.getIn(["player", "playQueue"]),
      currentSong: state.getIn(["player", "currentSong"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
      sequence: state.getIn(["player", "sequence"]),
      lyric: state.getIn(["player", "lyric"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const audioRef = useRef();
  useEffect(() => {
    dispatch(getLyricAction(currentSong.id));
    audioRef.current.src = getPlaySongUrl(currentSong.id);
  }, [dispatch, currentSong, audioRef]);

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [audioRef, isPlaying]);

  const onSliderChange = useCallback(
    (value) => {
      const duration = currentSong.duration;
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [currentSong]
  );

  const onSliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * currentSong.duration) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);

      if (!isPlaying) {
        playMusic();
      }
    },
    [currentSong, isPlaying, playMusic]
  );

  const changeSequence = useCallback(() => {
    if (sequence === 0) {
      const [newPlayQueue, newSongIndex] = getDisorderedPlayQueue(
        [...playQueue],
        currentSongIndex
      );
      dispatch(changePlayQueueAction(newPlayQueue));
      dispatch(changeCurrentSongIndexAction(newSongIndex));
    }

    dispatch(changeSequenceAction(sequence === 2 ? 0 : sequence + 1));
  }, [dispatch, sequence, playQueue, currentSongIndex]);

  const onTimeUpdate = useCallback(
    (e) => {
      const currentTime = e.target.currentTime;
      const duration = currentSong.duration;
      if (!isChanging) {
        setCurrentTime(currentTime * 1000);
        setProgress(((currentTime * 1000) / duration) * 100);
      }

      // 获取当前的歌词
      let i = 0;
      for (; i < lyric.length; i++) {
        let lyricItem = lyric[i];
        if (currentTime * 1000 < lyricItem.time) {
          break;
        }
      }

      if (currentLyricIndex !== i - 1) {
        dispatch(changeCurrentLyricIndexAction(i - 1));
        const content = lyric[i - 1] && lyric[i - 1].content;
        message.open({
          key: "lyric",
          content: content,
          duration: 0,
          className: "lyric-class",
        });
      }
    },
    [dispatch, currentSong, isChanging, lyric, currentLyricIndex]
  );

  const onEnded = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  return (
    <AppPlayerWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying} playMusic={playMusic} />
        <PlayInfo
          currentSong={currentSong}
          progress={progress}
          onSliderChange={onSliderChange}
          onSliderAfterChange={onSliderAfterChange}
          currentTime={getFormattedTime(currentTime)}
          duration={getFormattedTime(currentSong.duration)}
        />
        <Operator sequence={sequence} changeSequence={changeSequence} />
      </div>
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={onEnded} />
    </AppPlayerWrapper>
  );
});

export default AppPlayer;
