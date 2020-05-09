import React from 'react';
import {WeatherIcon} from './WeatherIcon';
import {WeatherDescription} from './WeatherDescription';

export const ResultCard = props => {
    return (
        <div class="resultCard">
        <WeatherIcon />
        <WeatherDescription />
        </div>
    )
}