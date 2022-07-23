import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsNames = directors.map((director)=>{
    return (
      <div key={director.name}>
        <h2>Name:{director.name}</h2>
        <h4>Movies</h4>
        <ul>{director.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}</ul>
      </div>
    )
  })
  return(
   <div>
     <h1>Directors Page</h1>
     {directorsNames}
  </div>
)
}

export default Directors;
