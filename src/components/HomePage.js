import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TrendingFilms } from '../helpers/FetchFilms';
import Loader from './Loader';
import Scrollers from '../helpers/Scroll';
import BtnMoreFilms from './BtnMoreFilms';
import GalleryListComponent from './GalleryListComponent';
const Tittle = styled.h1`
  padding: 0;
  margin-top: 20px;
  font-size: 35px;
  color: white;
  text-align: center;
  font-weight: 800;
  text-transform: uppercase;
`;
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const handleChangePage = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    Scrollers();
  };
  useEffect(() => {
    const Films = async () => {
      setLoading(true);
      try {
        const response = await TrendingFilms(page);
        setFilms(prevFilms => [...prevFilms, ...response.data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    Films();
  }, [page]);
  return (
    <>
      {loading && <Loader />}
      <Tittle>Trending films today</Tittle>
      <GalleryListComponent films={films} location={location} />
      {films.length > 0 && (
        <BtnMoreFilms page={page} onClick={() => handleChangePage(page)} />
      )}
    </>
  );
};
export default HomePage;
