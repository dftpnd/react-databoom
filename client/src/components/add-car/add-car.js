import React from 'react';

import AddCarStepLink from './add-car-step-link';
import Appearance from './appearance';
import CarForm from './car-form';
import Engine from './engine';
import Equipment from './equipment';
import Exterior from './exterior';
import ExteriorFunctional from './exterior-functional';
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

	componentWillMount() {
		const currentStep = this.props.params.stepName || 'appearance';
		this.updateStepState(currentStep);
	}

	updateStepState(newState) {
		addCarService.setActiveStep(newState);
		addCarService.updateRoute(newState);
	}

	render() {
		var state = addCarService.getActiveStep();

		var viewMap = {
			appearance: <Appearance/>,
			'car-form': <CarForm/>,
			'engine': <Engine/>,
			'equipment': <Equipment/>,
			'exterior': <Exterior/>,
			'exterior-functional': <ExteriorFunctional/>,
			'interior': <Interior/>,
			'interior-functional': <InteriorFunctional/>,
			'suspension': <Suspension/>,
			'test-drive': <TestDrive/>,
			'tires-and-brakes': <TiresAndBrakes/>
		};

		var view = viewMap[state];

		return (
			<div className="index">
				<nav className="add-car-menu">
					<AddCarStepLink step="car-form" />
					<AddCarStepLink step="exterior" />
					<AddCarStepLink step="exterior-functional" />
					<AddCarStepLink step="interior" />
					<AddCarStepLink step="interior-functional" />
					<AddCarStepLink step="tires-and-brakes" />
					<AddCarStepLink step="engine" />
					<AddCarStepLink step="suspension" />
					<AddCarStepLink step="test-drive" />
					<AddCarStepLink step="equipment" />
				</nav>
				{view}
			</div>
		);
	}
}
AddCar.defaultProps = {};

export default AddCar;
