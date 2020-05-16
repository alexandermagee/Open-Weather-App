import React from 'react';
import './ResultCard.css';
import {WeatherIcon} from './WeatherIcon';
import {WeatherDescription} from './WeatherDescription';

export class ResultCard extends React.Component {




    render() {
    return (
        <section className="resultCardHolder">
        <div className="resultCard">
        <WeatherIcon
        retrievedData={this.props.retrievedData}
        loaded={this.props.loaded} 
        />
        <WeatherDescription 
        retrievedData={this.props.retrievedData}
        loaded={this.props.loaded}
        />
        </div>
        </section>
    )
    }
}