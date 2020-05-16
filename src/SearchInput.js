import React, { useEffect } from 'react';
import {countriesList} from './CountryNamesCodes';

export const SearchInput = props => {

    const handleChange = e => {
        const dataType = e.target.id;
        const data = e.target.value;
        props.updateUserInput(dataType,data);
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
            />

            <select 
            id="country" 
            onChange={handleChange}
            > 
                {Object.values(countriesList).sort().map((country,i) =>{
            return <option value={country} key={i} id="country">{country}</option>}
            )}
            </select>
            
        </div>
    )
}
