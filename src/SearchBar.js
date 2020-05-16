import React from 'react';
import './SearchBar.css';
import {SearchInput} from './SearchInput';
import {SearchButton} from './SearchButton';

export const SearchBar = props => {
    return (
        <div className="searchBar">
        <SearchInput 
        country={props.country}
        city={props.city}
        updateUserInput={props.updateUserInput}
        />
        <SearchButton 
        fetchData={props.fetchData}
        />
        </div>
    )
}