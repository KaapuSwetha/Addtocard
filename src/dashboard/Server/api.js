import axios from "axios";

// Simulate API with mock JSON server (use real API in production)
const BASE_URL = "https://jsonplaceholder.typicode.com"; // Replace with actual API endpoint

export const api = {
  getUsers: () => axios.get(`${BASE_URL}/users`),
  getRoles: () => axios.get(`${BASE_URL}/roles`),
  addUser: (user) => axios.post(`${BASE_URL}/users`, user),
  updateUser: (id, user) => axios.put(`${BASE_URL}/users/${id}`, user),
  deleteUser: (id) => axios.delete(`${BASE_URL}/users/${id}`),
  addRole: (role) => axios.post(`${BASE_URL}/roles`, role),
  updateRole: (id, role) => axios.put(`${BASE_URL}/roles/${id}`, role),
  deleteRole: (id) => axios.delete(`${BASE_URL}/roles/${id}`),
};
