import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home_container';
import Search from './search/search_index_container';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/search" component={ Search } />
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;