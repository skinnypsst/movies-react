import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClients";
import { Spinner } from "../components/Spinner";
import { useQuery } from '../hooks/useQuery'
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const query = useQuery();
  const search = query.get("search");


  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <b>Title: </b>
          {movie.title}
        </p>
        <p>
          <b>Genres: </b>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <b>Description: </b>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
