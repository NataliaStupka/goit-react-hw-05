import { useEffect, useState } from "react";

import { fetchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

import s from "./HomePage.module.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Home";
  }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await fetchMovies();
      console.log("Movies:", results);
      setMovies(results);
    };
    getData();
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today:</h2>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <MovieList movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
