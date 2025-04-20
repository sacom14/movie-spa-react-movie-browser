import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPopularMovies } from "../services/movie";
import { Movie } from "../interfaces/movies";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Logo from '../assets/logo.svg';

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [searchResults, setSearchResults] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || "";

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error al obtener películas:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleSearchResults = (results: Movie[]) => {
        setSearchResults(results);
    };

    if (isLoading) return <p>Cargando...</p>
    if (!searchResults) return <p>Película no encontrada.</p>
    return (
        <>
            <div className="logo-container">
                <img src={Logo} alt="Logo" height={250} width={250}/>
            </div>
            <div className="container">
                <h1>Películas Populares</h1>

                {/* Search Bar Component */}
                <SearchBar onSearchResults={handleSearchResults} />

                {/* Show search results or popular movies */}
                <div className="movie-grid">
                    {query && searchResults.length > 0
                        ? searchResults.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                        : movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </>

    );
}


export default Home;