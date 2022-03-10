const Banner = ({ pictureUrl, id, url }) => ({
  id,
  pictureUrl,
});

const SongSheet = ({ id, type, name, copyWriter, pictureUrl }) => ({
  id,
  type,
  name,
  copyWriter,
  pictureUrl,
});

const Album = ({ id, name, singer, pictureUrl }) => ({
  id,
  name,
  singer,
  pictureUrl,
});

const Song = ({ id, name, singer }) => ({
  id,
  name,
  singer,
});

const Singer = ({ name }) => ({ name });

const bannerParser = (banner) =>
  Banner({
    pictureUrl: banner.imageUrl,
    id: banner.targetId,
    url: banner.url,
  });

const songSheetParser = (songSheet) =>
  SongSheet({
    id: songSheet.id,
    type: songSheet.type,
    name: songSheet.name,
    copyWriter: songSheet.copyWriter,
    pictureUrl: songSheet.picUrl,
  });

const albumParser = (album) => {
  Album({
    id: album.id,
    name: album.name,
    singer: album.artist.name,
    pictureUrl: album.picUrl,
  });
};

const songParser = (song) =>
  Song({
    id: song.id,
    name: song.name,
    singer: Singer({ name: song.ar[0].name }),
  });

export { bannerParser, songSheetParser, albumParser, songParser };
