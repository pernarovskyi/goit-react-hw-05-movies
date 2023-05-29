import axios from 'axios';

const TRENDS_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const MOVIE_URL = id => {
  return `https://api.themoviedb.org/3/movie/${id}`;
};
const MOVIE_CREDITS = id => {
  return `${MOVIE_URL(id)}/credits`;
};
const MOVIE_REVIEWS = id => {  
  return `${MOVIE_URL(id)}/reviews`;
};

const config = {
  method: 'GET',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDZlZWIzY2M5YTU0Zjg0NWVmMTQyNDcwZjM0OTcxNSIsInN1YiI6IjY0NzBiMTFiYzVhZGE1MDBhODJlMDQwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XHf675e3Eths5Ay6hHyrp6Ll1h90wx-tMZ59ExernBc',
  },
};

const getMoviesTrends = async () => {
  const apiData = await axios.get(TRENDS_URL, config).then(response => {
    return response.data;
  });
  return apiData;
};

const getMovieById = async id => {
  const apiData = await axios.get(MOVIE_URL(id), config).then(response => {
    return response.data;
  });
  return apiData;
};

const getMovieCredits = async id => {
  const apiData = await axios.get(MOVIE_CREDITS(id), config).then(response => {
    return response.data;
  });
  return apiData;
};

const getMovieReviews = async id => {
  const apiData = await axios.get(MOVIE_REVIEWS(id), config).then(response => {
    return response.data.results;
  });
  return apiData;
};

const getMovies = async query => {
  const updateConfig = {
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {query: `${query}`, include_adult: 'false', language: 'en-US', page: '1'},
  }; 
  const requestOptions = {...config, ...updateConfig};  
  
  const apiData = await axios.request(requestOptions).then(response => {    
    return response.data.results;
  });
  return apiData;
};

export { getMoviesTrends, getMovieById, getMovieCredits, getMovieReviews, getMovies };