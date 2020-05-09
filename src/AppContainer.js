import React from 'react';
import './AppContainer.css';

import {Header} from './Header';
import {SearchBar} from './SearchBar';
import {ResultCard} from './ResultCard'

export class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
    return (
        <div className="mainContainer">
            <Header />
            <SearchBar />
            <ResultCard />
        </div>
    )
    }

}