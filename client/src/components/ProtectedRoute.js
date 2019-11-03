import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getToken } from "../utils/axios";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (getToken()) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}
