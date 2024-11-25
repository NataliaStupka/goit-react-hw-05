import { Link } from "react-router-dom";
import s from "./MovieList.module.css";
import defaultImg from "../../assets/default-images";

const MovieList = ({ movies }) => {
  return (
    <>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            {/* посилання повинно бути строкою, тому id проводимо до строки .toString() */}
            {/* ??? to={movie.id.toString()} */}
            <Link to={`/movies/${movie.id}`}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
              />
              <p className={s.text}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;

// const defaultImg =
//   "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

// <img
//   src={
//     movieData.poster_path
//       ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
//       : defaultImg
//   }
//   width={250}
//   alt="poster"
// />;
