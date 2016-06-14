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

		//<select name="car_brand" id="car_brand" style="width: 130px;">
		//	<option>Все марки</option>
		//	<option value="107">Acura</option>
		//	<option value="54">Alfa Romeo</option>
		//	<option value="40">Aston Martin</option>
		//	<option value="33">Audi</option>
		//	<option value="21">Bentley</option>
		//	<option value="42">BMW</option>
		//	<option value="126">Brilliance</option>
		//	<option value="32">Cadillac</option>
		//	<option value="121">Changan</option>
		//	<option value="1">Chery</option>
		//	<option value="43">Chevrolet</option>
		//	<option value="28">Chrysler</option>
		//	<option value="44">Citroen</option>
		//	<option value="123">Datsun</option>
		//	<option value="95">Dongfeng</option>
		//	<option value="211">DS</option>
		//	<option value="29">FAW</option>
		//	<option value="31">Ferrari</option>
		//	<option value="46">FIAT</option>
		//	<option value="39">Ford</option>
		//	<option value="55">Geely</option>
		//	<option value="56">Great Wall</option>
		//	<option value="85">Haima</option>
		//	<option value="132">Haval</option>
		//	<option value="47">Honda</option>
		//	<option value="48" selected="selected">Hyundai</option>
		//	<option value="49">Infiniti</option>
		//	<option value="58">Jaguar</option>
		//	<option value="59">Jeep</option>
		//	<option value="60">KIA</option>
		//	<option value="27">Lada</option>
		//	<option value="61">Lamborghini</option>
		//	<option value="62">Land Rover</option>
		//	<option value="53">Lexus</option>
		//	<option value="63">LIFAN</option>
		//	<option value="65">Maserati</option>
		//	<option value="41">Mazda</option>
		//	<option value="82">Mercedes-Benz</option>
		//	<option value="68">MINI</option>
		//	<option value="69">Mitsubishi</option>
		//	<option value="35">Nissan</option>
		//	<option value="70">Peugeot</option>
		//	<option value="71">Porsche</option>
		//	<option value="205">Ravon</option>
		//	<option value="72">Renault</option>
		//	<option value="73">Rolls-Royce</option>
		//	<option value="51">Skoda</option>
		//	<option value="103">Smart</option>
		//	<option value="76">SsangYong</option>
		//	<option value="37">Subaru</option>
		//	<option value="30">Suzuki</option>
		//	<option value="26">Toyota</option>
		//	<option value="77">Volkswagen</option>
		//	<option value="78">Volvo</option>
		//	<option value="209">Zotye</option>
		//	<option value="81">УАЗ</option>
		//</select>

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

		data['auction_step'] = 1;
		data['auction_start'] = new Date();
		data['auction_time_mins'] = localStorage.getItem('auction_time_mins');

		return db.store.save('car', data);
	}
}

export default new AddCarService();
