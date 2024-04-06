import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./movies.module.css";
import PropTypes from "prop-types"; // Import PropTypes
import SingleMovie from "./SingleMovie";

export default function Movies({ movies }) {
  return (
    <div className={`container ${styles.movies}`}>
      {movies.map((movie) => (
        <SingleMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
Movies.propTypes = {
  movies: PropTypes.array.isRequired, // PropTypes validation for 'movies' prop
};
