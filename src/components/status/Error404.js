import React from 'react';
import Radium from 'radium';
import core from '../../styles/core.styles';

function Error404() { return (
  <div style={core.container}>
    <div style={core.textBox}>
      <h1>404, Wrong Page</h1>
    </div>
  </div>
);}

export default Radium(Error404);
