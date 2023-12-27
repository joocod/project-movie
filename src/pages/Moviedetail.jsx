import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import React, { useEffect, useState } from 'react'

function Moviedetail() {
    const [movie, setMovie] = useState({});
    const {movieId} = useParams();

    useEffect(()=>{
        async function fetchdata(){
            const request = await axios.get(`/movie/${movieId}`);
            setMovie(request.data);
        }
        fetchdata()
    }, [movieId])
    
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
        </div>
    )
}

export default Moviedetail
