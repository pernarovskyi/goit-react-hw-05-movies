import { DetailsWrapper, Image } from './Details.styled';

const MovieDetails = ({ movieDetails }) => {
  const { original_title, overview, genres, poster_path, scoreToFixed } =
    movieDetails;

    // const genreToString = genres.flatMap(item => item.name).toString();

    // console.log(genreToString);
  return (
    <DetailsWrapper>
      <div>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }        
          loading="lazy"
          alt="movie poster"
        />
      </div>
      <div>
      <h2>{original_title}</h2>
      <p>User score: {scoreToFixed}%</p>
      <h4>Overview</h4>
      <p>{overview}</p>
      <h4>Genre</h4>
      {genres &&
        // genres.map(({ id, name }) => {
        //   return <li key={id}>{name}</li>;
        // })
        genres.flatMap(item => item.name).toString().replaceAll(',', ' ')
        } 
      </div>
    </DetailsWrapper>
  );
};

export default MovieDetails;
