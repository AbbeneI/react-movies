import "./MovieCard.css";
import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {
  const releaseYear = movie.releaseDate.slice(0, 4);

  return (
    <div className="movie-card">
      <Link to={`/movies/${movie.title}`}>
        <img
          className="movie-poster"
          alt={`Poster for ${movie.title}`}
          src={movie.posterPath}
        />
        <div className="movie-card-hover">
          <h3>{movie.title}</h3>
          <span>{releaseYear}</span>
        </div>
      </Link>
    </div>
  );
}
