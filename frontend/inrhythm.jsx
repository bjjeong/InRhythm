import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

import {fetchArtistSongs} from './actions/song_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  window.dispatch = store.dispatch;
  window.getState = store.dispatch;

  window.fetchArtistSongs = store.dispatch(fetchArtistSongs("lauv"));

  ReactDOM.render(<Root store={store} />, root);
});