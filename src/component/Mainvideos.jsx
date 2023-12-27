import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components'

function Mainvideos() {
    const [movie, setMovie] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    const [showimg, setShowimg] = useState(null);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = async ()=>{

        try{
           
        }catch(error){
            console.error(error)
        }
    }

    const changeVideo = ()=>{
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&loop=1&mute=1&playlist=${videoKey}`;
        iframe.width = '100%';
        iframe.height = '100%';
        videoContainer.appendChild(iframe);
    }

    return (
        <>
            {showimg && movie &&(
                <MainvideoImg img={movie.backdrop_path}/>
            )}
                <MainvideoWrapper id='videoContainer'/>
        </>
    )
}

export default Mainvideos

const MainvideoImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 99;
    background: url(https://image.tmdb.org/t/p/original/${(props)=>props.img}) 
    no-repeat center center / cover;
`

const MainvideoWrapper = styled.div`
    width: 100%;
    height: 100vh;
`