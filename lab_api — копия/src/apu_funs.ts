import axios, {AxiosResponse} from "axios";

const API_KEY=process.env.REACT_APP_API_KEY
// export const moviesAPI={
//     getMovies(title:string,type:string)
//     {
//         return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}&type=${type}`)
//             .then(response=>response.json())
//             .then(data=>data.Search)
//     }
// }
export const instance=axios.create(
    {
        baseURL:'http://www.omdbapi.com/',
        withCredentials:true,
        headers:{
            'API_KEY':API_KEY
        }
    }
)
export const moviesAPI={
    getMovies(title:string,type:string)
    {
        return instance.get(`?s=${title}&type=${type}`).then((response: AxiosResponse<{ Search: MovieType[] }>) => {
            const data = response.data;
            return data.Search;
        });
    }
}

export interface MovieType {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}