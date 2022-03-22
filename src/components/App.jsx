import { Route, Routes } from 'react-router-dom';
import NotFoundFilms from './NotFoundFilms';
import AppBar from './AppBar';
import HomePage from './HomePage';
import MoviesPage from './MoviesPage';
import MovieDetailsPage from './MovieDetailsPage';
// import Navigation from './Navigation';
const App = () => {
  return (
    <>
      <AppBar />
      <MovieDetailsPage />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}></Route>
        </Route>
        <Route element={<NotFoundFilms />}></Route>
      </Routes>
    </>

    // <Routes>
    //   <Route path="/" element={<Navigation />}>
    //     <Route path="home" element={<HomePage />} />
    //     <Route path="movies" element={<MoviesPage />} />
    //   </Route>
    // </Routes>
  );
};

export default App;
