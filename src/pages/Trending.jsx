import { useEffect, useState } from 'react';
import { getMoviesTrends } from '../services/moviesApi';
import Trends from 'components/Trends/';
import Loader from 'components/Loader/';

const Trending = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTrends([]);
    setLoading(true);
    
    try {      
      getMoviesTrends().then(data => {
        const { results } = data;
        const slicedArray = results
          .slice(0, 20)
          .map(({ id, original_title }) => {            
            return { id, original_title };
          });

        setTrends([...slicedArray]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
        {loading && <Loader />}
        {!loading && <Trends trends={trends} />}
    </>
  )
};

export default Trending;
