import React from 'react';
import './AppContainer.css';

import {countriesList} from './CountryNamesCodes';

import {Header} from './Header';
import {SearchBar} from './SearchBar';
import {ResultCard} from './ResultCard'

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            country: "United Kingdom",
            city: "",
            retrievedData: null,
            loaded: false,
            error: false,
            lastAttempt: null
        }
    }

    fetchData = () => {

        const APIKey = "5b9b737fd9dde405c7deb8cef20c3b9b";
        const city=this.state.city;
        let countryCode = Object.entries(countriesList).filter(pair => pair[1] === this.state.country)[0][0];
        
        const endpoint = (`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${APIKey}`)

                try{
                fetch(endpoint)
                .then(response => {
                    if (response.ok){
                    return response.json();
                    } else {
                        this.setState({
                            loaded: false,
                            error: true,
                            lastAttempt: this.state.city
                        })
                        throw new Error('Something went wrong!')
                    }
                }).then(result => {
                    if(result) {
                    this.setState({
                        retrievedData: result,
                        loaded: true,
                        lastAttempt: this.state.city
                    })
                }
                }).catch(e => console.log(e))} catch(e){
                    console.log(e);
                }
    }

    updateUserInput = (dataType,data) => {
        this.setState({
                [dataType] : data
            })
    }

    render(){
    return (
        <div className="mainContainer">
            <Header />

            <SearchBar 
            fetchData = {this.fetchData}
            updateUserInput={this.updateUserInput}
            country={this.state.country}
            city={this.state.city}
            />

            <ResultCard 
            retrievedData={this.state.retrievedData}
            loaded={this.state.loaded}
            error={this.state.error}
            country={this.state.country}
            city={this.state.city}
            lastAttempt={this.state.lastAttempt}
            />
        </div>
    )
    }

}