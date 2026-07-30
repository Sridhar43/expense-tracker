import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-backend-fobv.onrender.com/api",
});

export default API;