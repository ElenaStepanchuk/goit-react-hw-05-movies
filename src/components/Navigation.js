import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgb(0, 255, 255);
`;
const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 10px;
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  color: rgb(2, 16, 141);
  &.active {
    color: rgb(125, 12, 160);
    box-shadow: -1px -1px 9px 6px rgb(149, 102, 15, 0.9);
    border-radius: 5px;
  }
  &.active:focus,
  &.active:hover {
    box-shadow: -1px -1px 9px 6px rgb(149, 102, 15, 0.9);
  }
`;
const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Outlet />
    </Nav>
  );
};
export default Navigation;
