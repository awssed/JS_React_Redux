import React from "react";
import {MovieType} from "./apu_funs";
function Movie(props:MovieType)
{
    const{
        Title:title,
        Year:year,
        imdbID:id,
        Type:type,
        Poster:poster
    }=props
    return<>
        <div id={id} className="card_small">
            <img className="card_image" src={poster}/>
            <div className="card-content">
                <p className="card-title">
                    {title}
                </p>
                <div className="card-description">
                    <span className="year"> {year}</span>
                    <span className="type">{type}</span>
                </div>
            </div>
        </div>
    </>
}
export default Movie