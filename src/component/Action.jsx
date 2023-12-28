import React from 'react'
import styled from 'styled-components'
import {Swiper, SwiperSlide} from 'swiper/react'; 
import { Navigation, Pagination } from 'swiper/modules';

function Action() {

    return (
        <div>
            <Moviecontainer>
                <Movietitle>액션</Movietitle>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    loop
                    modules={{Navigation, Pagination}}
                    navigation
                    pagination
                >
                    <Moviewrapper>
                        {actionData.results && actionData.results.map((el,index)=>(
                            <SwiperSlide>

                            </SwiperSlide>
                        ))}
                    </Moviewrapper>
                </Swiper>
            </Moviecontainer>
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