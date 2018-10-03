import React from 'react';
import { withRouter } from 'react-router';

const Song = props => {
  let { song } = props;

  return(
    <li className="search-index-item collection-item">
      {song.trackNumber}. {song.trackName}
    </li>
  );
};

export default withRouter(Song);