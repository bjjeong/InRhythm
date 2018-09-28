import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <h1>Hello</h1>
      </Switch>
    </div>
  </div>
);

export default App;