import styled from 'styled-components';
import PropTypes from 'prop-types';
const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 40px;
`;
const Input = styled.input`
  padding: 10px;
  font-weight: 800;
  font-size: 18px;
  color: rgb(2, 16, 141);
  border-radius: 5px;
`;
const SerchBtn = styled.button`
  display: block;
  background: rgb(0, 255, 255);
  border: none;
  border-radius: 5px;
  color: rgb(2, 16, 141);
  text-align: center;
  font-style: italic;
  padding: 15px;
  font-weight: 900;
  font-size: 18px;
  text-transform: uppercase;
`;
const FormMoviePage = ({ handleSubmit, ChangeQuery, query }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={ChangeQuery}
        type="text"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      ></Input>
      <SerchBtn type="submit">Serch</SerchBtn>
    </Form>
  );
};
export default FormMoviePage;
FormMoviePage.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
  ChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
