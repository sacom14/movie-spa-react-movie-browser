import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_THE_MOVIE_DB_ACCESS_TOKEN;

const ThemeMovieDbService = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
    },
    params: {
        language: 'es-ES',
    }
})

export default ThemeMovieDbService