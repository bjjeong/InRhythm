import React from 'react';

const SearchIndexItem = props => {
  let { album } = props;

  return(
    <div className="search-index-item">
      <img src={album[0].artworkUrl100} />
      {album[0].collectionName}
    </div>
  );
};

export default SearchIndexItem;