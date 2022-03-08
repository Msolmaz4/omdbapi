import React from "react";


const MovieCard =({movie})=>{
    return(

        
        <div className="movie">
          <p>{movie.Title}</p>
        
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <p>{movie.Title}</p>
        </div>
        </div>
    )
}

export default MovieCard;