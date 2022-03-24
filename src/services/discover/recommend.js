import request from "../request";

import {
  bannerParser,
  songSheetParser,
  albumParser,
  songParser,
} from "@/entity/discover/recommend";

export function fetchTopBanners() {
  return request({
    url: "/banner",
  }).then((res) => {
    const banners = res.banners;
    const parsedBanners = banners.map(bannerParser);

    return parsedBanners;
  });
}

export function fetchHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    },
  }).then((res) => {
    const hotRecommends = res.result;
    const parsedHotRecommends = hotRecommends.map(songSheetParser);

    return parsedHotRecommends;
  });
}

export function fetchNewAlbums(limit) {
  return request({
    url: "/top/album",
    params: {
      limit,
    },
  }).then((res) => {
    const newAlbums = res.albums;
    const parsedNewAlbums = newAlbums.map(albumParser);

    return parsedNewAlbums;
  });
}

export function fetchRanking(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  }).then((res) => {
    const ranking = res.playlist.tracks;
    const parsedRanking = ranking.map(songParser);

    return parsedRanking;
  });
}
