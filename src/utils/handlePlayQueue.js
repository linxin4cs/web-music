const getDisorderedPlayQueue = (playQueue, currentSongIndex) => {
  for(let i = 0; i < playQueue.length; i++) {
    const randomIndex = Math.floor(Math.random() * playQueue.length);
    
    if(i === currentSongIndex) currentSongIndex = randomIndex;

    [playQueue[i], playQueue[randomIndex]] = [playQueue[randomIndex], playQueue[i]];
  }

  return [playQueue, currentSongIndex];
}

export {
  getDisorderedPlayQueue,
}