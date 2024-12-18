import { Star, StarOutline } from "@mui/icons-material"
import "./MovieRating.css"
import { useState } from "react"

export default function MovieRating () {
    const [starRating, setStarRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const renderStars = () => {
        const stars = []
        for (let i=1; i<=10; i++) {
            stars.push(
                <span key={i} className="star"
                    onClick={ () => setStarRating(i)}
                    onMouseEnter={() => setHoverRating(i)}
                    onMouseLeave={() => setHoverRating(0)}
                >
                    {i <= (hoverRating || starRating) ? <Star /> : <StarOutline />}
                </span>
            )
        }
        return stars;
    }
    return (
        <div className="movieRating">
            <div className="stars">
                {renderStars()} {starRating}
            </div>
            {starRating > 0 ? <button>+Add to list</button> : ""}
        </div>
    )
}