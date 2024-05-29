import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };

  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <img src={POSTER_URL_PREFIX + movie.poster_path} crossOrigin=""></img>
    <p>{movie.title}</p>
    <div>{[...Array(5)].map((_, index) => (
      <span className={`${styles.starItem} ${
        (index< (movie.vote_average*0.5)) ? styles.yellow : styles.grey
      }`}>★</span>
      ))}
    </div>
    
  </div>;
};

export default MoviePreview;
