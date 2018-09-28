import React from 'react';

const SearchIndexItem = props => {
  let { album } = props;

  return(
    <li>
      <img src={album[0].artworkUrl100} />
      {album[0].collectionName}
    </li>
  );
};

export default SearchIndexItem;