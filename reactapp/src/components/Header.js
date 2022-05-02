import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </header>
  )
}

Header.defaultProps = {
  title: "CheckMyWhaley!",
  description: "Help me check my Humpback Whale calls!"
}

Header.propTypes = { 
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default Header;
