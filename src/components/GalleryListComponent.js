import styled from 'styled-components';
import PropTypes from 'prop-types';
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
GalleryListComponent.protoTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      film: PropTypes.string.isRequired,
    })
  ),
  location: PropTypes.string.isRequired,
};
