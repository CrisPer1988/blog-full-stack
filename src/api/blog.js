import axios from "axios";

const blogApi = axios.create({
  // baseURL: "http://localhost:3200/api/v1",
  baseURL: "https://blog-web-psus.onrender.com/api/v1",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default blogApi;
