import React from 'react';

const icon = require("./Images/SunnySpellsIcon.png"); 

export const WeatherIcon = props => {
    return (
        <div className="weatherIcon"> 
        <img src={icon} alt="SunnyIcon" />
        </div>
    )
}