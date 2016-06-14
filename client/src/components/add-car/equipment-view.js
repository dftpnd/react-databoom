import React from 'react';
import Modal from 'react-modal';
import addCarService from './add-car.service';

class EquipmentView extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.data;
		this.state.onlyView = this.props.onlyView;

		this.fieldHandler = this.fieldHandler.bind(this);
		this.checkHandler = this.checkHandler.bind(this);
		this.publicateModalClose = this.publicateModalClose.bind(this);
		this.openPublishModal = this.openPublishModal.bind(this);
		this.checkValue = this.checkValue.bind(this);

		this.handleChangeForAuctionMins = this.handleChangeForAuctionMins.bind(this);
	}

	checkValue(fieldName) {
		if (this.state.onlyView) {
			if (this.state[fieldName]) {
				return true
			} else {
				return false
			}
		}
		return true
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('equipmentState', JSON.stringify(nextProps));
	}

	fieldHandler(event) {
		if (this.state.onlyView) {
			return;
		}
		this.setState({[event.target.name]: event.target.value})
	}

	checkHandler(event) {
		if (this.state.onlyView) {
			alert('1');
			return;
		}

		const checkList = this.state[event.target.name];
		var removeItem = null;

		checkList.forEach((item, index)=> {
			if (item.value === event.target.value) {
				return removeItem = index;
			}
		});

		if (removeItem !== null) {
			checkList.splice(removeItem, 1);
		} else {
			checkList.push({value: event.target.value});
		}
		this.setState({[event.target.name]: checkList})
	}

	openPublishModal() {
		this.setState({publicateModalIsOpen: true});
	}

	publicateModalClose() {
		this.setState({publicateModalIsOpen: false});
	}

	securityIsActive(value) {
		return this.state.security && this.state.security.map(e=>e.value).indexOf(value) !== -1;
	}

	equipmentIsActive(value) {
		return this.state.equipment && this.state.equipment.map(e=>e.value).indexOf(value) !== -1;
	}

	comfortIsActive(value) {
		return this.state.comfort && this.state.comfort.map(e=>e.value).indexOf(value) !== -1;
	}

	exteriorIsActive(value) {
		return this.state.exterior && this.state.exterior.map(e=>e.value).indexOf(value) !== -1;
	}

	multimediaIsActive(value) {
		return this.state.multimedia && this.state.multimedia.map(e=>e.value).indexOf(value) !== -1;
	}

	signalingIsActive(value) {
		return this.state.signaling && this.state.signaling.map(e=>e.value).indexOf(value) !== -1;
	}

	handleChangeForAuctionMins(event) {
		var value = event.target.value;
		if (isNaN(value)) {
			alert('Введеное значение "' + value + '" не является числом.');
			return;
		}

		if (value < 1) {
			alert('Введеное значение "' + value + '" меньше 1. Значение должно быть большим или равным 1.');
			return;
		}

		this.setState({auction_time_mins: value});
	}

	render() {
		return (
			<div readOnly={this.state.onlyView} disabled={this.state.onlyView}>


				<div className="equipment-form">
					<div className="equipment-form__tab">
						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Интерьер</h3>

							{(()=> {
								if (this.checkValue('upholstery')) {
									return (
										<div className="equipment-form__item-child">
											<h3 className="equipment-form__item-child-title">Обивка салона</h3>
											<label className="equipment-form__label">
												<input type="radio" name="upholstery" value="cloth"
													   checked={this.state.upholstery === 'cloth'}
													   onChange={this.fieldHandler}/>
												ткань
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
									)
								}
							})()}

							{(()=> {
								if (this.checkValue('interiorColor')) {
									return (<div className="equipment-form__item-child">
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
									</div>)
								}
							})()}


							{(()=> {
								if (this.checkValue('exterior')) {
									return (<div className="equipment-form__item">
										<h3 className="equipment-form__item-title">Экстерьер</h3>
										<label className="equipment-form__label">
											<input type="checkbox" name="exterior" value="sunroof"
												   checked={this.exteriorIsActive('sunroof')}
												   onChange={this.checkHandler}/>
											Люк на крыше
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="exterior" value="tintedGlass"
												   checked={this.exteriorIsActive('tintedGlass')}
												   onChange={this.checkHandler}/>
											Тонированные стекла
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="exterior" value="xenonHeadlights"
												   checked={this.exteriorIsActive('xenonHeadlights')}
												   onChange={this.checkHandler}/>
											Ксеноновые фары
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="exterior" value="adaptiveHeadlights"
												   checked={this.exteriorIsActive('adaptiveHeadlights')}
												   onChange={this.checkHandler}/>
											Адаптивные фары
										</label>
										<div className="equipment-form__label-select">
											<label className="equipment-form__label">
												<input type="checkbox" name="exterior" value="alloyWheels"
													   checked={this.exteriorIsActive('alloyWheels')}
													   onChange={this.checkHandler}/>
												Легкосплавные диски
											</label>
											<select>
												<option>12"</option>
												<option>13"</option>
											</select>
										</div>
									</div>)
								}
							})()}

							{(()=> {
								if (this.checkValue('signaling')) {
									return (<div className="equipment-form__item">
										<h3 className="equipment-form__item-title">Сигнализация</h3>
										<label className="equipment-form__label">
											<input type="checkbox" name="signaling" value="immobiliser"
												   checked={this.signalingIsActive('immobiliser')}
												   onChange={this.checkHandler}/>
											Иммобиллайзер
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="signaling" value="established"
												   checked={this.signalingIsActive('established')}
												   onChange={this.checkHandler}/>
											Штатная
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="signaling" value="feedback"
												   checked={this.signalingIsActive('feedback')}
												   onChange={this.checkHandler}/>
											Обратная связь
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="signaling" value="remoteEngineStarter"
												   checked={this.signalingIsActive('remoteEngineStarter')}
												   onChange={this.checkHandler}/>
											Дистанционный запуск двигателя
										</label>
									</div>)
								}
							})()}


							<div className="equipment-form__item">
								{(()=> {
									if (this.checkValue('security')) {
										return (
											<div>
												<h3 className="equipment-form__item-title">Безопасность</h3>
												<label className="equipment-form__label">
													<input type="checkbox" name="security" value="ABS"
														   checked={this.securityIsActive('ABS')}
														   onChange={this.checkHandler}/>
													Антиблокировочная система (ABS)
												</label>
												<label className="equipment-form__label">
													<input type="checkbox" name="security" value="ESP"
														   checked={this.securityIsActive('ESP')}
														   onChange={this.checkHandler}/>
													Система курсовой устойчивости (ESP)
												</label>
												<label className="equipment-form__label">
													<input type="checkbox" name="security" value="parktronic"
														   checked={this.securityIsActive('parktronic')}
														   onChange={this.checkHandler}/>
													Парктроник
												</label>
											</div>
										)
									}
								})()}

								{(()=> {
									if (this.checkValue('airbags')) {
										return (
											<div>
												<h3 className="equipment-form__item-child-title">Подушки
													безопасности</h3>
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
										)
									}
								})()}
							</div>
						</div>
					</div>
					<div className="equipment-form__tab">
						<h3 className="equipment-form__item-title">Функционально оборудование</h3>
						{(()=> {
							if (this.checkValue('equipment')) {
								return (
									<div className="equipment-form__item">


										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="onBoardComputer"
												   checked={this.equipmentIsActive('onBoardComputer')}
												   onChange={this.checkHandler}/>
											Бортовой компьютер
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="gasBalloonEquipment"
												   checked={this.equipmentIsActive('gasBalloonEquipment')}
												   onChange={this.checkHandler}/>
											Газобаллонное оборудование
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="rainSensor"
												   checked={this.equipmentIsActive('rainSensor')}
												   onChange={this.checkHandler}/>
											Датчик дождя
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="lightSensor"
												   checked={this.equipmentIsActive('lightSensor')}
												   onChange={this.checkHandler}/>
											Датчик света
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="cruiseControl"
												   checked={this.equipmentIsActive('cruiseControl')}
												   onChange={this.checkHandler}/>
											Круиз-контроль
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="navigationSystem"
												   checked={this.equipmentIsActive('navigationSystem')}
												   onChange={this.checkHandler}/>
											Навигационная система
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="heatedMirrors"
												   checked={this.equipmentIsActive('heatedMirrors')}
												   onChange={this.checkHandler}/>
											Обогрев зеркал
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="headlightWasher"
												   checked={this.equipmentIsActive('headlightWasher')}
												   onChange={this.checkHandler}/>
											Омыватель фар
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="powerSteering"
												   checked={this.equipmentIsActive('powerSteering')}
												   onChange={this.checkHandler}/>
											Усилитель руля
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="centralLocking"
												   checked={this.equipmentIsActive('centralLocking')}
												   onChange={this.checkHandler}/>
											Центральный замок
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="equipment" value="airSuspension"
												   checked={this.equipmentIsActive('airSuspension')}
												   onChange={this.checkHandler}/>
											Пневмоподвеска
										</label>
									</div>
								)
							}
						})()}

						{(()=> {
							if (this.checkValue('comfort')) {
								return (
									<div>
										<div className="equipment-form__item">
											<h3 className="equipment-form__item-title">Комфорт</h3>
											<label className="equipment-form__label">
												<input type="checkbox" name="comfort" value="heatedSteering"
													   checked={this.comfortIsActive('heatedSteering')}
													   onChange={this.checkHandler}/>
												Подогрев руля
											</label>
											<label className="equipment-form__label">
												<input type="checkbox" name="comfort" value="seatHeating"
													   checked={this.comfortIsActive('seatHeating')}
													   onChange={this.checkHandler}/>
												Обогрев сидений
											</label>
										</div>
									</div>
								)
							}
						})()}

						{(()=> {
							if (this.checkValue('climate')) {
								return (
									<div>
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
								)
							}
						})()}

						{(()=> {
							if (this.checkValue('multimedia')) {
								return (
									<div className="equipment-form__item">
										<h3 className="equipment-form__item-title">Мультимедиа</h3>
										<label className="equipment-form__label">
											<input type="checkbox" name="multimedia" value="cassette"
												   checked={this.multimediaIsActive('cassette')}
												   onChange={this.checkHandler}/>
											Кассетник
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="multimedia" value="CD"
												   checked={this.multimediaIsActive('CD')}
												   onChange={this.checkHandler}/>
											CD
										</label>
										<label className="equipment-form__label">
											<input type="checkbox" name="multimedia" value="TV"
												   checked={this.multimediaIsActive('TV')}
												   onChange={this.checkHandler}/>
											TV
										</label>
									</div>
								)
							}
						})()}
					</div>
					<div className="equipment-form__tab">
						<div className="equipment-form__item">
							<h3 className="equipment-form__item-title">Регулировки</h3>
							{(()=> {
								if (this.checkValue('powerMirrors')) {
									return (
										<div>

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
										</div>
									)
								}
							})()}
							{(()=> {
								if (this.checkValue('driverSeat')) {
									return (
										<div>
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
										</div>
									)
								}
							})()}
							{(()=> {
								if (this.checkValue('passengerSeat')) {
									return (
										<div>
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
										</div>
									)
								}
							})()}

							{(()=> {
								if (this.checkValue('adjustment')) {
									return (
										<div>
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
									)
								}
							})()}

						</div>
					</div>
				</div>


			</div>
		);
	}
}

export default EquipmentView;
