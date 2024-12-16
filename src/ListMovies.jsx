import { useEffect, useState } from "react";
import Movie from './Movie'

const RANDOM_MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&s=avengers&page=1"

export default function ListMovies () {
    const [movies, setMovies] = useState([])

    useEffect (() => {
        fetchMovies();
    }, [])

    async function fetchMovies() {
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();
        setMovies (data.Search || []);
        console.log("Movies: ", movies)
    }

    return (
        <div className="movieList">
            {movies.map((movie, index) => (
                <Movie key={index} movie={movie} />
            ))}
        </div>
    )
}