import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;

export const apiTest = axios.create({
  baseURL: "http://ip.jsontest.com"
});
