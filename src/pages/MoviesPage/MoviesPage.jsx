import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieByName } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Movies";
  }, []);

  const [query, setQuery] = useState(""); //що шукаємо
  const [searchMovies, setSearchMovies] = useState([]); //масив знайденних фільмів

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByName(query);
      setSearchMovies(data);
    };
    getData();
  }, [query]);

  console.log("FIND_MOVIES:", searchMovies);

  const handleSearchValue = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <SearchBar onSearchValue={handleSearchValue} />
      <ul className={s.movieList}>
        {searchMovies.map((movie) => (
          <li key={movie.id} className={s.movieItem}>
            <MovieList movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
