import React from 'react';
import PropTypes from 'prop-types';

const convertDate = (string) => {
  var [dd, mm, yyyy] = string.split('/');
  return new Date();
}

const StringToDate = (props) => {
  var date = props.date;
  return (
    <div style={core.component}>
    <div>
      <div>
        <span>What is your Date Of Birth? (please use format "DD/MM/YYYY")</span>
        <input type="text" onChange={props.onChange()} value={date} />
      </div>
    </div>
  );
};

StringToDate.defaultProps = {
  date: '25/12/2018',
};

StringToDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default StringToDate;
