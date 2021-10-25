import React, {useEffect, useState} from 'react';
import Movie from './Components/Movie';

const mainAPI = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce0c765e9a4c573c83baf64f39367b10&page=1";
const searchAPI = "https://www.themoviedb.org/3/search/movie?&api_key=ce0c765e9a4c573c83baf64f39367b10&query=";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(mainAPI)
      .then((res) => res.json())
      .then((response) => {
        console.log(response.results)
        setMovies(response.results);
      });
  }, []);
  
  return (
    <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => 
          <Movie key={movie.id} {...movie}/>
        )}
    </div>
  );
}

export default App;
