import React from 'react';
import addCarService from './add-car.service';

class CarForm extends React.Component {
	constructor() {
		super();
		this.state = {
			carModelOptions: [{name: 'corsa', value: 123}, {name: 'astra', value: 777}],
			disableCarModel: true,
			form: {
				carDescription: '0',
				carMake: '0',
				carModel: '0',
				carModification: '0',
				carRelease: '0',
				carEngineVolume: '0',
				carEngineForce: '0',
				carEngineType: '0',
				carDrive: '0',
				carTransmission: '0',
				carWheel: '0',
				carCondition: '0',
				carBroken: '0',
				carColor: '0',
				carMileage: '0',
				carPts: '0',
				carCause: '0',
				carFreePlaces: '0',
				carIssueDate: '0',
				carMasterCount: '0',
				carServiceBook: '0',
				carGuarantee: '0',
				carBuyRussia: '0',
				carKey: '0',
				carBus: '0',
				carSpeedometer: '0',
				carTyre: '0'
			}
		};


		this.nextPage = this.nextPage.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleCarMake = this.handleCarMake.bind(this);
	}


	nextPage(event) {
		const step = event.target.value;

		if (addCarService.checkStep(step)) {
			addCarService.setActiveStep(step);
			addCarService.updateRoute(step);
		}
	}

	handleChange(event) {
		var newState = {form: {}};
		newState.form[event.target.name] = event.target.value;
		this.setState(newState);

		if (!event.target.value) {

		}
	}

	handleCarMake(event) {

		setTimeout(()=> {
			this.setState({carModelOptions: [{name: 'golf', value: 321}, {name: 'jetta', value: 888}]});
			this.setState({disableCarModel: true});
		}, 2000);
		this.handleChange(event);
	}

	render() {
		return (
			<form className="index" onChange={this.formChange}>
				<h1 className="app-title">Шины и тормоза</h1>

				<div className="appearance-form__item">
					<label htmlFor="car-description-field">Описание автомобиля</label>
					  <textarea id="car-description-field" placeholder="Текст описания"
								value={this.state.form.carDescription}
								onChange={this.handleCarMake}
								className="custom-field custom-field__textarea"/>
				</div>

				<div className="appearance-form__item field-error">
					<label htmlFor="car-mark-field">Марка</label>
					<select id="car-mark-field" className="custom-field custom-field__select "
							onChange={this.handleCarMake}
							value={this.state.form.carMake}
							disabled={this.state.disableCarModel}>
						<option value="0">Выберите марку</option>
						<option>BMW</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-model-field">Модель</label>
					<select id="car-model-field" name="carModel" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carModel}>
						<option value="0">Выберите модель</option>
						{this.state.carModelOptions.map((option, i)=> {
							return (
								<option key={i} value={option.value}>
									{option.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-modification-field">Модификация</label>
					<select id="car-modification-field" name="carModification"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carModification}>
						<option value="0">Выберите модификацию</option>
						<option>01</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-release-field">Год выпуска</label>
					<select id="car-release-field" name="carRelease" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carRelease}>
						<option value="0">Выберите год выпуска</option>
						<option>2000</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-engine-volume-field">Двигатель, объем</label>
					<select id="car-engine-volume-field" name="carEngineVolume"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carEngineVolume}>
						<option value="0">Выберите двигатель и объем</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-engine-force-field">Двигатель, л.с.</label>
					<select id="car-engine-force-field" name="carEngineForce"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carEngineForce}>
						<option value="0">Выберите кол-во л.с.</option>
						<option>200</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label for="car-engine-type-field">Двигатель, тип</label>
					<select id="car-engine-type-field" name="carEngineType"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carEngineType}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-drive-unit-field">Привод</label>
					<select id="car-drive-unit-field" name="carDrive" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carDrive}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-transmission-field">Коробка передач</label>
					<select id="car-transmission-field" name="carTransmission"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carTransmission}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-wheel-field">Руль</label>
					<select id="car-wheel-field" name="carWheel" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carWheel}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-condition-field">Состояние</label>
					<select id="car-condition-field" name="carCondition" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carCondition}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-broken-field">Битый</label>
					<select id="car-broken-field" name="carBroken" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carBroken}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-color-field">Цвет</label>
					<select id="car-color-field" name="carColor" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carColor}>
						<option value="0">-</option>
						<option>type1</option>
						<option>type2</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-mileage-field">Пробег</label>
					<select id="car-mileage-field" name="carMileage" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carMileage}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-pts-field">ПТС</label>
					<select id="car-pts-field" name="carPts" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carPts}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-cause-field">Причина выдачи дубликата ПТС</label>
					<select id="car-cause-field" name="carCause" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carCause}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-free-places-field">Свободных мест в ПТС</label>
					<select id="car-free-places-field" name="carFreePlaces"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carFreePlaces}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-issue-date-field">Дата выдачи ПТС</label>
					<select id="car-issue-date-field" name="carIssueDate" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carIssueDate}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-master-count-field">Кол-во хозяев по ПТС</label>
					<select id="car-master-count-field" name="carMasterCount"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carMasterCount}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-service-book-field">Сервисная книжка</label>
					<select id="car-service-book-field" name="carServiceBook"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carServiceBook}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-guarantee-field">Авто на гарантии</label>
					<select id="car-guarantee-field" name="carGuarantee" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carGuarantee}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-buy-russia-field">Куплен в России</label>
					<select id="car-buy-russia-field" name="carBuyRussia" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carBuyRussia}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-key-count-field">Ключ(и) количество</label>
					<select id="car-key-count-field" name="carKey" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carKey}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-bus-field">Шины</label>
					<select id="car-bus-field" name="carBus" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carBus}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-speedometer-field">Спидометр</label>
					<select id="car-speedometer-field" name="carSpeedometer"
							className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carSpeedometer}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>
				<div className="appearance-form__item">
					<label htmlFor="car-tyre-size-field">Размер покрышки</label>
					<select id="car-tyre-size-field" name="carTyre" className="custom-field custom-field__select"
							onChange={this.handleChange}
							value={this.state.form.carTyre}>
						<option value="0">-</option>
						<option>type1</option>
					</select>
				</div>

				<div className="nav-buttons">
					<div></div>
					<button className="custom-btn" type="button" onClick={this.nextPage} value="exterior">
						Заполнить чеклист &#8594;
					</button>
				</div>
			</form>
		);
	}
}


export default CarForm;
