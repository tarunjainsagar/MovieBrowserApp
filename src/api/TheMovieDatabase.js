import axios from 'axios';

// todo: externalize key to configuration file
const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const fetchNowPlayingMovies = async () => {
  try {
    const response = await api.get('/movie/now_playing');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await api.get('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await api.get('/movie/upcoming');
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get('/movie', {
      params: {
        query, // The user's search query
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
