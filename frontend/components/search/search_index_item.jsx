import React from 'react';

const SearchIndexItem = props => {
  let { album } = props;
  let albumName = album[0].collectionName;
  let artistName = album[0].artistName;
  let releaseDate = new Date(album[0].releaseDate);

  return(
    <li className="search-index-item collection-item avatar">
      <img className="circle" src={album[0].artworkUrl100} />
      <span className="title">
        {albumName}
      </span>
      <p>{artistName}</p>
      <p>{releaseDate.getFullYear()}</p>
    </li>
  );
};

export default SearchIndexItem;