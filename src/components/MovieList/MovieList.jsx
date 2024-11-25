import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";
import defaultImg from "../../assets/default-images";

const MovieList = ({ movies }) => {
  const location = useLocation(); //місцезнаходження, маршрут для кнопки GoBack (звідки прийшло)
  //console.log("locationGoBack:", location);

  return (
    <>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            {/* посилання повинно бути строкою, тому id проводимо до строки .toString() */}
            {/* ??? to={movie.id.toString()} */}
            <Link to={`/movies/${movie.id}`} state={location}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                }
                // width={250}
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
