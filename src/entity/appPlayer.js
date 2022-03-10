const Song = ({ id, name, singer, pictureUrl }) => ({
  id,
  name,
  singer,
  pictureUrl,
});

const Singer = ({ name }) => ({
  name,
});

const songParser = (song) =>
  Song({
    id: song.id,
    name: song.name,
    singer: Singer({ name: song.ar.name }),
    pictureUrl: song.al.picUrl,
  });

export { songParser };