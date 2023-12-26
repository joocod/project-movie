import React from 'react'
import { RiNetflixFill } from "react-icons/ri";
import {Link} from "react-router-dom";
import styled from 'styled-components';
import Navigation from './Navigation';

function Header() {
    return (
        <div>
            <Headercontainer>
                <h1 className='logo'><Link to='/'><RiNetflixFill/></Link></h1>
                <Navigation/>
            </Headercontainer>
        </div>
    )
}

export default Header

const Headercontainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    padding: 16px 32px;
    box-sizing: border-box;
    background: black;
    width: 100%;
    gap: 48px;
    .logo{
        font-size: 30px;
        a{
            display: flex;
            align-items: center;
            path{
                color: red;
            }
        }
    }
`