import React from 'react'
import { BiSearch } from "react-icons/bi";
import styled from 'styled-components';

function Search() {
    return (
        <>
            <SearchForm>
                <button className='search-btn'>
                    <BiSearch/>
                </button>
            </SearchForm>
        </>
    )
}

export default Search

const SearchForm = styled.form`
    display: flex;
    position: fixed;
    top: 15px;
    right: 30px;
    transition: 500ms;
    width: 30px;
    z-index: 11;
    &.on{
        border: solid 1px #ffffff;
        transition: 500ms;
        width: 240px;
        border-radius: 4px;
    }
    .search-btn{
        color: #ffffff;
        font-size: 30px;
        display: flex;
        align-items: center;
    }
`