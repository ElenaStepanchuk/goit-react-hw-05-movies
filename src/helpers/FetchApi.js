const API_KEY = '19261be26ee50f4d2c275bad83bad0b4';
// const page = 1;
export async function FetchTrendingFilms(page) {
  return await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error`));
  });
}

export function FetchMovieDetailsFilms(filmId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error`));
  });
}
