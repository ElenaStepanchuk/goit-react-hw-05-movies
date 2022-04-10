import styled from 'styled-components';
import PropTypes from 'prop-types';
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
const BtnMoreFilms = ({ page, onClick }) => {
  return (
    <GalleryItemBtn
      name="myScrollToElement"
      type="button"
      page={page}
      onClick={onClick}
    >
      More films
    </GalleryItemBtn>
  );
};
export default BtnMoreFilms;
BtnMoreFilms.protoTypes = {
  page: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
