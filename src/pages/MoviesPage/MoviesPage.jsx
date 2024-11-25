import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieByName } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  useEffect(() => {
    document.title = "Home-work #5 | Movies";
  }, []);

  //*const [query, setQuery] = useState(""); //що шукаємо
  ////query useState()  !замінемо на searchParams useSearchParams(), значення те ж але можна передавати url зі збереженими даними
  ////витягти через searchParams.get

  const [searchParams, setSearchParams] = useSearchParams(); //1)для запису в url значення пошуку !
  const [movies, setMovies] = useState([]); //масив знайденних фільмів

  const query = searchParams.get("query") ?? ""; //якщо нічого не повернеться то додай порожню строку

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieByName(query);
      setMovies(data);
    };
    getData();
  }, [query]);

  //console.log("FIND_MOVIES:", movies);

  const handleSearchValue = (value) => {
    // setQuery(value);
    searchParams.set("query", value); //2)запам'ятовує
    setSearchParams(searchParams); //3 виводе в url
  };

  return (
    <div>
      <SearchBar onSearchValue={handleSearchValue} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
