import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../pages/errors/Error404';
import HomePage from '../pages/frontend/HomePage';
import WatchPage from '../pages/frontend/WatchPage';

class FrontendRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/watch" component={WatchPage} />

        <Route component={Error404} />
      </Switch>
    );
  }
}

export default FrontendRoute;
