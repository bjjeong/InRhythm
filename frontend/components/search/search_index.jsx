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

    return(
      <div>
        Search Index
      </div>
    );
  }
}

export default withRouter(SearchIndex);