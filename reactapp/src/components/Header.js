import React from 'react';
import PropTypes from 'prop-types';


const Header = (props) => {
  return (
    <header className="header">
      <h1 style = {{color: 'red', backgroundColor: 'black'}}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "YO"
}

Header.propTypes = { 
  title: PropTypes.string.isRequired
}

export default Header;
