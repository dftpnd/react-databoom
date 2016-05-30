import React from 'react';
import { Link } from 'react-router'
import GroupButton from '../group-button/group-button'

class InteriorFunctional extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			ifPedals: null,
			ifInteriorLighting: null,
			ifPowerWindows: null,
			ifCentralLocking: null,
			ifMirrorSettings: null,
			ifSwitchGear: null,
			ifParktronic: null,
			ifPowerConnectors: null,
			ifAirConditioning: null,
			ifSoundSystem: null,
			ifNavigationSystem: null,
			ifMicrophone: null,
			ifSteeringWheel: null,
			ifInstrumentPanelLights: null,
			ifWiper: null,
			ifHeadlightWasher: null,
			ifSideWindows: null,
			ifGloveLighting: null,
			ifSteeringAdjustment: null,
			ifSeatAdjustment: null,
			ifAdjustment: null,
			ifAirbagsErrors: null,
			ifBoardComputer: null
		};

		this.state = JSON.parse(localStorage.getItem('interiorFunctionalState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('interiorFunctionalState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="interior-functional">
				<h1 class="app-title">Функционал Салона</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Состояние педалей и их работа без нареканий
					</label>
					<GroupButton value={this.state.ifPedals} name="ifPedals"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Освещение салона работает без нареканий
					</label>
					<GroupButton value={this.state.ifInteriorLighting} name="ifInteriorLighting"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Стеклоподъемники работают без нареканий
					</label>
					<GroupButton value={this.state.ifPowerWindows} name="ifPowerWindows"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Центральный замок работает исправно
					</label>
					<GroupButton value={this.state.ifCentralLocking} name="ifCentralLocking"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм настройки зеркал заднего вида работает исправно
					</label>
					<GroupButton value={this.state.ifMirrorSettings} name="ifMirrorSettings"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Переключатель передач работает исправно
					</label>
					<GroupButton value={this.state.ifSwitchGear} name="ifSwitchGear"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Парктроники работают исправно
					</label>
					<GroupButton value={this.state.ifParktronic} name="ifParktronic"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Разъемы питания работают исправно
					</label>
					<GroupButton value={this.state.ifPowerConnectors} name="ifPowerConnectors"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Кондиционер работает исправно
					</label>
					<GroupButton value={this.state.ifAirConditioning} name="ifAirConditioning"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Аудиосистем работает исправно
					</label>
					<GroupButton value={this.state.ifSoundSystem} name="ifSoundSystem"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Навигационная система работает исправно
					</label>
					<GroupButton value={this.state.ifNavigationSystem} name="ifNavigationSystem"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Микрофон громкой связи работает исправно
					</label>
					<GroupButton value={this.state.ifMicrophone} name="ifMicrophone"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Рулевое колесо работает исправно
					</label>
					<GroupButton value={this.state.ifSteeringWheel} name="ifSteeringWheel"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Подсветка приборной панели работает исправно
					</label>
					<GroupButton value={this.state.ifInstrumentPanelLights} name="ifInstrumentPanelLights"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Стеклоочиститель работает исправно
					</label>
					<GroupButton value={this.state.ifWiper} name="ifWiper"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Омыватель фар работает стабильно
					</label>
					<GroupButton value={this.state.ifHeadlightWasher} name="ifHeadlightWasher"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Боковые стекла работают без нареканий
					</label>
					<GroupButton value={this.state.ifSideWindows} name="ifSideWindows"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм и освещение бардачка работают исправно
					</label>
					<GroupButton value={this.state.ifGloveLighting} name="ifGloveLighting"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм регулировки руля работает исправно
					</label>
					<GroupButton value={this.state.ifSteeringAdjustment} name="ifSteeringAdjustment"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм регулировки сидения водителя работает исправно
					</label>
					<GroupButton value={this.state.ifSeatAdjustment} name="ifSeatAdjustment"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм регулировки сидения пассажира работает исправно
					</label>
					<GroupButton value={this.state.ifAdjustment} name="ifAdjustment"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Ошибки подушек безопасности не выявлены
					</label>
					<GroupButton value={this.state.ifAirbagsErrors} name="ifAirbagsErrors"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Бортовой компьютер работает исправно
					</label>
					<GroupButton value={this.state.ifBoardComputer} name="ifBoardComputer"
								 handler={this.fieldHandler}/>
				</div>


				<div className="nav-buttons">
					<Link to="/add-car/interior" className="custom-btn">Назад</Link>
					<Link to="/add-car/tires-and-brakes" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default InteriorFunctional;
