import axios from "axios";

console.log()
export const axiosApi = axios.create({
  baseURL: 'https://api.themoviedb.org/',
headers: {'Authorization':
    `Bearer ${import.meta.env.VITE_APP_THEMOVIEDB_API_KEY}`
  }
})