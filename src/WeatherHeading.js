import React from 'react';

export const WeatherHeading = props => {
    return (
        <div className="resultCardHeading">
            <h3>{props.retrievedData.name}</h3>
            <p></p>
        </div>
    )
}