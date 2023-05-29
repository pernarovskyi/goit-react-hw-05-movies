import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/moviesApi';
import Credits from '../components/Credits';
import Loader from 'components/Loader/';

const MovieCredits = () => {
  const { moviId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setCredits([]);

    try {
      getMovieCredits(moviId).then(response => {
        const shortCredits = response.cast.map(
          ({ id, character, name, profile_path }) => {
            return {
              id,
              character,
              name,
              profile_path,
            };
          }
        );
        setCredits([...shortCredits]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [moviId]);

  return (
    <>
      {loading && <Loader />}
      {!loading && <Credits credits={credits} />}
    </>
  );
};

export default MovieCredits;
