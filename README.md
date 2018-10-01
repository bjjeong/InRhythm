# InRhythm  Coding Exercise
Built with React-Redux, Ruby on Rails, and PostgreSQL.

A simple web application that allows users to search for an artist and view all albums by that artist. Data pulled from iTunes Search API.
 
Didn't necessarily need to build a backend for this but did it anyway just in case I want to build it out further later on.

## Installation
1. `bundle install`
2. `rails s`
3. `npm install`
4. Go to `localhost:3000` in the browser

## Challenges
* When searching for an artist, the API returns individual songs by that artist. To make it easier on myself later, I grouped all these songs into albums in my reducer.
```javascript
case RECEIVE_ARTIST_SONGS:
  let songState = {};

  action.songs.forEach(song => {
    if(songState[song.collectionId]){
      songState[song.collectionId].push(song);
    } else {
      songState[song.collectionId] = new Array();
      songState[song.collectionId].push(song);
    }
  });
  return merge({}, songState);
```
