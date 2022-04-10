import styled from 'styled-components';
import GalleryItemComponent from './GalleryItemComponent';
const Gallery = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: 340px 340px 340px 340px;
  margin-top: -20px;
  margin-left: -40px;
`;
const GalleryListComponent = ({ films, location }) => {
  return (
    <Gallery>
      {films &&
        films.map(film => (
          <GalleryItemComponent key={film.id} film={film} location={location} />
        ))}
    </Gallery>
  );
};
export default GalleryListComponent;
