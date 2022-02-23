import { Route, Routes } from 'react-router-dom';
import NotFoundFilms from './NotFoundFilms';
import AppBar from './AppBar';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
// import MovieDetailsPage from './MovieDetailsPage';
const App = () => {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route> */}
        <Route element={<NotFoundFilms />}></Route>
      </Routes>
    </>
  );
};
export default App;
