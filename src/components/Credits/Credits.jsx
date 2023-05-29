const Credits = ({ credits }) => {
  return (
    <ul>
      {credits.length > 0
        ? credits.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`
                        : `http://www.suryalaya.org/images/no_image.jpg`
                    }
                    alt="actor"
                    loading="lazy"
                    width={120}
                  />
                </div>
                <div
                  style={{
                    marginLeft: '20px',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <p style={{ marginBottom: 0, fontWeight: 500 }}>{name}</p>
                  <p style={{ marginBottom: 0 }}>Character: {character}</p>
                </div>
              </li>
            );
          })
        : "Sorry, there's no info about this movie"}
    </ul>
  );
};

export default Credits;
