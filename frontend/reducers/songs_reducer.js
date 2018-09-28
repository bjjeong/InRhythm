import { merge } from 'lodash';

import { RECEIVE_ARTIST_SONGS } from '../actions/song_actions';

const AlbumsReducer = (state = {}, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_ARTIST_SONGS:
      let songState = {};

      action.songs.forEach(song => {
        if(songState[song.collectionId]){
          songState[song.collectionId].push(song);
        } else {
          songState[song.collectionId] = new Array();
          songState[song.collectionId].push(song);
        }
      });
      return merge({}, songState);
    default:
      return state;
  }
};

export default AlbumsReducer;