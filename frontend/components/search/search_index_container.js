import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchArtistSongs } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
  queryString: ownProps.location.search,
  albums: Object.values(state.entities.albums)
});

const mapDispatchToProps = dispatch => ({
  fetchArtistSongs: artist => dispatch(fetchArtistSongs(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);