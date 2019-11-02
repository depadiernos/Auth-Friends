import React from "react";
import { withRouter, Route, NavLink } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/friends">Friends List</NavLink>
        <NavLink to="/">Login</NavLink>
      </nav>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute path="/friends" component={FriendsList}/>
    </div>
  );
}

export default App;
