import React from 'react';
import { Link } from 'react-router'
import GroupButton from '../group-button/group-button'

class Tesrive extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			tdSteering: true,
			tdStraightLineMotion: true,
			tdPositionSteeringWheel: true,
			tdNoisy: true,
			tdNoiseFromWheels: true,
			tdAbnormalCreaking: true,
			tdColdEngine: true,
			tdButterfly: true,
			tdEngineTemperature: true,
			tdCoolingFans: true,
			tdNoNoiseEngine: true,
			tdWheelDriveSteadily: true,
			tdGearShiftingWithoutJerks: true,
			tdGearchangeCold: true,
			tdGearshiftWarmedUp: true,
			tdGearChangesWork: true,
			tdMotorEnergized: true,
			tdShockAbsorbers: true,
			tdLackSkid: true
		};

		this.state = JSON.parse(localStorage.getItem('testDriveState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('testDriveState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Тест драйв</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Рулевое управление без нареканий
					</label>
					<GroupButton value={this.state.tdSteering} name="tdSteering"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Прямолинейное движение стабильно
					</label>
					<GroupButton value={this.state.tdStraightLineMotion} name="tdStraightLineMotion"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Отсутствие заноса при торможении
					</label>
					<GroupButton value={this.state.tdLackSkid} name="tdLackSkid"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Положение рулевого колеса без отклонений
					</label>
					<GroupButton value={this.state.tdPositionSteeringWheel} name="tdPositionSteeringWheel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Посторонний шум и вибрации от подвески отсутствуют
					</label>
					<GroupButton value={this.state.tdNoisy} name="tdNoisy"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Посторонний шум от колес и тормозов отсутствует
					</label>
					<GroupButton value={this.state.tdNoiseFromWheels} name="tdNoiseFromWheels"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Аномальные поскрипывания и шумы в салоне отсутствуют
					</label>
					<GroupButton value={this.state.tdAbnormalCreaking} name="tdAbnormalCreaking"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Холодный двигатель работает стабильно
					</label>
					<GroupButton value={this.state.tdColdEngine} name="tdColdEngine"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Дроссельных заслонки при холодном двигателе работают стабильно
					</label>
					<GroupButton value={this.state.tdButterfly} name="tdButterfly"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Температура двигателя в норме
					</label>
					<GroupButton value={this.state.tdEngineTemperature} name="tdEngineTemperature"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Вентиляторы охлаждения двигателя работают исправно
					</label>
					<GroupButton value={this.state.tdCoolingFans} name="tdCoolingFans"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Отсутствуют шумы и вибрации от двигателя
					</label>
					<GroupButton value={this.state.tdNoNoiseEngine} name="tdNoNoiseEngine"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Системы полного привода работает устойчиво (при наличии)
					</label>
					<GroupButton value={this.state.tdWheelDriveSteadily} name="tdWheelDriveSteadily"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Переключение передач без рывков и посторонних звуков
					</label>
					<GroupButton value={this.state.tdGearShiftingWithoutJerks} name="tdGearShiftingWithoutJerks"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Безупречное переключение передач в непрогретом состоянии
					</label>
					<GroupButton value={this.state.tdGearchangeCold} name="tdGearchangeCold"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Безупречное переключение передач в прогретом состоянии
					</label>
					<GroupButton value={this.state.tdGearshiftWarmedUp} name="tdGearshiftWarmedUp"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Безупречное переключение передач при рабочей температуре
					</label>
					<GroupButton value={this.state.tdGearChangesWork} name="tdGearChangesWork"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Двигатель под напряжением работает стабильно
					</label>
					<GroupButton value={this.state.tdMotorEnergized} name="tdMotorEnergized"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Амортизаторы и подвеска работают без нареканий
					</label>
					<GroupButton value={this.state.tdShockAbsorbers} name="tdShockAbsorbers"
								 handler={this.fieldHandler}/>
				</div>

				<nav className="nav-buttons">
					<Link to="/add-car/suspension" className="custom-btn">Назад</Link>
					<Link to="/add-car/equipment" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Tesrive;
