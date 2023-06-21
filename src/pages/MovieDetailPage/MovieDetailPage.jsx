import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MovieDetailPage.css";

export default function MovieDetailPage({ movies }) {
  const { movieName } = useParams();
  const movie = movies.find((m) => m.title === movieName);
  const cast = movie.cast.join(", ");

  return (
    <div className="movie-detail">
      <div className="movie-info">
        <Link className="icon-back-link" to="/">
          <img
            className="icon-back"
            alt="Go Back"
            src="https://thenounproject.com/api/private/icons/1227050/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
          />{" "}
          Back
        </Link>{" "}
        <h1>{movie.title}</h1>
        <strong>Released:</strong> {movie.releaseDate}
        <br />
        <br />
        <strong>Cast: </strong>
        {cast}
      </div>
      <img src={movie.posterPath} alt="poster" />
    </div>
  );
}
