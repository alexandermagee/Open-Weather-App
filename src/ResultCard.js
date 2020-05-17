import React from 'react';
import './ResultCard.css';
import {WeatherIcon} from './WeatherIcon';
import {WeatherDescription} from './WeatherDescription';
import {WeatherHeading} from './WeatherHeading';

export const ResultCard = props => {

   
    return (
        (!props.loaded) ?

        (props.error ? <h2 className="noResults">No results for <span>{props.lastAttempt}</span> in {props.country}</h2> : null) :

        <section className="resultCardHolder">
        <div className="resultCard">
        <WeatherHeading 
        retrievedData={props.retrievedData}
        />
        <WeatherIcon
        retrievedData={props.retrievedData}
        loaded={props.loaded} 
        />
        <WeatherDescription 
        retrievedData={props.retrievedData}
        loaded={props.loaded}
        />
        </div>
        </section>
    )
    }
