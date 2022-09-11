//Action creator

export const selectSong = (song) => {
  //retırm an action
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};
