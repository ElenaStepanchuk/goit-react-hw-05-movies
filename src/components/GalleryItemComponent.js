import styled from 'styled-components';
import PropTypes from 'prop-types';
import GalleryItemLinkComponent from './GalleryItemLinkComponent';
const GalleryItem = styled.li`
  list-style: none;
  padding: 20px;
`;
const GalleryItemComponent = ({ film, location }) => {
  return (
    <GalleryItem key={film.id}>
      <GalleryItemLinkComponent film={film} location={location} />
    </GalleryItem>
  );
};
export default GalleryItemComponent;
GalleryItemComponent.protoTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  location: PropTypes.string.isRequired,
};
