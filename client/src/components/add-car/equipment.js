import React from 'react';
import { browserHistory } from 'react-router';

class Equipment extends React.Component {
	constructor(props) {
		super(props);
		//localStorage.clear();
		const defaultState = {
			upholstery: 'cloth',
			interiorColor: 'dark',
			airbags: 'missing',
			climate: 'absent',
			powerWindows: 'hand',
			driverSeat: 'manualAdjustment',
			passengerSeat: 'manualAdjustment',
			adjustment: 'absent',
			security: [],
			equipment: [],
			comfort: [],
			exterior: [],
			multimedia: [],
			signaling: []
		};

		this.state = JSON.parse(localStorage.getItem('equipmentState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
		this.checkHandler = this.checkHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('equipmentState', JSON.stringify(nextProps));
	}

	formHandler() {

	}

	fieldHandler(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	checkHandler(event) {
		const checkList = this.state[event.target.name];
		var removeItem = null;

		checkList.forEach((value, index)=> {
			if (value === event.target.value) {
				return removeItem = index;
			}
		});

		if (removeItem !== null) {
			checkList.splice(removeItem, 1);
		} else {
			checkList.push(event.target.value);
		}
		this.setState({[event.target.name]: checkList})
	}

	publishCar() {
		var formData = {
			equipment: JSON.parse(localStorage.getItem('equipmentState')),
			testDrive: JSON.parse(localStorage.getItem('testDriveState')),
			suspension: JSON.parse(localStorage.getItem('suspensionState')),
			engine: JSON.parse(localStorage.getItem('engineState')),
			tiresAndBrakes: JSON.parse(localStorage.getItem('tiresAndBrakesState')),
			interiorFunctional: JSON.parse(localStorage.getItem('interiorFunctionalState')),
			interior: JSON.parse(localStorage.getItem('interiorState')),
			exteriorFunctional: JSON.parse(localStorage.getItem('exteriorFunctionalState')),
			exterior: JSON.parse(localStorage.getItem('exteriorState')),
			carForm: JSON.parse(localStorage.getItem('carFormState'))
		};

		console.info('Данные формы', formData);

		alert('Данные формы скоро будут записываться в базу, а пока можно посмотреть консоль с данными.');
		localStorage.clear();
		alert('Данные типо отправлениы');
		browserHistory.push('/add-car/car-form');
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Комплектация</h1>
				<div className="equipment-form">
					<div className="equipment-form__tab">
						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Интерьер</h3>
							<div className="equipment-form__item-child">
								<h3 className="equipment-form__item-child-title">Обивка салона</h3>
								<label className="equipment-form__label">
									<input type="radio" name="upholstery" value="cloth"
										   checked={this.state.upholstery === 'cloth'}
										   onChange={this.fieldHandler}/>ткань
								</label>
								<label className="equipment-form__label">
									<input type="radio" name="upholstery" value="velours"
										   checked={this.state.upholstery === 'velours'}
										   onChange={this.fieldHandler}/>велюр
								</label>
								<label className="equipment-form__label">
									<input type="radio" name="upholstery" value="leather"
										   checked={this.state.upholstery === 'leather'}
										   onChange={this.fieldHandler}/>кожа
								</label>
								<label className="equipment-form__label">
									<input type="radio" name="upholstery" value="combined"
										   checked={this.state.upholstery === 'combined'}
										   onChange={this.fieldHandler}/>комбинированный
								</label>
							</div>
							<div className="equipment-form__item-child">
								<h3 className="equipment-form__item-child-title">Цвет салона</h3>
								<label className="equipment-form__label">
									<input type="radio" name="interiorColor" value="dark"
										   checked={this.state.interiorColor === 'dark'}
										   onChange={this.fieldHandler}/>темный
								</label>
								<label className="equipment-form__label">
									<input type="radio" name="interiorColor" value="light"
										   checked={this.state.interiorColor === 'light'}
										   onChange={this.fieldHandler}/>светлый
								</label>
							</div>

							<div className="equipment-form__item">
								<h3 className="equipment-form__item-title">Экстерьер</h3>
								<label className="equipment-form__label">
									<input type="checkbox" name="exterior" value="sunroof"
										   checked={this.state.exterior.indexOf('sunroof') !== -1}
										   onChange={this.checkHandler}/>
									Люк на крыше
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="exterior" value="tintedGlass"
										   checked={this.state.exterior.indexOf('tintedGlass') !== -1}
										   onChange={this.checkHandler}/>
									Тонированные стекла
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="exterior" value="xenonHeadlights"
										   checked={this.state.exterior.indexOf('xenonHeadlights') !== -1}
										   onChange={this.checkHandler}/>
									Ксеноновые фары
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="exterior" value="adaptiveHeadlights"
										   checked={this.state.exterior.indexOf('adaptiveHeadlights') !== -1}
										   onChange={this.checkHandler}/>
									Адаптивные фары
								</label>
								<div className="equipment-form__label-select">
									<label className="equipment-form__label">
										<input type="checkbox" name="exterior" value="alloyWheels"
											   checked={this.state.exterior.indexOf('alloyWheels') !== -1}
											   onChange={this.checkHandler}/>
										Легкосплавные диски
									</label>
									<select>
										<option>12"</option>
										<option>13"</option>
									</select>
								</div>
							</div>

							<div className="equipment-form__item">
								<h3 className="equipment-form__item-title">Сигнализация</h3>
								<label className="equipment-form__label">
									<input type="checkbox" name="signaling" value="immobiliser"
										   checked={this.state.signaling.indexOf('immobiliser') !== -1}
										   onChange={this.checkHandler}/>
									Иммобиллайзер
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="signaling" value="established"
										   checked={this.state.signaling.indexOf('established') !== -1}
										   onChange={this.checkHandler}/>
									Штатная
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="signaling" value="feedback"
										   checked={this.state.signaling.indexOf('feedback') !== -1}
										   onChange={this.checkHandler}/>
									Обратная связь
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="signaling" value="remoteEngineStarter"
										   checked={this.state.signaling.indexOf('remoteEngineStarter') !== -1}
										   onChange={this.checkHandler}/>
									Дистанционный запуск двигателя
								</label>
							</div>

							<div className="equipment-form__item">
								<h3 className="equipment-form__item-title">Безопасность</h3>
								<label className="equipment-form__label">
									<input type="checkbox" name="security" value="ABS"
										   checked={this.state.security.indexOf('ABS') !== -1}
										   onChange={this.checkHandler}/>
									Антиблокировочная система (ABS)
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="security" value="ESP"
										   checked={this.state.security.indexOf('ESP') !== -1}
										   onChange={this.checkHandler}/>
									Система курсовой устойчивости (ESP)
								</label>
								<label className="equipment-form__label">
									<input type="checkbox" name="security" value="parktronic"
										   checked={this.state.security.indexOf('parktronic') !== -1}
										   onChange={this.checkHandler}/>
									Парктроник
								</label>


								<h3 className="equipment-form__item-child-title">Подушки безопасности</h3>
								<form>
									<label className="equipment-form__label">
										<input type="radio" name="airbags"
											   value="missing"
											   checked={this.state.airbags === 'missing'}
											   onChange={this.fieldHandler}/>
										отсутствуют
									</label>
									<label className="equipment-form__label">
										<input type="radio" name="airbags"
											   value="driverAndPassenger"
											   checked={this.state.airbags === 'driverAndPassenger'}
											   onChange={this.fieldHandler}/>
										водителя и пассажира
									</label>
									<label className="equipment-form__label">
										<input type="radio" name="airbags"
											   value="frontAndSide"
											   checked={this.state.airbags === 'frontAndSide'}
											   onChange={this.fieldHandler}/>
										передние и боковые
									</label>
								</form>
							</div>
						</div>
					</div>
					<div className="equipment-form__tab">
						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Функционально оборудование</h3>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="onBoardComputer"
									   checked={this.state.equipment.indexOf('onBoardComputer') !== -1}
									   onChange={this.checkHandler}/>
								Бортовой компьютер
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="gasBalloonEquipment"
									   checked={this.state.equipment.indexOf('gasBalloonEquipment') !== -1}
									   onChange={this.checkHandler}/>
								Газобаллонное оборудование
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="rainSensor"
									   checked={this.state.equipment.indexOf('rainSensor') !== -1}
									   onChange={this.checkHandler}/>
								Датчик дождя
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="lightSensor"
									   checked={this.state.equipment.indexOf('lightSensor') !== -1}
									   onChange={this.checkHandler}/>
								Датчик света
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="cruiseControl"
									   checked={this.state.equipment.indexOf('cruiseControl') !== -1}
									   onChange={this.checkHandler}/>
								Круиз-контроль
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="navigationSystem"
									   checked={this.state.equipment.indexOf('navigationSystem') !== -1}
									   onChange={this.checkHandler}/>
								Навигационная система
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="heatedMirrors"
									   checked={this.state.equipment.indexOf('heatedMirrors') !== -1}
									   onChange={this.checkHandler}/>
								Обогрев зеркал
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="headlightWasher"
									   checked={this.state.equipment.indexOf('headlightWasher') !== -1}
									   onChange={this.checkHandler}/>
								Омыватель фар
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="powerSteering"
									   checked={this.state.equipment.indexOf('powerSteering') !== -1}
									   onChange={this.checkHandler}/>
								Усилитель руля
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="centralLocking"
									   checked={this.state.equipment.indexOf('centralLocking') !== -1}
									   onChange={this.checkHandler}/>
								Центральный замок
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="equipment" value="airSuspension"
									   checked={this.state.equipment.indexOf('airSuspension') !== -1}
									   onChange={this.checkHandler}/>
								Пневмоподвеска
							</label>
						</div>

						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Комфорт</h3>
							<label className="equipment-form__label">
								<input type="checkbox" name="comfort" value="heatedSteering"
									   checked={this.state.comfort.indexOf('heatedSteering') !== -1}
									   onChange={this.checkHandler}/>
								Подогрев руля
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="comfort" value="seatHeating"
									   checked={this.state.comfort.indexOf('seatHeating') !== -1}
									   onChange={this.checkHandler}/>
								Обогрев сидений
							</label>

							<h3 className="equipment-form__item-child-title">Климат</h3>
							<label className="equipment-form__label">
								<input type="radio" name="climate" value="absent"
									   checked={this.state.climate === 'absent'}
									   onChange={this.fieldHandler}/>
								отсутствует
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="climate" value="airConditioning"
									   checked={this.state.climate === 'airConditioning'}
									   onChange={this.fieldHandler}/>
								кондиционер
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="climate" value="climateControl1"
									   checked={this.state.climate === 'climateControl1'}
									   onChange={this.fieldHandler}/>
								климат-контроль 1-зонный
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="climate" value="climateControl2"
									   checked={this.state.climate === 'climateControl2'}
									   onChange={this.fieldHandler}/>
								климат-контроль 2-зонный
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="climate" value="climateControl3"
									   checked={this.state.climate === 'climateControl3'}
									   onChange={this.fieldHandler}/>
								климат-контроль 3-зонный
							</label>
						</div>

						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Мультимедиа</h3>
							<label className="equipment-form__label">
								<input type="checkbox" name="multimedia" value="cassette"
									   checked={this.state.multimedia.indexOf('cassette') !== -1}
									   onChange={this.checkHandler}/>
								Кассетник
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="multimedia" value="CD"
									   checked={this.state.multimedia.indexOf('CD') !== -1}
									   onChange={this.checkHandler}/>
								CD
							</label>
							<label className="equipment-form__label">
								<input type="checkbox" name="multimedia" value="TV"
									   checked={this.state.multimedia.indexOf('TV') !== -1}
									   onChange={this.checkHandler}/>
								TV
							</label>
						</div>
					</div>
					<div className="equipment-form__tab">
						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Регулировки</h3>
							<label className="equipment-form__label">
								<input type="checkbox" name="powerMirrors"
									   onChange={this.fieldHandler}/>Электропривод зеркал
							</label>
							<h3 className="equipment-form__item-child-title">Стеклоподъемники</h3>
							<label className="equipment-form__label">
								<input type="radio" name="powerWindows" value="hand"
									   onChange={this.fieldHandler}
									   checked={this.state.powerWindows === 'hand'}/>
								ручные
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="powerWindows" value="electroFront"
									   checked={this.state.powerWindows === 'electroFront'}
									   onChange={this.fieldHandler}/>
								электро передние
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="powerWindows" value="electroAll"
									   checked={this.state.powerWindows === 'electroAll'}
									   onChange={this.fieldHandler}/>
								электро все
							</label>

							<h3 className="equipment-form__item-child-title">Сиденье водителя</h3>
							<label className="equipment-form__label">
								<input type="radio" name="driverSeat" value="manualAdjustment"
									   checked={this.state.driverSeat === 'manualAdjustment'}
									   onChange={this.fieldHandler}/>
								ручная регулировка
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="driverSeat" value="manualHeightAdjustment"
									   checked={this.state.driverSeat === 'manualHeightAdjustment'}
									   onChange={this.fieldHandler}/>
								ручная регулировка по высоте
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="driverSeat" value="powered"
									   checked={this.state.driverSeat === 'powered'}
									   onChange={this.fieldHandler}/>
								электро регулировка
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="driverSeat" value="withPositionMemory"
									   checked={this.state.driverSeat === 'withPositionMemory'}
									   onChange={this.fieldHandler}/>
								с памятью положения
							</label>

							<h3 className="equipment-form__item-child-title">Сиденье пассажира</h3>
							<label className="equipment-form__label">
								<input type="radio" name="passengerSeat" value="manualAdjustment"
									   checked={this.state.passengerSeat === 'manualAdjustment'}
									   onChange={this.fieldHandler}/>
								ручная регулировка
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="passengerSeat" value="manualHeightAdjustment"
									   checked={this.state.passengerSeat === 'manualHeightAdjustment'}
									   onChange={this.fieldHandler}/>
								ручная регулировка по высоте
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="passengerSeat" value="powered"
									   checked={this.state.passengerSeat === 'powered'}
									   onChange={this.fieldHandler}/>
								электро регулировка
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="passengerSeat" value="withPositionMemory"
									   checked={this.state.passengerSeat === 'withPositionMemory'}
									   onChange={this.fieldHandler}/>
								с памятью положения
							</label>

							<h3 className="equipment-form__item-child-title">Регулировка руля</h3>
							<label className="equipment-form__label">
								<input type="radio" name="adjustment" value="absent"
									   checked={this.state.adjustment === 'absent'}
									   onChange={this.fieldHandler}/>
								отсутствует
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="adjustment" value="inOnePlane"
									   checked={this.state.adjustment === 'inOnePlane'}
									   onChange={this.fieldHandler}/>в
								одной плоскости
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="adjustment" value="inTwoPlanes"
									   checked={this.state.adjustment === 'inTwoPlanes'}
									   onChange={this.fieldHandler}/>
								в двух плоскостях
							</label>
							<label className="equipment-form__label">
								<input type="radio" name="adjustment" value="powered"
									   checked={this.state.adjustment === 'powered'}
									   onChange={this.fieldHandler}/>
								электро регулировка
							</label>
						</div>
					</div>
				</div>

				<nav className="nav-buttons">
					<div></div>
					<button className="custom-btn" type="button" onClick={this.publishCar}>
						Опубликовать
					</button>
				</nav>
			</div>
		);
	}
}

export default Equipment;
