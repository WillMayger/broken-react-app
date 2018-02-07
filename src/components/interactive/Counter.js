import React from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };

    this.add = props.add;
    this.subtract = props.subtract;
  }

  render() {
    return (
      <div style={core.component}>
    <div>
      <h3>This counter needs to be able to add, and subtract the index.</h3>
  
      <div>
        <h3>Counter</h3>
        <h3>{this.state.value}</h3>
          <button onClick={this.add()}> Add </button>
          <button onClick={this.subtract()}> Subtract </button>
      </div>
      </div>
      </div>
      <div>
      </div>
    );
  }
} 

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  add: PropTypes.number.isRequired,
  minus: PropTypes.number.isRequired,
};

export default Counter;
