import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import core from '../../styles/core.styles';

function Welcome() { return (
  <div style={core.container}>
    <div style={core.textBox}>
      <h1 style={core.h1}>Hello...</h1>
      <p style={core.p}>
        First please fix these styles to center the text in the middle of the screen with as little changes as possible.
      </p>
      <p style={core.p}>
         Most of the styles already exist and just need modifying. 
        <br />
        <br />
        <br />
      </p>
      <p style={core.p}>
        Once you have fixed the styles, try navigating to 
        <a style={core.a} href="/app"> /app </a>
        to begin your test.
      </p>
    </div>
  </div>
);}

export default Radium(Welcome);
