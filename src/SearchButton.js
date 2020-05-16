import React from 'react';


export const SearchButton = props => { 
    
    const handleClick = () => {
        props.fetchData()
    }

    return (
    <button className="searchButton" onClick={handleClick}>&#8594;</button>
    )
}