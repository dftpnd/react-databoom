import React from 'react';

import CarList from './car-list';

class Auction extends React.Component {
	render() {
		return (
      <div className="limiter wrapper">
      		<CarList/>
      </div>
		);
	}
}

Auction.defaultProps = {};

export default Auction;
