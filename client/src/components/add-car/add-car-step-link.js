import React from 'react';

var classNames = require('classnames');

import addCarService from './add-car.service';


class AddCarStepLink extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: (this.props.step === addCarService.activeStep)
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if(confirm('next ?')){
			this.props.updateState(this.props.step)
		}
	}


	componentWillReceiveProps() {
		this.state.isActive = this.props.step === addCarService.activeStep;
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
