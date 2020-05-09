import React from 'react';

const icon = require("./Images/SunnySpellsIcon.png"); 

export const WeatherIcon = props => {
    return (
        <img className="weatherIcon" src={icon} alt="SunnyIcon" />
    )
}