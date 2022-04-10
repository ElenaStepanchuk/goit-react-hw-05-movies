import styled from 'styled-components';
import PropTypes from 'prop-types';
const GalleryItemImg = styled.img`
  display: block;
  box-shadow: 10px 8px 5px rgb(0, 255, 255, 0.5);
`;
const GalleryImg = ({ film }) => {
  return (
    <GalleryItemImg
      src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
      alt={film.original_title}
    />
  );
};
export default GalleryImg;
GalleryImg.protoTypes = {
  film: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }),
};
