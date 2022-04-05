import styled from 'styled-components';
const GalleryItemImg = styled.img`
  display: block;
  box-shadow: 10px 8px 5px rgb(0, 255, 255, 0.5);
`;
const GalleryImgTrending = ({ poster_path, original_title }) => {
  return (
    <GalleryItemImg
      src={`https://image.tmdb.org/t/p/w300${poster_path}`}
      alt={original_title}
    />
  );
};
export default GalleryImgTrending;
