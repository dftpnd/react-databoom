import React from 'react';
import { Link } from 'react-router'
import GroupButton from '../group-button/group-button'

class Suspension extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			susChassis: true,
			susEngineWithoutCorrosion: true,
			susCrankcaseProtection: true,
			susTransmissionWithoutCorrosion: true,
			susLeverageWithoutCorrosion: true,
			susThresholdsCorrosive: true,
			susArchWithoutCorrosion: true,
			susBottomCorrosive: true,
			susFrontSuspension: true,
			susRearSuspension: true,
			susShockAbsorberWithoutLeaks: true,
			susExhaustSystem: true
		};

		this.state = JSON.parse(localStorage.getItem('suspensionState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('suspensionState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Подвеска</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Ходовая часть без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susChassis} name="susChassis"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Двигатель без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susEngineWithoutCorrosion} name="susEngineWithoutCorrosion"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Защита картера без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susCrankcaseProtection} name="susCrankcaseProtection"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Трансмиссия без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susTransmissionWithoutCorrosion}
								 name="susTransmissionWithoutCorrosion"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Рычаги без коррозий, утечек и деформацииДа
					</label>
					<GroupButton value={this.state.susLeverageWithoutCorrosion} name="susLeverageWithoutCorrosion"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Пороги без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susThresholdsCorrosive} name="susThresholdsCorrosive"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Арки без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susArchWithoutCorrosion} name="susArchWithoutCorrosion"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Днище без коррозий, утечек и деформации
					</label>
					<GroupButton value={this.state.susBottomCorrosive} name="susBottomCorrosive"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Состояние передней подвеска без нареканий
					</label>
					<GroupButton value={this.state.susFrontSuspension} name="susFrontSuspension"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Состояние задней подвески без нареканий
					</label>
					<GroupButton value={this.state.susRearSuspension} name="susRearSuspension"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Амортизаторов без течи, работают исправно
					</label>
					<GroupButton value={this.state.susShockAbsorberWithoutLeaks} name="susShockAbsorberWithoutLeaks"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Выхлопная система работает исправно
					</label>
					<GroupButton value={this.state.susExhaustSystem} name="susExhaustSystem"
								 handler={this.fieldHandler}/>
				</div>


				<nav className="nav-buttons">
					<Link to="/add-car/engine" className="custom-btn">Назад</Link>
					<Link to="/add-car/test-drive" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Suspension;
