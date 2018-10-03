import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import SearchIndexItem from './search_index_item';

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let { artist } = queryString.parse(this.props.queryString);
    this.props.fetchArtistSongs(artist);
  } 

  handleClick(e) {
    e.preventDefault();

    this.props.history.push("/");
  }

  render() {
    if (this.props.albums.length === 0) {
      return (
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      );
    }

    let { albums } = this.props;
    let { artist } = queryString.parse(this.props.queryString);
    artist = artist.charAt(0).toUpperCase() + artist.slice(1);
    
    return(
      <div className="albums-container">
        <h1>{artist}'s Albums</h1>
        <div className="back-button">
          <button 
            className="btn"
            onClick={this.handleClick}
            >
            Back
          </button>
        </div>
        <ul className="collection">
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