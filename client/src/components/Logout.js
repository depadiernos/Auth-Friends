import React from "react";
import { Redirect } from "react-router-dom";
import { removeToken } from "../utils/axios";

export default function Logout(props) {
  removeToken();
  return <Redirect to="/login"/>;
}
