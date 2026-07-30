import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-zay5.onrender.com",
});

export default API;