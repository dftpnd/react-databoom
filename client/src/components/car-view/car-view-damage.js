import React from 'react';

class Damage extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props.carData);
	}
	render() {
		return (
			<div>
				Damage
			</div>
		);
	}
}

export default Damage;
