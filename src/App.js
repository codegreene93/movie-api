import React, {useEffect, useState} from 'react';
import Movie from './Components/Movie';



const mainAPI = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ce0c765e9a4c573c83baf64f39367b10&page=1';
const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=ce0c765e9a4c573c83baf64f39367b10&query=';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState([]);

  useEffect(() => {
    fetch(mainAPI)
      .then((res) => res.json())
      .then((response) => {
        setMovies(response.results);
       
      });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(searchValue){
      fetch(searchAPI + searchValue)
        .then((res) => res.json())
        .then((response) => {
          console.log(response)
          setMovies(response.results);
        });
        setSearchValue('')
    }
  }

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);

  }
  
  return (
    <>
      <header>
      <form onSubmit={handleOnSubmit}>
        <input className="search" type="search" placeholder="Search..." value={searchValue} onChange={handleOnChange}/>
      </form>
      </header>
      <div className="movie-container"> 
          {movies.length > 0 && movies.map((movie) => 
            <Movie key={movie.id} {...movie}/>
          )}
      </div>
    </>
  );
}

export default App;
