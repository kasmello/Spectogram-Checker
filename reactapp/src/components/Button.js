import React from 'react';
import PropTypes from 'prop-types';



const Button = ({text}) => {
    function changeButtonText({text}) {
        alert({text});

    
    }
    return(
        <button className='btn' onClick = {changeButtonText}>{text}</button>

    )
}

Button.defaultProps = {
    text: "NA"
}

Button.propTypes = { //needs default prop!
    text: PropTypes.string.isRequired
}

export default Button;