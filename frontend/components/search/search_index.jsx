import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';

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
            <li key={album[0].collectionId}>{album[0].collectionName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(SearchIndex);