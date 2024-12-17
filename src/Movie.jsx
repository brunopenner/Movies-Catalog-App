import "./Movie.css"

export default function Movie ({poster, year, title, testFunction}) {
    return (
        <div className="Movie">
            <img src={poster} alt={title} />
            <div className="movieContent">
                <h2 onClick={() => testFunction({title})} style={{cursor: "pointer"}}>{title}</h2>
                <p>📅 {year}</p>
            </div>
        </div>
    )
}