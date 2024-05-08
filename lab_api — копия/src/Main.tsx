import React, {useEffect, useState} from "react";
import {moviesAPI, MovieType} from "./apu_funs";
import Movies from "./Movies";
import Search from "./Search";
function Main()
{
    const [movies,setMovies]=useState<MovieType[]>([]);
    const[title,setTitle]=useState('matrix');

    const fetchMovies=async(_title:string,_type:string)=>{
        const response=await moviesAPI.getMovies(_title,_type);
        setMovies(response);
    }
    // useEffect(()=>{
    //     fetchMovies(title)
    // })
    return<>
        <main className="container content">
            <h1>Каталог фильмов</h1>
            <Search searchMovies={fetchMovies}/>
            <Movies films={movies}/>
        </main>
    </>
}
export {Main}
