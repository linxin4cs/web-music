function getFormattedCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}

function getFormattedTime(time) {
  if (!time) return "00:00";

  let formattedTime = "";
  time = Math.floor(time / 1000);

  if (time > 60 * 60) {
    formattedTime += Math.floor(time / 60 / 60) + ":";
    time %= 60 * 60;
  }
  if (time / 60 >= 10) {
    formattedTime += Math.floor(time / 60) + ":";
    time %= 60;
  } else if (time > 60) {
    formattedTime += "0" + Math.floor(time / 60) + ":";
    time %= 60;
  } else if(time < 60){
    formattedTime += "00:";
  }
  if (time > 10) formattedTime += Math.floor(time);
  if (time < 10) formattedTime += "0" + Math.floor(time);

  return formattedTime;
}

function getSizeImageUrl(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

function getPlaySongUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export { getPlaySongUrl, getFormattedCount, getFormattedTime, getSizeImageUrl };
