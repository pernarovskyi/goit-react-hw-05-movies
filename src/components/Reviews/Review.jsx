const Review = ({ movieReviews }) => {
  return (
    <ul>
      {movieReviews.length > 0 ? (
        <>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </>
      ) : (
        'There are no reviews for this movie yet.'
      )}
    </ul>
  );
};

export default Review;
