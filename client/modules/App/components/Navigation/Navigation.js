import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Importing styles
import styles from './Navigation.css';

function Navigation(props, context) {
  return (
    <div>
      <center>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='/'>Posts</Link>
      </center>
    </div>
  );
}

Navigation.propTypes = {
};

export default Navigation;
