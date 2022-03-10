import request from "./request";

import { songParser } from "@/entity/player";

export function fetchSong(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  }).then((res) => {
    const song = res.songs[0];
    const parsedSong = songParser(song);

    return parsedSong;
  });
}

export function fetchLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  }).then((res) => {
    return res.lrc.lyric;
  });
}
