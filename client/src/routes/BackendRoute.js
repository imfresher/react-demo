import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashBoardPage from 'pages/backend/DashBoardPage';
import AdminUserPage from 'pages/frontend/AdminUserPage';

class BackendRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/admin" component={DashBoardPage} />
        <Route path="/admin/users" component={AdminUserPage} />
      </Switch>
    );
  }
}

export default BackendRoute;
