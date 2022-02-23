const API_KEY = '19261be26ee50f4d2c275bad83bad0b4';

export async function FetchApi() {
  return await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Error`));
  });
}

export function FetchTrendingFilms(page) {
  return FetchApi(
    `https://api.themoviedb.org/3/trending/day?api_key=${API_KEY}&page=${page}`
  );
}

export function FetchMovieDetailsFilms(filmId) {
  return FetchApi(
    `https://api.themoviedb.org/3/movie/${filmId}?api_key=${API_KEY}&language=en-US`
  );
}
