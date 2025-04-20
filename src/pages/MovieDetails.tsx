import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import type { Movie, MovieDetails } from "../interfaces/movies"
import { getMovieDetails, getSimilarMovies } from "../services/movie"
import MovieCard from "../components/MovieCard"

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState<MovieDetails | null>(null)
    const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return
            setLoading(true)
            try {
                // Fetch movie details
                const movieDetails = await getMovieDetails(id)
                setMovie(movieDetails)

                // Fetch similar movies
                const similar = await getSimilarMovies(id)
                setSimilarMovies(similar)
            } catch (error) {
                console.error("Error al obtener datos de la película", error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [id])

    if (loading) return <div className="loading">Cargando...</div>
    if (!movie) return <div className="loading">Película no encontrada.</div>

    return (
        <div className="container">
            <Link to="/" className="back-button">Volver a inicio</Link>

            <div className="movie-details-container">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-details-poster"
                />

                <div className="movie-details-info">
                    <h1 className="movie-details-title">{movie.title}</h1>
                    {movie.tagline && <p className="movie-details-tagline">"{movie.tagline}"</p>}

                    <div className="movie-details-stats">
                        {movie.release_date && (
                            <span className="movie-details-stat">
                                {new Date(movie.release_date).getFullYear()}
                            </span>
                        )}
                        <span className="movie-details-stat">{movie.runtime} min</span>
                        <span className="movie-details-stat">
                            ⭐ {movie.vote_average.toFixed(1)}
                        </span>
                    </div>

                    <p className="movie-details-overview">{movie.overview}</p>

                    <div className="movie-details-row">
                        <span className="movie-details-label">Géneros:</span>
                        {movie.genres.map((genre) => genre.name).join(", ")}
                    </div>

                    <div className="movie-details-row">
                        <span className="movie-details-label">Idioma original:</span>
                        {movie.original_language}
                    </div>

                    <div className="movie-details-row">
                        <span className="movie-details-label">Países:</span>
                        {movie.production_countries.map((country) => country.name).join(", ")}
                    </div>

                    {movie.homepage && (
                        <div className="movie-details-row">
                            <span className="movie-details-label">Sitio oficial:</span>
                            <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="movie-details-link">
                                Visitar
                            </a>
                        </div>
                    )}
                </div>
            </div>
            {/* Similar Movies Section */}
            {similarMovies.length > 0 && (
                <div className="similar-movies-section">
                    <h2 className="similar-movies-title">También te podría interesar</h2>
                    <div className="similar-movies-grid">
                        {similarMovies.map((similarMovie) => (
                            <MovieCard key={similarMovie.id} movie={similarMovie} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetails;