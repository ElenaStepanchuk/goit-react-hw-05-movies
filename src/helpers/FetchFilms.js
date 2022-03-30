import axios from 'axios';
const API_KEY = '19261be26ee50f4d2c275bad83bad0b4';
export const TrendingFilms = async page => {
  return await axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&page=${page}`
  );
};
export const DetailsFilm = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
};
export const CastFilm = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
};
export const ReviewsFilm = async movieId => {
  return await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
};
export const SerchFilms = async (page, query) => {
  return await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  );
};
