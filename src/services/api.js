import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const API_KEY = "b16acf67b085ef63f730716a5f3f661c";

// 1)fetch trending day
export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

// 2)fetch details 1movie по id
export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

//3) cast - actors
export const fetchMovieCredits = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.cast;
};

//4) reviews
export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data.results;
};

// 5)fetch movie by name
export const fetchMovieByName = async (query) => {
  const { data } = await axios.get(`search/movie?`, {
    params: {
      query,
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data.results; // [{}, {}, ..., {}]
};

//---------------------------
// 1) "https://api.themoviedb.org/3/trending/movie/day?api_key=b16acf67b085ef63f730716a5f3f661c"

// 2) 'https://api.themoviedb.org/3/movie/343611?api_key=<<api_key>>'
//'https://api.themoviedb.org/3/movie/movie_id?language=en-US'

// 3) 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'

// 4) 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'

// 5) 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
