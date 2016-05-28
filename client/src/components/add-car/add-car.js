import React from 'react';
import { browserHistory } from 'react-router';

import AddCarStepLink from './add-car-step-link';
import Appearance from './appearance';
import CarForm from './car-form';
import Engine from './engine';
import Equipment from './equipment';
import Exterior from './exterior';
import Interior from './interior';
import InteriorFunctional from './interior-functional';
import Suspension from './suspension';
import TestDrive from './test-drive';
import TiresAndBrakes from './tires-and-brakes';

import addCarService from './add-car.service';

class AddCar extends React.Component {
	constructor(props) {
		super(props);

		this.updateStepState = this.updateStepState.bind(this);
	}

	componentWillReceiveProps() {

	}


	componentWillMount() {
		const currentStep = this.props.params.stepName || 'appearance';
		this.updateStepState(currentStep);
	}

	updateStepState(newState) {
		addCarService.setActiveStep(newState);
		browserHistory.push('/add-car/' + newState);
	}

	render() {
		var view;
		var state = addCarService.getActiveStep();
		if (state === 'appearance') {
			view = <Appearance/>;
		}

		else if (state === 'car-form') {
			view = <CarForm/>;
		}

		else if (state === 'engine') {
			view = <Engine/>;
		}

		else if (state === 'equipment') {
			view = <Equipment/>;
		}

		else if (state === 'exterior') {
			view = <Exterior/>;
		}

		else if (state === 'Interior') {
			view = <Interior/>;
		}

		else if (state === 'interior-functional') {
			view = <InteriorFunctional/>;
		}

		else if (state === 'suspension') {
			view = <Suspension/>;
		}

		else if (state === 'test-drive') {
			view = <TestDrive/>;
		}

		else if (state === 'tires-and-brakes') {
			view = <TiresAndBrakes />;
		}
		return (
			<div className="index">
				<nav className="todo-temp-class">
					<AddCarStepLink step="appearance" updateState={this.updateStepState}/>
					<AddCarStepLink step="car-form" updateState={this.updateStepState}/>
					<AddCarStepLink step="engine" updateState={this.updateStepState}/>
					<AddCarStepLink step="equipment" updateState={this.updateStepState}/>
					<AddCarStepLink step="exterior" updateState={this.updateStepState}/>
					<AddCarStepLink step="interior" updateState={this.updateStepState}/>
					<AddCarStepLink step="interior-functional" updateState={this.updateStepState}/>
					<AddCarStepLink step="suspension" updateState={this.updateStepState}/>
					<AddCarStepLink step="test-drive" updateState={this.updateStepState}/>
					<AddCarStepLink step="tires-and-brakes" updateState={this.updateStepState}/>
				</nav>
				<hr/>
				{view}
			</div>
		);
	}
}
AddCar.defaultProps = {};

export default AddCar;
