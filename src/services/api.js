import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

// 1)fetch trending day
export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: "b16acf67b085ef63f730716a5f3f661c",
    },
  });
  //console.log("DATA-api:", data);
  return data;
};

// 2)fetch 1фільму по id
export const fetchMoviesById = async (id) => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: "b16acf67b085ef63f730716a5f3f661c",
    },
  });
  return data;
};

//3) credits
export const fetchMovieCredits = async (id) => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: "b16acf67b085ef63f730716a5f3f661c",
    },
  });

  //console.log("credits:", data);
  return data.cast;
};

//4) reviews
export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: "b16acf67b085ef63f730716a5f3f661c",
    },
  });
  console.log("reviews.results:", data.results);
  return data.results;
};

//---------------------------
// 1) "https://api.themoviedb.org/3/trending/movie/day?api_key=b16acf67b085ef63f730716a5f3f661c"

// 2) 'https://api.themoviedb.org/3/movie/343611?api_key=<<api_key>>'
//'https://api.themoviedb.org/3/movie/movie_id?language=en-US'

//  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'

// 3) 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US'

// 4) 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'
