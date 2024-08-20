import React from 'react';
import './SearchBar.css'

const SearchBar = (

) => {
    return (
        <form className='search-bar'>
            <button className='button' type='button'></button>
            
            <input className='search-field' type='text' placeholder='Procurar tarefa'></input>
        </form>
    );
};

export default SearchBar;