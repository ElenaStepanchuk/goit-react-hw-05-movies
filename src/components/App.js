import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MoviesPage = lazy(() => import(`../components/MoviesPage`));
const MovieDetailsPage = lazy(() => import(`../components/MovieDetailsPage`));
const Cast = lazy(() => import(`../components/Cast`));
const Reviews = lazy(() => import(`../components/Reviews`));
const HomePage = lazy(() => import(`../components/HomePage`));
const Navigation = lazy(() => import(`../components/Navigation`));
export const App = () => {
  return (
    <>
      <Suspense fallback="">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </>
  );
};
