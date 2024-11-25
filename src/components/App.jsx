import { Routes, Route } from "react-router-dom"; //маршрутизатор

import Header from "./Header/Header";

//pages
import HomePage from "../pages/HomePage/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";
//NestedRoutes
import MovieCasts from "./NestedRoutes/MovieCast/MovieCast";
import MovieReviews from "../components/NestedRoutes/MovieReviews/MovieReviews";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* path - шлях */}
        <Route path="/" element={<HomePage />} />

        <Route path="movies" element={<MoviesPage />} />
        {/* <Route path="/:movieId" element={<MovieDetailsPage />}> */}
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCasts />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
