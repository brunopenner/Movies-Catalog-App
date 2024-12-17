import { useEffect, useState } from "react";
import "./MovieInternal.css"
import MovieRating from "./MovieRating";

const MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&t=The+avengers"

export default function MovieInternal () {
    const [movie, setMovie] = useState([])
    
    useEffect (() => {
        fetchMovie();
    }, [])

    async function fetchMovie() {
        const response = await fetch(MOVIE_URL);
        const data = await response.json();
        setMovie (data);
        console.log("Movie Internal: ", movie)
    }

    return (
        <div className="movieInternal">
            <div className="movieCard">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="movieContent">
                    <h2>{movie.Title}</h2>
                    <p>{movie.Released} · {movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <p>⭐ {movie.imdbRating} IMDB rating</p>
                </div>
            </div>

            <div className="movieSynopsis">
                <MovieRating />
                <p>{movie.Plot}</p>
                <p>Starring {movie.Actors}</p>
                <p>Directed by {movie.Director}</p>
            </div>
        </div>

    )
}