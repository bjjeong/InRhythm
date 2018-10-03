import { connect } from 'react-redux';
import Album from './album';
import { fetchArtistSongs } from '../../actions/song_actions';

const mapStateToProps = (state, ownProps) => ({
  queryString: ownProps.location.search,
  albums: state.entities.albums
});

const mapDispatchToProps = dispatch => ({
  fetchArtistSongs: artist => dispatch(fetchArtistSongs(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Album);