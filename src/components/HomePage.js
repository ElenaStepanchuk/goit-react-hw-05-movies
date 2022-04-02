import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TrendingFilms } from '../helpers/FetchFilms';
import Loader from './Loader';
import noPoster from '../images/no-poster.jpg';

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
const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  console.log(location);

  const Scroll = () => {
    window.scrollBy({
      top: 2000,
      behavior: 'smooth',
    });
  };
  const handleChangePage = () => {
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    Scroll();
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
      <Gallery>
        {films &&
          films.map(film => (
            <GalleryItem key={film.id}>
              <GalleryItemLink
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                {film.poster_path ? (
                  <GalleryItemImg
                    src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                    alt={film.original_title}
                  />
                ) : (
                  <img src={noPoster} alt={film.original_title} width="300px" />
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
export default HomePage;
