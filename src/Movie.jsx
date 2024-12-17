import "./Movie.css"

export default function Movie ({movie, testFunction}) {
    return (
        <div className="Movie">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movieContent">
                <h2 onClick={testFunction} style={{cursor: "pointer"}}>{movie.Title}</h2>
                <p>📅 {movie.Year}</p>
            </div>
        </div>
    )
}