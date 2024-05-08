import React, {useState} from "react";
import movie from "./Movie";
function Search(props:any)
{
    const {searchMovies=Function.prototype}=props;
    const [search,setSearch]=useState('');
    const [type,setType]=useState('');

    const handleKey=(event:any)=>{
        if(event.key==='Enter')
        {
            searchMovies(search,type);
        }
    }
    const handleFilter=(event:any)=>{
        setType(event.target.dataset.type);
        searchMovies(search,type);
    }
    return <div className="row">
        <div className="input-field">
            <input
                placeholder='search'
                type="search"
                className="validate"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button className="btn search-btn"
                    onClick={()=>{searchMovies(search,type)}}
            >
                Search
            </button>
            <div>
                <label className="movies-type">
                    <input className="aith-gap" name="type" type="radio" data-type=''
                           onChange={handleFilter} checked={type === ''}/>
                    <span>All</span>
                </label>
                <label className="movies-type">
                    <input className="aith-gap" name="type" type="radio" data-type='movie'
                           onChange={handleFilter} checked={type === 'movie'}/>
                    <span>Movies only</span>
                </label>
                <label className="movies-type">
                    <input className="aith-gap" name="type" type="radio" data-type='series'
                           onChange={handleFilter} checked={type === 'series'}/>
                    <span>Series only</span>
                </label>
            </div>
        </div>
    </div>
}
export default Search;