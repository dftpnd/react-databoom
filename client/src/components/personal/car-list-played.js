import React from 'react';
import CarRow from '../auction/car-row';
import store from '../services/store.service';
import auth from '../login/auth.service';

class CarList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {carList: []};

		var buyerId = auth.getUserId();

		store.getCarsPlayedByBuyer(buyerId).then((carlist) => {
				var carRows = [];
				for (var i = 0; i < carlist.length; i++) {
					carRows.push(<CarRow carData={carlist[i]} key={i} buyerId={buyerId}/>);//
				}

				if (carRows.length == 0) {
					carRows = (
						<div className="title">
							<h1>Нет ставок.</h1>
						</div>
					);
				}
				this.setState({carList: carRows});
			},
			(error) => {
				alert('Произошла ошибка при загрузке списка автомобилей. Текст ошибки: ' + JSON.stringify(error));
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
