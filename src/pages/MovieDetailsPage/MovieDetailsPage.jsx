import { useEffect, useState } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import clsx from "clsx";

import s from "./MovieDetailsPage.module.css";

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams(); //витягуємо id

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  //???????????? map dont work
  // const genres = movie.genres.map((gen) => console.log(gen));

  //якщо movie = null
  if (!movie) {
    return <h2>Loading movie...</h2>;
  }
  const srcPoster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div>
      <Link>Go back</Link>
      <div className={s.movieCard}>
        <div>
          <img src={srcPoster} alt={movie.title} />
        </div>
        <div className={s.wrapper}>
          <ul className={s.description}>
            <li className={s.movieTitle}>
              {movie.title} ({movie.release_date})
            </li>
            <li>User score:</li>
            <li>
              <p className={s.describe}>Overview</p>
              <p className={s.movieValue}>{movie.overview}</p>
            </li>
            <li>
              <p className={s.describe}>Genres</p>
              <p className={s.movieValue}></p>
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
