import React from "react";
import { withRouter, Route, NavLink } from "react-router-dom";
import { getToken } from "./utils/axios";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import FriendsList from "./components/FriendsList";

function App() {
  const LoggedIn = getToken();
  return (
    <div className="App">
      <nav>
        {LoggedIn && (
          <>
            <NavLink to="/friends">Friends List</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </>
        )}
        {!LoggedIn && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/logout" component={Logout} />
      <ProtectedRoute exact path="/friends" component={FriendsList} />
    </div>
  );
}

export default withRouter(App);
