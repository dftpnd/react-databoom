import React from 'react';

import CarList from './car-list';

class Auction extends React.Component {
	render() {
		return (
      <CarList/> 
		);
	}
}

Auction.defaultProps = {};

export default Auction;
