import React from 'react';
import './Header.css';
const logo = require('./Images/LogoMakr_2z5jad.png')

export const Header = () => {
return (
<div className="appHeader">
{/*<p>myWeather</p>*/}
<img src={logo} />
</div>
)
}