import "./MoviesListPage.css";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MoviesListPage({ movies }) {
  const moviesList = movies.map((m, idx) => <MovieCard movie={m} key={idx} />);

  return (
    <div className="movies-list">
      <div className="movies-container">{moviesList}</div>
    </div>
  );
}
