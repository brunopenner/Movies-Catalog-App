import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ListMovies from './ListMovies'
import MovieInternal from './MovieInternal'

function App() {
  const testFunction = () => {
    console.log("Test function!");
  }

  return (
    <>
      <Navbar />
      <section className='wrapper'>
        <div className='leftColumn'>
          <ListMovies testFunction={testFunction}/>
        </div>
        <div className='rightColumn'>
          <MovieInternal />
        </div>
      </section>
    </>
  )
}

export default App
