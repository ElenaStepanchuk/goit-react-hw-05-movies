import styled from 'styled-components';
import GalleryItemTrending from './GalleryItemTrending';
const Gallery = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 340px 340px 340px 340px;
  margin-top: -20px;
  margin-left: -40px;
`;
const GalleryListTrending = ({ films, location }) => {
  return (
    <Gallery>
      {films &&
        films.map(film => (
          <GalleryItemTrending key={film.id} film={film} location={location} />
        ))}
    </Gallery>
  );
};
export default GalleryListTrending;
