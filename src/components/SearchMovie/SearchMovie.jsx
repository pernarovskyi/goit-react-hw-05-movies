import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  InputArea,
  SearchButton,
  SearchSectionWrapper,
} from './SearchMovie.styled';

const SearchMovie = ({ onSubmit, movies }) => {
  const location = useLocation();
  
  return (
    <SearchSectionWrapper>
      <form onSubmit={onSubmit}>
        <label>
          <InputArea
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Start searching the movie ..."
            name="movieSearchName"
            required
          />
        </label>
        <SearchButton type="submit" aria-label="search button">
          Search
        </SearchButton>
      </form>

      {movies.length > 0 && (
        <ul style={{ textAlign: 'left' }}>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
       )}      
    </SearchSectionWrapper>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
}

export default SearchMovie;