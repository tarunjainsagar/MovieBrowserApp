import axios from 'axios';

// todo: externalize key to configuration file
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const TMDB_ACCOUNT_ID = 'YOUR_TMDB_ACCOUNT_ID';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const fetchNowPlayingMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/now_playing', {
      params: {
        page, // Specify the page number
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/popular', {
      params: {
        page, // Specify the page number
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/top_rated', {
      params: {
        page, // Specify the page number
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/upcoming', {
      params: {
        page, // Specify the page number
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const createGuestSession = async () => {
  try {
    const response = await api.get('/authentication/guest_session/new');
    return response.data.guest_session_id;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query, // The user's search query
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

// todo: figure out why the API is not working with session_id

// export const addMovieToFavorites = async (session_id, movie_id) => {
//   const url = `https://api.themoviedb.org/3/account/${TMDB_ACCOUNT_ID}/favorite?session_id=${session_id}`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'accept': 'application/json',
//       'content-type': 'application/json',
//       'Authorization': `Bearer ${TMDB_API_KEY}`,
//     },
//     body: JSON.stringify({
//       media_type: 'movie',
//       media_id: movie_id,
//       favorite: true,
//     }),
//   };

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
