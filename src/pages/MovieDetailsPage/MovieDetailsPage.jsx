import { useEffect, useRef, useState } from "react";
import {
  Link,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import defaultImg from "../../assets/default-images";
import clsx from "clsx";

import s from "./MovieDetailsPage.module.css";

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams(); //витягуємо id

  const [movie, setMovie] = useState(null);

  // Link - Go Back
  const location = useLocation(); //кнопка Go back
  //console.log("loc", location);
  const goBackLink = useRef(location.state ?? "/"); //зберігаємо, для повернення (робочої кнопки) при переході далі

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  //якщо movie = null
  if (!movie) {
    return <h2>Loading movie...</h2>;
  }

  //????
  const genres = movie.genres.map((genre) => {
    return genre.name;
  });

  return (
    <div>
      {/* так кнопка буде робоча, навіть якщо будемо переходити в 'глибину' */}
      <Link to={goBackLink.current}>Go back</Link>

      <div className={s.movieCard}>
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />
        </div>
        <div className={s.wrapper}>
          <ul className={s.description}>
            <li className={s.movieTitle}>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </li>
            <li>User score: {Math.floor(movie.vote_average * 10)} %</li>
            <li>
              <p className={s.describe}>Overview</p>
              <p className={s.movieValue}>{movie.overview}</p>
            </li>
            <li>
              <p className={s.describe}>Genres:</p>
              <p className={s.movieValue}>{genres.join(", ")}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.metadata}>
        <h3>Idditional information</h3>
        <ul>
          <li>
            <NavLink to="cast" className={buildLinkClass}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={buildLinkClass}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      {/* вкладенність */}
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
