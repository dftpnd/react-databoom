import { browserHistory } from 'react-router';
import React from 'react';

import CarList from './car-list';

class Auction extends React.Component {

	render() {
    var showBidDialog = null;
    if(localStorage['auction:showBidDialog'])
    {
      showBidDialog = localStorage['auction:showBidDialog'];
      delete localStorage['auction:showBidDialog'];
    }
    
		return (
      <div className="limiter wrapper">
      		<CarList showBidDialog={showBidDialog}/>
      </div>
		);
	}
}

Auction.defaultProps = {};

export default Auction;
