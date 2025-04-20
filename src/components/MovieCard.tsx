import { Link } from "react-router-dom";
import { MovieCardProps } from "../interfaces/movies";

const MovieCard = ({ movie }: MovieCardProps) => {
  // Extract year from release_date
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-card-content">
        <div className="movie-title">{movie.title}</div>
        {releaseYear && <div className="movie-year">({releaseYear})</div>}
      </div>
    </Link>
  );
};

export default MovieCard;