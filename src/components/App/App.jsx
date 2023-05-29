import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const Trending = lazy(() => import('pages/Trending'));
const MovieCredits = lazy(() => import('pages/MovieCredits'));
const MovieReviews = lazy(() => import('pages/MovieReviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<Movies />} />
          
          <Route path="movies/:moviId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCredits />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>    
  );
};

export default App;
