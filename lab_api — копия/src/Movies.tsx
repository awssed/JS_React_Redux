import {MovieType} from "./apu_funs";
import React from "react";
import Movie from "./Movie"

type MoviesPropsType={
    films:MovieType[];
}
function Movies(props:MoviesPropsType)
{
    const {films=[]}=props;
    if (films.length) {
        return <div className="movies">
            {films.map(film => (
                <Movie key={film.imdbID} {...film}/>
            ))
            }
        </div>
    } else {
        return <div className="movies">
            {<h4>Nothing found</h4>
            }
        </div>
    }
}
export default Movies
