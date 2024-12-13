import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Movie from './Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <section>
        <div className='leftColumn'>
          <Movie />
        </div>
        <div className='rightColumn'>
          rightColumn
        </div>
      </section>
    </>
  )
}

export default App
