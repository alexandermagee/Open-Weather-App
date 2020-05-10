import React from 'react';
import './ResultCard.css';
import {WeatherIcon} from './WeatherIcon';
import {WeatherDescription} from './WeatherDescription';

export const ResultCard = props => {
    return (
        <section className="resultCardHolder">
        <div className="resultCard">
        <WeatherIcon />
        <WeatherDescription />
        </div>
        </section>
    )
}