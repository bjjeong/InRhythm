import React from 'react';

const SearchIndexItem = props => {
  let { album } = props;

  return(
    <li>
      {album[0].collectionName}
    </li>
  );
};

export default SearchIndexItem;