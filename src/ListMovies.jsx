import { useEffect, useState } from "react";
import Movie from './Movie'

export default function ListMovies ({movies, testFunction}) {
    return (
        <div className="movieList" style={{borderRadius: "10px"}}>
            {movies.map((movie, index) => (
                <Movie key={index} poster={movie.Poster} year={movie.Year} title={movie.Title} testFunction={testFunction} />
            ))}
        </div>
    )
}