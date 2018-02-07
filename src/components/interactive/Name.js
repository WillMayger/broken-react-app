import React from 'react';
import PropTypes from 'prop-types';

const Name = props => (
  <div style={core.component}>
    <h2>What is your name?</h2>
    <input type="text" value={props.value} onChange={props.onChange()} />
  </div>
);

Name.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Name;
