import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const WelcomeDialog = () => {
    return (
        <div style = {dialogStyle} className = "container">
            <header className = 'header'>WELCOME! WHAT WOULD YOU LIKE TO DO?</header>
            <Button text="Look at Whale Stats"/>
            <Button text="Check the Whales"/>
        
        </div>
    )
}


const dialogStyle = {
    color: "Crimson"
}

export default WelcomeDialog;