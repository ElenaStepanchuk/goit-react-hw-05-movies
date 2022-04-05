import styled from 'styled-components';
import { Link } from 'react-router-dom';
import noPoster from '../images/no-poster.jpg';
import GalleryImgTrending from './GalleryImgTrending';
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
const GalleryItem = styled.li`
  list-style: none;
  padding: 20px;
`;
const GalleryItemTrending = ({ filmProp, location }) => {
  const { id, poster_path, original_title, name } = filmProp;
  return (
    <GalleryItem key={id}>
      <GalleryItemLink to={`/movies/${id}`} state={{ from: { ...location } }}>
        {poster_path ? (
          <GalleryImgTrending
            poster_path={poster_path}
            original_title={original_title}
          />
        ) : (
          <img src={noPoster} alt={original_title} width="300px" />
        )}
        <GalleryItemTittle>{original_title || name}</GalleryItemTittle>
      </GalleryItemLink>
    </GalleryItem>
  );
};
export default GalleryItemTrending;
