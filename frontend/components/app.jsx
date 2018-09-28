import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home_container';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        <Route path="/" component={ Home } />
      </Switch>
    </div>
  </div>
);

export default App;