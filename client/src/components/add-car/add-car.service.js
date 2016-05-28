let instance = null;

class AddCarService {
	constructor() {
		if (!instance) {
			instance = this;
		}

		// to test whether we have singleton or not
		this.time = new Date();

		this.steps = {
			appearance: {
				label: 'appearance'
			},
			'car-form': {
				label: 'car-form'
			},
			engine: {
				label: 'engine'
			},
			equipment: {
				label: 'equipment'
			},
			exterior: {
				label: 'exterior'
			},
			'interior': {
				label: 'interior'
			},
			'interior-functional': {
				label: 'interior-functional'
			},
			suspension: {
				label: 'suspension'
			},
			'test-drive': {
				label: 'test-drive'
			},
			'tires-and-brakes': {
				label: 'tires-and-brakes'
			}
		};

		this.activeStep = 'appearance';

		this.getLabel = this.getLabel.bind(this);
		this.setActiveStep = this.setActiveStep.bind(this);

		return instance;
	}

	getLabel(step) {
		if (!this.steps[step]) {
			throw new Error(`Label @${step}@ not find`);
		}
		return this.steps[step].label;
	}

	setActiveStep(step) {
		this.activeStep = step;
	}

}

export default new AddCarService();