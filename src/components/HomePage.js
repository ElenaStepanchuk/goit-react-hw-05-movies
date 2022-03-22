import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchTrendingFilms } from 'helpers/FetchApi';
import css from './HomePage.module.css';
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  console.log(FetchTrendingFilms());

  const handleChangePage = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    console.log(page);
  };
  const scroll = () => {
    window.scrollBy({
      top: 2000,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    setLoading(true);
    const Films = () => {
      FetchTrendingFilms(page)
        .then(GetTrendingFilms)
        .catch(error => console.log(error))
        .finally(setLoading(false));
    };
    Films();
  }, [page]);

  const GetTrendingFilms = ({ results }) => {
    if (results.length === 0) {
      return alert('No more films');
    }
    if (films.length === 0) {
      return setFilms(results);
    }
    setFilms(prevFilms => [...prevFilms, ...results]);
    scroll();
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ul className={css.trendingGallery}>
        {films.map(film => (
          <li className={css.trendingGalleryItem} key={film.id}>
            <Link className={css.trendingGalleryLink} to={`/films/{films.id}`}>
              <img
                className={css.trendingGalleryImg}
                src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                alt={film.original_title}
              />
              <h2 className={css.trendingGalleryTitle}>
                {film.original_title || film.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={css.trendingGalleryBtn}
        type="submit"
        page={page}
        onClick={() => handleChangePage(page)}
      >
        More films
      </button>
    </>
  );
};
export default HomePage;
