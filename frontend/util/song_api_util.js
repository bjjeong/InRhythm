export const fetchArtistSongs = (artist) => (
  $.ajax({
    method: 'GET',
    url: `https://itunes.apple.com/search?term=${artist}&entity=song`,
    dataType: 'jsonp'
  })
);