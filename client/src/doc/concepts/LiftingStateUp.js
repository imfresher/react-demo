import React from 'react';

class TemperatureInput extends React.Component {
  constructor(props) {
    super(this);
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TemperatureInput />
      </div>
    );
  }
}

export default Calculator;
