import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchMovie from '../components/SearchMovie';
import { getMovies } from '../services/moviesApi';
import Loader from 'components/Loader/';

const Movies = () => {
  const [moviesBySearch, setMoviesBySearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    setMoviesBySearch([]);
    setLoading(true);

    try {
      getMovies(query).then(data => {
        if (data.length === 0) {
          setError(true);
          setLoading(false);
          setSearchParams({});
          return;
        }

        const shortResponse = data.map(({ id, title }) => {
          return { id, title };
        });
        setMoviesBySearch([...shortResponse]);
        setError(false);        
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const formInput = e.currentTarget;
    const formInputValue = formInput.elements.movieSearchName.value;
    setSearchParams({ query: formInputValue });
    formInput.reset();
  };

  return (
    <main>
      {loading && <Loader />}
      {!loading && (
        <SearchMovie onSubmit={handleSubmit} movies={moviesBySearch} />
      )}
      {error && 
        <p style={{ textAlign: 'center', marginTop: '50px', fontWeight: 600 }}>
          No matches found on your request. Try again.
        </p>
      }
    </main>
  );
};

export default Movies;
