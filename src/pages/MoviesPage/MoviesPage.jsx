import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieByName } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Movies";
  }, []);

  const [query, setQuery] = useState(""); //що шукаємо
  const [movies, setMovies] = useState([]); //масив знайденних фільмів

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByName(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  //console.log("FIND_MOVIES:", movies);

  const handleSearchValue = (value) => {
    setQuery(value);
  };

  return (
    <div>
      <SearchBar onSearchValue={handleSearchValue} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
