import React, { useEffect } from 'react';
import {countriesList} from './CountryNamesCodes';

export const SearchInput = props => {

    const handleChange = e => {
        const dataType = e.target.id;
        const data = e.target.value;
        props.updateUserInput(dataType,data);
    }

    const handleKeyPress = e => {
        if (e.key === "Enter"){
            props.fetchData()
        }
    }

    return (
        <div 
        className="searchInput"
        >
            <input 
            id="city" 
            type="text" 
            placeholder="City" 
            value={props.city} 
            onChange={handleChange}
            onKeyPress={handleKeyPress} 
            />

            <select 
            id="country" 
            onChange={handleChange}
            > 
                {Object.values(countriesList).sort().map((country,i) =>{
                    return(country === "United Kingdom") ?
                    <option value={country} key={i} id="country" selected="selected">{country}</option> :      
                    <option value={country} key={i} id="country">{country}</option>
            }
            )}
            </select>
            
        </div>
    )
}
