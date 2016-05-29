let instance = null;

class AddCarService {
	constructor() {
		if (!instance) {
			instance = this;
		}

		const defaultStep = 'appearance';

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
				label: 'внешний фид'
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


		this.getLabel = this.getLabel.bind(this);
		this.setActiveStep = this.setActiveStep.bind(this);
		this.checkStep = this.checkStep.bind(this);

		return instance;
	}

	getLabel(step) {
		if (!this.steps[step]) {
			throw new Error(`Label @${step}@ not find`);
		}
		return this.steps[step].label;
	}

	checkStep() {
		return true
	}

	getActiveStep() {
		return this.activeStep;
	}

	setActiveStep(step) {
		return this.activeStep = step;
	}

}

export default new AddCarService();