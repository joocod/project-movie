import axios from "axios";

const API_KEY = '82776dd4e021405937c471b1f995902b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';

export const fetchAction = (data)=>{
    return {
        type : FETCH_ACTION_MOVIES,
        data
    }
}

export const fetchActionmovies = ()=>{
    return(dispatch)=>{
        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
        .then((res)=>{
            dispatch(fetchAction(res.data))
        })
    }
}