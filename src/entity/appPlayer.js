const Song = ({ id, name, singer, pictureUrl, duration }) => ({
  id,
  name,
  singer,
  pictureUrl,
  duration,
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
    duration: song.dt,
  });

export { songParser };