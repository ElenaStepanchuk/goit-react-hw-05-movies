import { FetchMovieDetailsFilms } from '../helpers/FetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const MovieDetailsPage = () => {
  const { filmId } = useParams();

  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  //   const [id, setId] = useState('');

  useEffect(() => {
    const FilmsCard = () => {
      setLoading(true);
      FetchMovieDetailsFilms(filmId)
        .then(GetFilmCard)
        .catch(error => console.log(error))
        .finally(setLoading(false));
    };
    FilmsCard();
  }, [filmId]);
  const GetFilmCard = ({ results }) => {
    if (film.length === 0) {
      return setFilm([...results]);
    }
    return;
  };

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
        alt={film.original_title}
      />
      <h2>{film.original_title || film.name}</h2>
    </>
  );
};
export default MovieDetailsPage;
