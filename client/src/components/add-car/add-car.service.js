import { browserHistory } from 'react-router';
import  db  from '../services/db.service';
let instance = null;

class AddCarService {
	constructor() {
		if (!instance) {
			instance = this;
		}

		const defaultStep = 'car-form';

		this.activeStep = defaultStep;

		this.steps = {
			'car-form': {
				label: 'автомобиль'
			},
			engine: {
				label: 'Двигатель'
			},
			equipment: {
				label: 'комплектация'
			},
			exterior: {
				label: 'внешний вид'
			},
			'exterior-functional': {
				label: 'внешний функционал'
			},
			'interior': {
				label: 'салон'
			},
			'interior-functional': {
				label: 'функционал салона'
			},
			suspension: {
				label: 'подвеска'
			},
			'test-drive': {
				label: 'тест драйв'
			},
			'tires-and-brakes': {
				label: 'шины и тормоза'
			}
		};

		this.carMake = {};


		this.getLabel = this.getLabel.bind(this);
		this.setActiveStep = this.setActiveStep.bind(this);
		this.checkStep = this.checkStep.bind(this);
		this.save = this.save.bind(this);

		return instance;
	}

	getLabel(step) {
		if (!this.steps[step]) {
			throw new Error(`Label @${step}@ not find`);
		}
		return this.steps[step].label;
	}

	checkStep() {
		return true;
	}

	getActiveStep() {
		return this.activeStep;
	}

	setActiveStep(step) {
		return this.activeStep = step;
	}

	updateRoute(step) {
		browserHistory.push('/add-car/' + step);
	}

	getAvailableStep() {
		var availableStep = 'engine';
		return '/add-car/' + availableStep;
	}

	save() {
		var data = {};
		var formData = [
			JSON.parse(localStorage.getItem('equipmentState')),
			JSON.parse(localStorage.getItem('testDriveState')),
			JSON.parse(localStorage.getItem('suspensionState')),
			JSON.parse(localStorage.getItem('engineState')),
			JSON.parse(localStorage.getItem('tiresAndBrakesState')),
			JSON.parse(localStorage.getItem('interiorFunctionalState')),
			JSON.parse(localStorage.getItem('interiorState')),
			JSON.parse(localStorage.getItem('exteriorFunctionalState')),
			JSON.parse(localStorage.getItem('exteriorState')),
			JSON.parse(localStorage.getItem('exteriorState')),
			JSON.parse(localStorage.getItem('carFormState'))
		];

		formData.forEach((fields)=> {
			for (var name in fields) {
				if (fields.hasOwnProperty(name)) {
					data[name] = fields[name];
				}
			}
		});

		data['fieldComments'] = JSON.parse(localStorage.getItem('fieldComments'));
		data['auction_step'] = 1;
		data['auction_start'] = new Date();
		data['auction_time_mins'] = localStorage.getItem('auction_time_mins');

		return db.store.save('car', data);
	}
}

export default new AddCarService();
