import axios from "axios"

const movieBaseurl = "https://api.themoviedb.org/3"

const api_key = import.meta.env.VITE_API_KEY

// 'https://api.themoviedb.org/3/trending/all/day?

const getTrendingVideos = axios.get(this.movieBaseurl + "trending/all/day?" + api_key)


export default { getTrendingVideos }