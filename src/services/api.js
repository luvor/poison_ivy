import axios from "axios";

export const BASENAME = "/";

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});
