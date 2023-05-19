
import styles from './MovieCard.module.css'
import {Link} from 'react-router-dom' 
import placeholder from '../placeholder.jpg';
import { getMovieImg } from '../utils/getMovieImg';

export function MovieCard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path, 300);
   return (
        <li className={styles.movieCard}>
           <Link to={'/movies/' + movie.id}>
                <img 
                    width={230}
                    height={345}
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>
    );
}