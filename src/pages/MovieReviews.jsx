import Review from 'components/Reviews/';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/moviesApi';
import Loader from 'components/Loader/';

const MovieReviews = () => {
  const { moviId } = useParams();
  const [movieReviews, setMovieReview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMovieReview([]);
    setLoading(true);

    try {
      getMovieReviews(moviId).then(data => {
        const shortReviews = data.map(({ id, content, author }) => {
          return { id, content, author };
        });
        setMovieReview([...shortReviews]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [moviId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Review movieReviews={movieReviews} />}
    </>
  );
};

export default MovieReviews;
