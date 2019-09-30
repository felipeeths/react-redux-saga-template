import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './routes';

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }
}

export default App;
