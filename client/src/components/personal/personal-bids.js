import React from 'react';

import CarList from './car-list-played';

class PersonalBids extends React.Component {
  render() {
    return (
      <div className="limiter wrapper">
        <CarList/>
      </div>
    );
  }
}

PersonalBids.defaultProps = {};

export default PersonalBids;
