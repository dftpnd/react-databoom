import React from 'react';
import addCarService from './add-car.service';
import PhotoUpload from '../photo-upload/photo-upload'
import Car from './car.service';

class CarForm extends React.Component {
	constructor(props) {
		super(props);
		this.car = new Car();
		//localStorage.clear();
		/**
		 * TODO нужно реализовать проверку объекта из локал сторадж по ключам,
		 * если он не будет совпадать то очистка сессии
		 *
		 */
		this.requiredFields = ['carMake', 'carModel'];

		this.yearIssue = (()=> {
			var list = [];
			const currentYear = parseInt(new Date().getFullYear(), 10);

			//const startYear = currentYear-50

			return list;
		})();

		console.log(this.yearIssue);

		const defaultState = {
			carModelOptions: [{name: 'corsa', value: 123}, {name: 'astra', value: 777}],
			disableCarModel: true,
			carMainPhoto: [],
			carDescription: '1',
			carMake: '',
			carModel: '1',
			carModification: '1',
			carRelease: '1',
			carEngineVolume: '1',
			carEngineForce: '1',
			carEngineType: '1',
			carDrive: '1',
			carTransmission: '1',
			carWheel: '1',
			carCondition: '1',
			carBroken: '1',
			carColor: '1',
			carMileage: '1',
			carPts: '1',
			carCause: '1',
			carFreePlaces: '1',
			carIssueDate: '1',
			carMasterCount: '1',
			carServiceBook: '1',
			carGuarantee: '1',
			carBuyRussia: '1',
			carKey: '1',
			carBus: '1',
			carSpeedometer: '1',
			carTyre: '1'
		};

		this.state = JSON.parse(localStorage.getItem('carFormState')) || defaultState;

		this.nextPage = this.nextPage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleCarMake = this.handleCarMake.bind(this);
		this.validateField = this.validateField.bind(this);
		this.validate = this.validate.bind(this);
		this.addPhoto = this.addPhoto.bind(this);
		this.deletePhoto = this.deletePhoto.bind(this);
	}

	addPhoto(elementName, promise) {
		promise.done((data)=> {
			this.setState({carMainPhoto: this.state.carMainPhoto.concat({filename: data.filename})});
		});
	}

	deletePhoto(filename) {
		var index = null;
		this.state.carMainPhoto.map((file, i)=> {
			if (file.filename === filename)
				return index = i;
		});

		if (index === null) {
			alert('Фотография не найдена!');
			return;
		}
		this.state.carMainPhoto.splice(index, 1);

		this.setState({carMainPhoto: this.state.carMainPhoto});
	}

	nextPage(event) {
		const step = event.target.value;

		if (this.validate() && addCarService.checkStep(step)) {
			addCarService.setActiveStep(step);
			addCarService.updateRoute(step);
		}
	}

	handleChange(event) {
		if (!event.target.name) {
			throw new Error('Input name required');
		}
		const newState = {[event.target.name]: event.target.value};
		this.setState(newState);
	}

	validate() {
		let matches = 0;
		this.requiredFields.forEach((fieldName)=> {
			if (this.state[fieldName]) ++matches;
		});
		return this.requiredFields.length === matches;
	}

	validateField(field) {
		return this.state[field];
	}

	validateForm(field) {
		return !!this.state[field];
	}

	handleCarMake(event) {
		this.handleChange(event);

		/**
		 * todo
		 */
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('carFormState', JSON.stringify(nextProps));
	}

