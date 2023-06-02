import React from 'react'
import '../styles/SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    return (

        <form classname='SearchArea' id="SearchArea" action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden"></span>
            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Enter City, State, or ZIP"
                name="s"
            />
            <button type="submit"><SearchIcon /></button>
        </form>
    )
}

export default SearchBar