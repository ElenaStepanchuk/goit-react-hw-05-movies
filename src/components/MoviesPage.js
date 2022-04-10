import { useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { SerchFilms } from '../helpers/FetchFilms';
import Loader from './Loader';
import Scrollers from '../helpers/Scroll';
import BtnMoreFilms from './BtnMoreFilms';
import FormMoviePage from './FormMoviePage';
import GalleryListTrending from './GalleryListComponent';
const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const ChangeQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query });
    if (query === '') {
      setSearchParams('');
      setFilms([]);
      return toast('Введите имя фото!', {
        position: 'top-center',
      });
    }
    setFilms([]);
    setQuery('');
    setPage(1);
  };
  const handleChangePage = () => {
    Scrollers();
    setLoading(true);
    setPage(prevPage => prevPage + 1);
  };
  useEffect(() => {
    const query = searchParams.get('query');
    if (location.search === '') return;
    const SerchFilm = async () => {
      setLoading(true);
      try {
        const response = await SerchFilms(page, query);
        if (response.data.results.length === 0) {
          setSearchParams('');
          setFilms([]);
          toast(
            `Фильм с именем  ${query} не найден, введите новое имя фильма!`,
            {
              position: 'top-center',
            }
          );
        }
        setFilms(prevFilms => [...prevFilms, ...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    SerchFilm();
  }, [page, searchParams, setSearchParams, location.search]);
  return (
    <>
      <FormMoviePage
        handleSubmit={handleSubmit}
        ChangeQuery={ChangeQuery}
        query={query}
      />
      {loading && <Loader />}
      <GalleryListTrending films={films} location={location} />
      {films.length > 0 && (
        <BtnMoreFilms page={page} onClick={() => handleChangePage(page)} />
      )}
    </>
  );
};
export default MoviesPage;
