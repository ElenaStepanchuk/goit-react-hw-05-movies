import { NavLink } from 'react-router-dom';
import css from '../components/Navigation.module.css';

const Navigation = () => {
  const active = ({ isActive }) => (isActive ? css.activeLink : css.link);
  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={active}>
        Home
      </NavLink>
      <NavLink to="/movies" className={active}>
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
