import React, {useEffect, useState} from "react";
import {moviesAPI, MovieType} from "./apu_funs";
import Movies from "./Movies";
import Search from "./Search";
import {Route, Routes} from "react-router-dom";
import movie from "./Movie";
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
            <Movies type={"series"} title={"friends"}/>
        </main>
    </>
}
export {Main}
