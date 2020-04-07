import { Route, Redirect } from "react-router-dom";

import React, { Component } from 'react'

export default class PrivateRoute extends Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        const { component: Component } = this.props;//object destructing -- whatever component i receive it should be type component
        let token = localStorage.getItem("jwtToken");
    let isAuthenticated = false;
    if (token != undefined && token != null) {
      isAuthenticated = true;
    }

            
        return (
            <Route
        exact
        path={this.props.path}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />

        )
    }
}
