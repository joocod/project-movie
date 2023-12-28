import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Moviecard({movie, genreText}) {
    const navigate = useNavigate();

    const overviewEvent = ()=>{
        navigate(`movie/${movie.id}`)
    }

    return (
        <Movieitem onClick={overviewEvent}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}/>
            <Content className="addi-content">
                <p>{movie.title}</p>
                <div className='genres-wrapper'>
                    <span>{genreText}</span>
                </div>
            </Content>
        </Movieitem>
    )
}

export default Moviecard

const Movieitem = styled.div`
    flex-shrink: 0;
    position: relative;
    transition: 500ms;
    img{
        display: block;
        width: 100%;
    }
    &:hover{
        transform: scale(1.3);
        z-index: 10;
        .addi-content{
            opacity: 1;
            position: relative;
            z-index: 99;
        }
    }
`

const Content = styled.div`
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    background: gray;
    color: white;
    transition: 500ms;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    opacity: 0;
    p{
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-150%);
        font-size: 30px;
        opacity: 0;
        transition: 300ms 1000ms;
    }
`