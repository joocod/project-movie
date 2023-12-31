import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchActionmovies } from '../store';
import styled from 'styled-components'
import Overview from './Overview';
import Moviecard from './Moviecard';
import { fetchGenres } from '../api/api';

import {Swiper, SwiperSlide} from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';                // swiper 기본 css 적용 import
import 'swiper/css/navigation';     // swiper 좌우 버튼 기본 css
import 'swiper/css/pagination';     // swiper dot-list 기본 css   


function Action() {    
    const [itemSelect, setItemSelect] = useState({});
    const [isClick, setIsClick] = useState(false);
    const [genres, setGenres] = useState({});
    
    const actionData = useSelector((state)=>state.action.movies, []) || []

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchActionmovies())
    }, [])

    useEffect(()=>{
        const fetchActiongenre = async ()=>{
            dispatch(fetchActionmovies());
            const genres = await fetchGenres();
            setGenres(genres);
        }
        fetchActiongenre();
    }, [])

    const getGenreText = (genreId)=>{
        return genreId.map((el)=>genres[el]).join()
    }

    const movieClickEvent = (movie)=>{
        setItemSelect(movie);
        setIsClick(true)
    }

    return (
        <div>
            <Moviecontainer>
                <Movietitle>액션</Movietitle>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    loop
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination
                >
                    <Moviewrapper>
                        {actionData.results && actionData.results.map((el,index)=>(
                            <SwiperSlide key={index}>
                                <Moviecard
                                    movie={el}
                                    genreText={getGenreText(el.genre_ids)}
                                    onclick={movieClickEvent}
                                >
                                </Moviecard>
                            </SwiperSlide>
                        ))}
                    </Moviewrapper>
                </Swiper>
            </Moviecontainer>
            {isClick && (
                <OverviewWrap isVisible = {!!itemSelect}>
                    <Overview/>
                </OverviewWrap>
            )}
        </div>
    )
}

export default Action

const Moviecontainer = styled.div`
    margin-bottom: 50px;
    position: relative;
    box-sizing: border-box;
`
const Movietitle = styled.div`
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
`
const Moviewrapper = styled.div`
    height: 200px;
`

const OverviewWrap = styled.div`
    
`