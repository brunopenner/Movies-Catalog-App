import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ListMovies from './ListMovies'
import MovieInternal from './MovieInternal'

const RANDOM_MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&s=avengers&page=1"

function App() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState([]);

    useEffect (() => {
        fetchMovies();
    }, [])

    async function fetchMovies() {
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();
        setMovies (data.Search || []);
    }

    const testFunction = (movie) => {
      setSelectedMovie(movie);
    }

  return (
    <>
      <Navbar />
      <section className='wrapper'>
        <div className='leftColumn'>
          <ListMovies movies={movies} testFunction={testFunction}/>
        </div>
        <div className='rightColumn'>
          <MovieInternal movieTitle={selectedMovie}/>
        </div>
      </section>
    </>
  )
}

export default App
