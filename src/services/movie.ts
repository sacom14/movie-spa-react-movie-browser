import { MovieDetails, MoviesResponse } from "../interfaces/movies"
import ThemeMovieDbService from "./themoviedb"

export const getPopularMovies = async (): Promise<MoviesResponse['results']> => {
    const response = await ThemeMovieDbService.get<MoviesResponse>('/movie/popular');
    return response.data.results
}

export const getMovieDetails = async (id: string | number): Promise<MovieDetails> => {
    const response = await ThemeMovieDbService.get(`/movie/${id}`)
    return response.data
}

export const searchMovie = async (query: string): Promise<MoviesResponse['results']> => {
    const response = await ThemeMovieDbService.get('/search/movie', {
        params: { query }
    });
    console.log(response.data.results)
    return response.data.results
}

export const getSimilarMovies = async (id: string | number): Promise<MoviesResponse['results']> => {
    const response = await ThemeMovieDbService.get<MoviesResponse>(`/movie/${id}/similar`);
    return response.data.results.slice(0, 6);
}