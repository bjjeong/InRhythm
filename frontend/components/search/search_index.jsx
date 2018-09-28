import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import SearchIndexItem from './search_index_item';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { artist } = queryString.parse(this.props.queryString);
    this.props.fetchArtistSongs(artist);
  }

  render() {
    if (this.props.albums.length === 0) {
      return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      );
    }

    let { albums } = this.props;
    
    return(
      <div>
        <ul>
          {albums.map(album => (
            <SearchIndexItem 
              key={album[0].collectionId}
              album={album}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchIndex);