import React from 'react';
import EquipmentView from '../add-car/equipment-view';

class CarViewEquipment extends React.Component {
	constructor(props){
		super(props);

		this.state = this.props.carData;
	}
	render() {
		return (
			<div className="equipment-view">
				<EquipmentView data={this.state} onlyView={true} />
			</div>
		);
	}
}

export default CarViewEquipment;
