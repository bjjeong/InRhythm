import React, { Component } from 'react';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import Song from './song';

class Album extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { artist } = queryString.parse(this.props.queryString);
    this.props.fetchArtistSongs(artist);
  }

  render() {
    if (Object.keys(this.props.albums).length === 0 && this.props.albums.constructor === Object)
      return(
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      );

    let { albumId } = queryString.parse(this.props.queryString);
    let songs = this.props.albums[albumId];
    songs.sort(function (a, b) { 
      return a.trackNumber - b.trackNumber; 
    });

    return(
      <div>
        <ul className="collection">
          {songs.map(song => (
            <Song
              key={song.trackId}
              song={song}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Album);