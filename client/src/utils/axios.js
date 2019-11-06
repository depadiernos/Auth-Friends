import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
    return localStorage.removeItem("token");
  }

export default function api() {
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: getToken()
    }
  });
}