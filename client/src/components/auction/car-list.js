import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';
import auth from '../login/auth.service';

class CarList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {carList: []};
		var buyerId = auth.getUserId();

		var showBidDialog = this.props['showBidDialog'];

		store.getAuctionCars(buyerId).done((data) => {
			var cars = [];
			for (var i = 0; i < data.length; i++) {
				var car = data[i];
				cars.push(<CarRow carData={car} key={i} buyerId={buyerId} showBidDialog={car.id == showBidDialog}/>);//
			}

			if (cars.length == 0) {
				cars = (
					<div className="title">
						<h1>На данный момент на аукцион не выставлено ни одного автомобиля.</h1>
					</div>
				);
			}

			this.setState({carList: cars});

		}).fail(function () {
			//TODO
		})
	}

	render() {
		return (
			<div className="car-list">
				{this.state.carList}
			</div>
		);
	}
}

CarList.defaultProps = {};

export default CarList;
