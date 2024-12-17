import { useEffect, useState } from "react";
import "./MovieInternal.css"
import MovieRating from "./MovieRating";



export default function MovieInternal ({movieTitle}) {
    console.log("Movie Title variable: ",movieTitle)
    const [movie, setMovie] = useState([])
    
    useEffect (() => {
        console.log("1 - Movie Title: ", movieTitle)
        const MOVIE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&t=${movieTitle.title}`
        console.log("2 - Movie URL: ", MOVIE_URL)
        fetchMovie(MOVIE_URL);
    }, [movieTitle])

    async function fetchMovie(url) {
        const response = await fetch(url);
        const data = await response.json();
        setMovie (data);
        // console.log("Movie Internal: ", movie)
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