import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Movie, SearchBarProps } from '../interfaces/movies';
import { searchMovie } from '../services/movie';

const SearchBar = ({ onSearchResults }: SearchBarProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('q') || '');
    const [isLoading, setIsLoading] = useState(false);
    const [dropdownResults, setDropdownResults] = useState<Movie[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);

        if (newQuery) {
            setSearchParams({ q: newQuery });
        } else {
            setSearchParams({});
        }

        if (newQuery.length >= 1) {
            setIsLoading(true);
            setShowDropdown(true);
            try {
                const results = await searchMovie(newQuery);
                onSearchResults(results);
                setDropdownResults(results.slice(0, 5));
            } catch (error) {
                console.error("Error al obtener resultados de búsqueda:", error);
            } finally {
                setIsLoading(false);
            }
        } else {
            onSearchResults([]);
            setDropdownResults([]);
            setShowDropdown(false);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setShowDropdown(false);
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                placeholder="Buscar película..."
                className="search-input"
            />
            {isLoading && <span> </span>}

            {query && dropdownResults.length > 0 && showDropdown && (
                <div className="search-dropdown">
                    {dropdownResults.map((movie) => (
                        <Link
                            key={movie.id}
                            to={`/movie/${movie.id}`}
                            onClick={() => setShowDropdown(false)}
                            className="search-dropdown-item"
                        >
                            {movie.title} {movie.release_date && `(${new Date(movie.release_date).getFullYear()})`}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;