import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import ListMovies from './ListMovies'

function App() {

  return (
    <>
      <Navbar />
      <section className='wrapper'>
        <div className='leftColumn'>
          <ListMovies />
        </div>
        <div className='rightColumn'>
          rightColumn
        </div>
      </section>
    </>
  )
}

export default App
