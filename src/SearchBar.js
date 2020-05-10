import React from 'react';
import './SearchBar.css';
import {SearchInput} from './SearchInput';
import {SearchButton} from './SearchButton';

export const SearchBar = props => {
    return (
        <form className="searchBar">
        <SearchInput />
        <SearchButton />
        </form>
    )
}