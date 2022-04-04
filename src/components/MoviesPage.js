import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { SerchFilms } from '../helpers/FetchFilms';
import noPoster from '../images/no-poster.jpg';
import Loader from './Loader';
const Gallery = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 340px 340px 340px 340px;
  padding: 0;
  margin: 20px auto;
`;
const GalleryItem = styled.li`
  list-style: none;
  padding: 20px;
`;
const GalleryItemTittle = styled.h2`
  background: rgb(0, 255, 255, 0.8);
  padding: 15px 4px;
  margin: 0;
  box-shadow: 10px 5px 5px rgb(0, 255, 255, 0.5);
  border-left: solid 1px rgb(0, 255, 255);
  border-bottom: solid 1px rgb(0, 255, 255);
  font-size: 18px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
`;
const GalleryItemImg = styled.img`
  display: block;
  box-shadow: 10px 8px 5px rgb(0, 255, 255, 0.5);
`;
const GalleryItemBtn = styled.button`
  display: block;
  margin: 20px auto;
  background: rgb(0, 255, 255);
  box-shadow: -1px -1px 9px 6px rgb(0, 255, 255, 0.5);
  border: solid 1px rgb(0, 255, 255);
  border-radius: 5px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-style: italic;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
`;
const GalleryItemLink = styled(Link)`
  text-decoration: none;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 40px;
`;
const Input = styled.input`
  padding: 10px;
  font-weight: 800;
  font-size: 18px;
  color: rgb(2, 16, 141);
  border-radius: 5px;
`;
const SerchBtn = styled.button`
  display: block;
  background: rgb(0, 255, 255);
  border: none;
  border-radius: 5px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-style: italic;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
`;
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
  const Scroll = () => {
    window.scrollBy({
      top: 2000,
      behavior: 'smooth',
    });
  };
  const handleChangePage = () => {
    Scroll();
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
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={ChangeQuery}
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search films"
        ></Input>
        <SerchBtn type="submit">Serch</SerchBtn>
      </Form>
      {loading && <Loader />}
      <Gallery>
        {films.length > 0 &&
          films.map(film => (
            <GalleryItem key={film.id}>
              <GalleryItemLink
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                {film.poster_path ? (
                  <GalleryItemImg
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.original_title}
                  />
                ) : (
                  <GalleryItemImg
                    src={noPoster}
                    alt={film.original_title}
                    width="300px"
                  />
                )}
                <GalleryItemTittle>
                  {film.original_title || film.name}
                </GalleryItemTittle>
              </GalleryItemLink>
            </GalleryItem>
          ))}
      </Gallery>
      {films.length > 0 && (
        <GalleryItemBtn
          type="button"
          page={page}
          onClick={() => handleChangePage(page)}
        >
          More films
        </GalleryItemBtn>
      )}
    </>
  );
};
export default MoviesPage;
