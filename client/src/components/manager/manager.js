import React from 'react';

import CarList from './car-list';

class Manager extends React.Component {
  render() {
    return (
      <CarList/>
    );
  }
}

Manager.defaultProps = {};

export default Manager;
