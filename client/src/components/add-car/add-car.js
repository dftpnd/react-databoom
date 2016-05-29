import React from 'react';
import { browserHistory } from 'react-router';
import {Fieldset, Field, createValue} from 'react-forms'

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

		this.form = {
			firstName: 'John',
			lastName: 'asd'
		};

		const schema = {
			type: 'object',
			properties: {
				firstName: {type: 'string'},
				lastName: {type: 'string'}
			}
		};

		let formValue = createValue({
			value: this.form,
			onChange: this.onChange.bind(this),
			schema
		});

		this.state = {formValue};

		this.updateStepState = this.updateStepState.bind(this);
	}

	onChange(formValue) {
		this.setState({formValue});
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
		var state = addCarService.getActiveStep();

		var viewMap = {
			appearance: <Appearance/>,
			'car-form': <CarForm/>,
			'engine': <Engine/>,
			'equipment': <Equipment/>,
			'exterior': <Exterior/>,
			'interior': <Interior/>,
			'interior-functional': <Interior/>,
			'suspension': <Suspension/>,
			'test-drive': <TestDrive/>,
			'tires-and-brakes': <TiresAndBrakes/>
		};

		var view = viewMap[state];

		return (
			<div className="index">
				<nav className="add-car-menu">
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
				{view}
				<Fieldset formValue={this.state.formValue}>
					<Field select="firstName" label="First name"/>
					<Field select="lastName" label="Last name"/>
				</Fieldset>
			</div>
		);
	}
}
AddCar.defaultProps = {};

export default AddCar;
