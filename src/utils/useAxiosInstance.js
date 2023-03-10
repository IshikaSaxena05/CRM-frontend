import axios from "axios";

function useAxiosInstance() {
  // const SERVER_URL = "https://sridharrajaram-crmapp.herokuapp.com";
  const SERVER_URL = "http://localhost:5000";
  const AUTH_TOKEN = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: SERVER_URL,
    headers: { Authorization: "Bearer " + AUTH_TOKEN },
  });
  return instance;
}

export default useAxiosInstance;
