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
            retrievedData: []
        }
    }

    fetchData = () => {

        const APIKey = "8a3a9234c4801b4a36d5bd9181cfd895";
        const city=this.state.city;
        let countryCode = Object.entries(countriesList).filter(pair => pair[1] === this.state.country)[0][0];
        

        const endpoint = (`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${APIKey}`)
        console.log(endpoint);
       /* const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("api.openweathermap.org/data/2.5/weather?q=london,GB&appid=8a3a9234c4801b4a36d5bd9181cfd895", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

          console.log(endpoint)

         
          fetch(endpoint, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); */

                try{
                fetch(endpoint
                    /*"https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=Brighton,GB&appid=8a3a9234c4801b4a36d5bd9181cfd895"*//*,{
                    headers : { 
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                     }
              
                    }*/)
                .then(response => {
                    return response.json();
                }).then(result => {
                    /*console.log(result)*/
                    this.setState({
                        retrievedData: result
                    })
                    console.log(/*this.state.retrievedData.weather[0]*/
                        this.state.retrievedData.main)
                }).catch(e => console.log(e))} catch(e){
                    console.log(e);
                }
    }

    updateUserInput = (dataType,data) => {
        console.log(dataType)
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

            <ResultCard />
        </div>
    )
    }

}