	render() {
		return (
			<form className="index" onChange={this.formChange}>
				<h1 className="app-title">Ввод данных автомобиля</h1>

				<div className="appearance-form__item">
					<label htmlFor="car-description-field">Описание автомобиля</label>
					  <textarea id="car-description-field" placeholder="Текст описания"
								value={this.state.carDescription}
								onChange={this.handleCarMake}
								className="custom-field custom-field__textarea"/>
				</div>

				<div className="appearance-form__item">
					<label htmlFor="car-mark-field">Марка</label>
					<select id="car-mark-field" name="carMake" className="custom-field custom-field__select "
							onChange={this.handleCarMake}
							value={this.state.carMake}>
						<option value="">Выберите марку</option>
						{this.car.get().map((car, i)=> {
							return <option value={car.name} key={i}>{car.name}</option>;
						})}
					</select>

					{(() => {
						if (!this.validateField('carMake')) {
							return <div className="field-error"></div>;
						}
					})()}

				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-model-field">Модель</label>
					<select id="car-model-field" name="carModel" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carModel}>
						<option value="">Выберите модель</option>

						{this.car.get().map((car)=> {
							if (car.name === this.state.carMake) {
								return car.models.map((model, i)=> {
									return <option value={model.name} key={i}>{model.name}</option>;
								})
							}
						})}

					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-modification-field">Модификация</label>
					<select id="car-modification-field" name="carModification"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carModification}>
						<option value="">Выберите модификацию</option>
						<option value="1">01</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-release-field">Год выпуска</label>
					<input type="text" id="car-release-field" name="carRelease"
						   className="custom-field custom-field__input"
						   onChange={this.handleChange}
						   value={this.state.carRelease}/>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-engine-volume-field">Двигатель, объем</label>
					<select id="car-engine-volume-field" name="carEngineVolume"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carEngineVolume}>
						<option value="">Выберите двигатель и объем</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-engine-force-field">Двигатель, л.с.</label>
					<input type="text" id="car-engine-force-field" name="carEngineForce"
						   className="custom-field custom-field__input"
						   onChange={this.handleChange}
						   value={this.state.carEngineForce}/>
				</div>
				<div className="appearance-form__item">
					<label for="car-engine-type-field">Двигатель, тип</label>
					<select id="car-engine-type-field" name="carEngineType"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carEngineType}>
						<option value="">-</option>
						<option value="1">дизельный</option>
						<option value="2">безиновый</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-drive-unit-field">Привод</label>
					<select id="car-drive-unit-field" name="carDrive" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carDrive}>
						<option value="">-</option>
						<option value="1">передний</option>
						<option value="2">задний</option>
						<option value="3">полный</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-transmission-field">Коробка передач</label>
					<select id="car-transmission-field" name="carTransmission"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carTransmission}>
						<option value="">-</option>
						<option value="1">МТ</option>
						<option value="1">АТ</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-wheel-field">Руль</label>
					<select id="car-wheel-field" name="carWheel" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carWheel}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-condition-field">Состояние</label>
					<select id="car-condition-field" name="carCondition" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carCondition}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-broken-field">Битый</label>
					<select id="car-broken-field" name="carBroken" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carBroken}>
						<option value="0">нет</option>
						<option value="1">да</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-color-field">Цвет</label>
					<select id="car-color-field" name="carColor" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carColor}>
						<option value="">-</option>
						<option value="white">белый</option>
						<option value="1">желтый</option>
						<option value="2">зеленый</option>
						<option value="3">синий</option>
						<option value="4">красный</option>
						<option value="5">коричневый</option>
						<option value="6">черный</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-mileage-field">Пробег</label>
					<input type="text" id="car-engine-force-field" name="carMileage"
						   className="custom-field custom-field__input"
						   onChange={this.handleChange}
						   value={this.state.carMileage}/>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-pts-field">ПТС</label>
					<select id="car-pts-field" name="carPts" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carPts}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-cause-field">Причина выдачи дубликата ПТС</label>
					<select id="car-cause-field" name="carCause" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carCause}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-free-places-field">Свободных мест в ПТС</label>
					<select id="car-free-places-field" name="carFreePlaces"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carFreePlaces}>
						<option value="">-</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-issue-date-field">Дата выдачи ПТС</label>
					<select id="car-issue-date-field" name="carIssueDate" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carIssueDate}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-master-count-field">Кол-во хозяев по ПТС</label>
					<select id="car-master-count-field" name="carMasterCount"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carMasterCount}>
						<option value="">-</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-service-book-field">Сервисная книжка</label>
					<select id="car-service-book-field" name="carServiceBook"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carServiceBook}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-guarantee-field">Авто на гарантии</label>
					<select id="car-guarantee-field" name="carGuarantee" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carGuarantee}>
						<option value="">нет</option>
						<option value="1">да</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-buy-russia-field">Куплен в России</label>
					<select id="car-buy-russia-field" name="carBuyRussia" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carBuyRussia}>
						<option value="1">да</option>
						<option value="0">нет</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-key-count-field">Ключ(и) количество</label>
					<select id="car-key-count-field" name="carKey" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carKey}>
						<option value="">-</option>
						<option value="1">1</option>
						<option value="1">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-bus-field">Шины</label>
					<select id="car-bus-field" name="carBus" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carBus}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-speedometer-field">Спидометр</label>
					<select id="car-speedometer-field" name="carSpeedometer"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carSpeedometer}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-tyre-size-field">Размер покрышки</label>
					<select id="car-tyre-size-field" name="carTyre" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.carTyre}>
						<option value="">-</option>
						<option value="1">type1</option>
					</select>
				</div>

				<hr/>
				<h5 className="add-car__sub-title">Основные фотографии</h5>
				<PhotoUpload photos={this.state.carMainPhoto}
							 uploadHandler={this.addPhoto}
							 removePhoto={this.deletePhoto}/>

				<nav className="nav-buttons">
					<div></div>
					<button className="custom-btn" type="button" onClick={this.nextPage} value="exterior"
							disabled={!this.validate()}>
						Заполнить чеклист &#8594;
					</button>
				</nav>
			</form>
		);
	}
}

export default CarForm;
