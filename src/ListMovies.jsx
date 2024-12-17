import { useEffect, useState } from "react";
import Movie from './Movie'

const RANDOM_MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&s=avengers&page=1"

export default function ListMovies ({testFunction}) {
    const [movies, setMovies] = useState([])

    useEffect (() => {
        fetchMovies();
    }, [])

    async function fetchMovies() {
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();
        setMovies (data.Search || []);
    }

    return (
        <div className="movieList" style={{borderRadius: "10px"}}>
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} testFunction={testFunction} />
            ))}
        </div>
    )
}