import React from 'react';
import PropTypes from 'prop-types';



const Button = (props) => {
    function changeButtonText(text) {
        alert(text);

    
    }
    return(
        <button className='btn' onClick={() => changeButtonText(props.text)}>{props.text}</button>

    )
}

Button.defaultProps = {
    text: "NA"
};

Button.propTypes = { //needs default prop!
    text: PropTypes.string.isRequired
};

export default Button;