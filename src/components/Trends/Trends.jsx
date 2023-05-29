import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Trends = ({ trends }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trends.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Trends.propTypes = {
  trends: PropTypes.array,
};

export default Trends;
