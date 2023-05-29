import noImage from '../../images/noImage.png'

const Credits = ({ credits }) => { 
  return (
    <ul>
      {credits.length > 0
        ? credits.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id} style={{display: "flex", flexDirection: "row"}}>                
                <div>
                  <img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w200${profile_path}`                        
                        : noImage
                    }
                    alt="actor"
                    loading="lazy"
                    width={120}                    
                  />
                </div>
                <div style={{marginLeft: "20px", marginTop: "50px"}}>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })
        : "Sorry, there's no info about this movie"}
    </ul>
  );
};

export default Credits;
