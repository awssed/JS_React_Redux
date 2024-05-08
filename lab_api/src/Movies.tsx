import {moviesAPI, MovieType} from "./apu_funs";
import React, {useEffect, useState} from "react";
import Movie from "./Movie"

type MoviesPropsType={
    type:string,
    title:string;
}
 function Movies(props:MoviesPropsType)
{
    const [films, setFilms] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await moviesAPI.getMovies(props.title, props.type);
            setFilms(movies);
        }

        fetchMovies();
    }, [props.title, props.type]);
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
