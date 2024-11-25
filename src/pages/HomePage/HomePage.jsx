import { useEffect, useState } from "react";

import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

import s from "./HomePage.module.css";

const HomePage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Home";
  }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { results } = await fetchTrendingMovies();
      // console.log("Movies:", results);
      setMovies(results);
    };
    getData();
  }, []);

  return (
    <div className={s.container}>
      <h2>Trending today:</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
