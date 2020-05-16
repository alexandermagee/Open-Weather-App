import React from 'react';

export const WeatherDescription = props => {
    return (
        <div className="weatherDescription">
            { (!props.loaded) ? 
               null : 
               <article>
                <p>{props.retrievedData.weather[0].description}</p>
            <p>{Math.round(props.retrievedData.main.temp)}&#8451;</p>
                </article>
            }
        </div>
    )
}