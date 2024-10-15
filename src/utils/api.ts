import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_KITSU_API_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
