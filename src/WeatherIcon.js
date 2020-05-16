import React from 'react';

export const WeatherIcon = props => {

    return (
        <div className="weatherIcon">
        {(!props.loaded) ? 
               null :
               <img src={(`http://openweathermap.org/img/wn/${props.retrievedData.weather[0].icon}@2x.png`)} />}
        </div>
    )
}