import React from 'react';

import CarList from './car-list-bought';

class PersonalBought extends React.Component {
  render() {
    return (
      <div className="limiter wrapper">
        <CarList/>
      </div>
    );
  }
}

PersonalBought.defaultProps = {};

export default PersonalBought;
