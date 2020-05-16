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
            city: "London",
            retrievedData: null,
            loaded: false
        }
    }

    fetchData = () => {

        const APIKey = "8a3a9234c4801b4a36d5bd9181cfd895";
        const city=this.state.city;
        let countryCode = Object.entries(countriesList).filter(pair => pair[1] === this.state.country)[0][0];
        
        const endpoint = (`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${APIKey}`)

                try{
                fetch(endpoint)
                .then(response => {
                    return response.json();
                }).then(result => {
                    if(result) {
                    this.setState({
                        retrievedData: result,
                        loaded: true
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
            />
        </div>
    )
    }

}