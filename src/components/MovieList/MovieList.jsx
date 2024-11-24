import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movie }) => {
  const srcPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <>
      {/* посилання повинно бути строкою, тому id проводимо до строки .toString() */}
      <Link to={movie.id.toString()}>
        <img src={srcPoster} alt={movie.title} />
        <p className={s.text}>{movie.title}</p>
      </Link>
    </>
  );
};

export default MovieList;
