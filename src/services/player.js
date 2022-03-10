import request from "./request";

import { Song, Singer } from "@/entity/player";

export function getSong(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
    },
  }).then((res) => {
    const song = res.songs[0];

    return Song({
      id: song.id,
      name: song.name,
      singer: Singer({ name: song.ar.name }),
      pictureUrl: song.al.picUrl
    })
  });
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id,
    },
  }).then((res) => {
    return res.lrc.lyric;
  });
}
