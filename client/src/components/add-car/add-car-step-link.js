import React from 'react';

var classNames = require('classnames');

import addCarService from './add-car.service';


class AddCarStepLink extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: (this.props.step === addCarService.getActiveStep())
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.updateState(this.props.step);
	}


	componentWillReceiveProps() {
		this.state.isActive = this.props.step === addCarService.getActiveStep();
	}


	render() {
		var btnClass = classNames({active: this.state.isActive});
		return (
			<button className={btnClass} disabled={this.state.isActive}
					onClick={this.handleClick}>{addCarService.getLabel(this.props.step)}</button>
		);
	}
}

export default AddCarStepLink;
