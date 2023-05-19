import placeholder from '../placeholder.jpg';

export function getMovieImg(path, width) {
    return path ? `http://image.tmdb.org/t/p/w${width}${path}`: placeholder;

}
