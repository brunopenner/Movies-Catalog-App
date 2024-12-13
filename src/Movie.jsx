import { useState } from "react";

const RANDOM_MOVIE_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=bd0cf6aa&t=star+wars"

export default function Movie () {
    const [movie, setMovie] = useState({Title: ""})

    async function fetchMovie() {
        console.log("Initialising movie fetcher...")
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();
        setMovie (data);

        console.log ("response: ", response);
        console.log ("jsonResponse: ", jsonResponse);
        console.log ("randomMovie: ", randomMovie);
    }

    return (
        <div>
            <p>Movie Component</p>
            <button onClick={fetchMovie}>Get a Movie</button>
            <h1>{movie.Title}</h1>
        </div>
    )
}