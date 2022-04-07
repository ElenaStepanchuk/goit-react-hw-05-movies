import styled from 'styled-components';
import GalleryItemLinkComponent from './GalleryItemLinkComponent';
const GalleryItem = styled.li`
  list-style: none;
  padding: 20px;
`;
const GalleryItemTrending = ({ film, location }) => {
  return (
    <GalleryItem key={film.id}>
      <GalleryItemLinkComponent film={film} location={location} />
    </GalleryItem>
  );
};
export default GalleryItemTrending;
