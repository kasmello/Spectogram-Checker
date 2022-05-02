import React from 'react';
import PropTypes from 'prop-types';


const WelcomeDialog = () => {
    return (
        <div >
            <header>WELCOME! WHAT WOULD YOU LIKE TO DO?</header>
            <button>Look at whale statistics</button>
            <button>Mark some whales</button>
        
        </div>
    )
}

WelcomeDialog.PropTypes = {
    title: PropTypes.string.isRequired
}

export default WelcomeDialog;