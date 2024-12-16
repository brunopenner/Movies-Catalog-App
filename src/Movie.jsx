import "./Movie.css"

export default function Movie ({movie}) {
    return (
        <div className="Movie">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="movieContent">
                <h2>{movie.Title}</h2>
                <p>📅 {movie.Year}</p>
            </div>
        </div>
    )
}