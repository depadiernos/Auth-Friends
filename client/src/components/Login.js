import React, { useState } from "react";
import api from "../utils/axios";

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState();

  const handleChange = e =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    api()
      .post("/login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/friends");
      })
      .catch(error => {
        setError(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>{`${error}`}</div>}
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={credentials.username}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
