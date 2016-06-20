import React from 'react';
import { Link } from 'react-router'
import GroupButton from '../group-button/group-button'

class Engine extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			engEngineWithoutLeaks: true,
			engElectronicDiagnostics: true,
			engCoolantHoses: true,
			engBeltsAndPulleys: true,
			engBatteryWillNotLeak: true,
			engWiresWithoutDamage: true,
			engCoolantLevel: true,
			engLevelBrake: true,
			engLevelPS: true,
			engOilLevel: true,
			engEngineMounts: true,
			engBoltsFactory: true,
			engSmellEngine: true
		};

		this.state = JSON.parse(localStorage.getItem('engineState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('engineState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="engine">
				<h1 className="app-title">Двигатель</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Двигатель без утечек масла, охлаждающей жидкости, P/S, A/C
					</label>
					<GroupButton value={this.state.engEngineWithoutLeaks} name="engEngineWithoutLeaks"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Электронная диагностика: найденные ошибки
					</label>
					<GroupButton value={this.state.engElectronicDiagnostics} name="engElectronicDiagnostics"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Шланги системы охлаждения не набухшие, без утечек, без гнили
					</label>
					<GroupButton value={this.state.engCoolantHoses} name="engCoolantHoses"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Ремни и шкивы/ролики в хорошем состоянии
					</label>
					<GroupButton value={this.state.engBeltsAndPulleys} name="engBeltsAndPulleys"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Аккумулятор без утечек и повреждений
					</label>
					<GroupButton value={this.state.engBatteryWillNotLeak} name="engBatteryWillNotLeak"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Провода аккумулятора без повреждений, коррозии, герметичны
					</label>
					<GroupButton value={this.state.engWiresWithoutDamage} name="engWiresWithoutDamage"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Уровень охлаждающей жидкости в норме
					</label>
					<GroupButton value={this.state.engCoolantLevel} name="engCoolantLevel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Уровень тормозной жидкости в норме
					</label>
					<GroupButton value={this.state.engLevelBrake} name="engLevelBrake"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Уровень P/S в норме
					</label>
					<GroupButton value={this.state.engLevelPS} name="engLevelPS"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Уровень масла в норме
					</label>
					<GroupButton value={this.state.engOilLevel} name="engOilLevel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Крепления двигателя и систем без деформаций
					</label>
					<GroupButton value={this.state.engEngineMounts} name="engEngineMounts"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Болты крепления заводские
					</label>
					<GroupButton value={this.state.engBoltsFactory} name="engBoltsFactory"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Запах работы двигателя в пределах нормы
					</label>
					<GroupButton value={this.state.engSmellEngine} name="engSmellEngine"
								 handler={this.fieldHandler}/>
				</div>


				<nav className="nav-buttons">
					<Link to="/add-car/tires-and-brakes" className="custom-btn">Назад</Link>
					<Link to="/add-car/suspension" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Engine;
