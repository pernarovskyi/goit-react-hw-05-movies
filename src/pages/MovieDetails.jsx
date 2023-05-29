import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import { useState, useEffect } from 'react';
import Loader from 'components/Loader/';
import Details from 'components/Details';
import BackLink from 'components/BackLink';

const MovieDetails = () => {
  const { moviId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';  

  useEffect(() => {
    setMovieDetails([]);
    setLoading(true);

    try {
      getMovieById(moviId).then(data => {
        const { original_title, overview, genres, poster_path, vote_average } =
          data;
        const shortMovieDetais = {
          original_title,
          overview,
          genres,
          poster_path,
          vote_average,
          score: vote_average * 10,
          scoreToFixed: (vote_average * 10).toFixed(2),
        };

        setMovieDetails(shortMovieDetais);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [moviId]);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <BackLink to={backLinkHref}>Back</BackLink>
          <Details movieDetails={movieDetails} />
          <h4 style={{marginTop: '20px'}}>Additional information</h4>
          <ul>
            <li>
              <Link to="cast" state={{...location.state}}>Cast</Link>
            </li>
            <li>
              <Link to="reviews" state={{...location.state}}>Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;
