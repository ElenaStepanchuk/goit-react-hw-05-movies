import GalleryImg from './GalleryImg';
import noPoster from '../images/no-poster.jpg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
const GalleryItemLink = styled(Link)`
  text-decoration: none;
`;
const GalleryItemLinkComponent = ({ film, location }) => {
  return (
    <GalleryItemLink to={`/movies/${film.id}`} state={{ from: location }}>
      {film.poster_path ? (
        <GalleryImg film={film} />
      ) : (
        <img src={noPoster} alt={film.original_title} width="300px" />
      )}
      <GalleryItemTittle>{film.original_title || film.name}</GalleryItemTittle>
    </GalleryItemLink>
  );
};
export default GalleryItemLinkComponent;
