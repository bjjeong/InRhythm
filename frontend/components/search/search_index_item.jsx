import React from 'react';
import { withRouter } from 'react-router';

const SearchIndexItem = props => {
  let { album } = props;
  let albumName = album[0].collectionName;
  let albumId = album[0].collectionId;
  let artistName = album[0].artistName;
  let releaseDate = new Date(album[0].releaseDate);

  return(
    <li 
      className="search-index-item collection-item avatar"
      onClick={() => props.history.push({
        pathname: '/album',
        search: `?${`artist=${artistName}`}&${`albumId=${albumId}`}`
      })}>
      <img className="circle" src={album[0].artworkUrl100} />
      <span className="title">
        {albumName}
      </span>
      <p>{artistName}</p>
      <p>{releaseDate.getFullYear()}</p>
    </li>
  );
};

export default withRouter(SearchIndexItem);