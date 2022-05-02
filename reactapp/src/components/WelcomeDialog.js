import React from 'react';
import PropTypes from 'prop-types';


const WelcomeDialog = () => {
    return (
        <div style = {dialogStyle} className = "container">
            <header className = 'header'>WELCOME! WHAT WOULD YOU LIKE TO DO?</header>
            <button className = 'btn'>Look at whale statistics</button>
            <button className = 'btn'>Mark some whales</button>
        
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