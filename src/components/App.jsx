import { Routes, Route } from "react-router-dom"; //маршрутизатор
import { lazy, Suspense } from "react";

import Header from "./Header/Header";
// -- lazy --
//pages
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../pages/MovieDetailsPage/MovieDetailsPage")
);
//NestedRoutes
const MovieCasts = lazy(() => import("./NestedRoutes/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/NestedRoutes/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<h2>Loading... 🤪</h2>}>
        <Routes>
          {/* path - шлях */}
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCasts />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
