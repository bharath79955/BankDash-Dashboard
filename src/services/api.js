import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export default api;