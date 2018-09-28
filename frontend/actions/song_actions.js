import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ARTIST_SONGS = 'RECEIVE_ARTIST_SONGS';

export const recieveArtistSongs = songs => ({
  type: RECEIVE_ARTIST_SONGS,
  songs: Object.values(JSON.parse(songs))[1]
});

export const fetchArtistSongs = (artist) => dispatch => (
  SongApiUtil.fetchArtistSongs(artist)
    .then(songs => dispatch(recieveArtistSongs(songs)))
);