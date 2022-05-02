import React from 'react';
import PropTypes from 'prop-types';
import Button from './WelcomeDialog';


const WelcomeDialog = () => {
    return (
        <div style = {dialogStyle} className = "container">
            <header className = 'header'>WELCOME! WHAT WOULD YOU LIKE TO DO?</header>
            <Button text="Look at statistics" />
            <Button text="Check the whales" />
        
        </div>
    )
}

WelcomeDialog.defaultProps = {
    title: "YO"
}

WelcomeDialog.propTypes = { //needs default prop!
    title: PropTypes.string.isRequired
}

const dialogStyle = {
    color: "Crimson"
}

export default WelcomeDialog;