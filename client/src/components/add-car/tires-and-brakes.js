import React from 'react';
import { Link } from 'react-router'
import GroupButton from '../group-button/group-button'

class TiresAndBrakes extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			tbParametersRubber: null,
			tbPressureLeftFrontTire: null,
			tbThicknessTreadLeftFrontTire: null,
			tbBrakePadLeftFrontWheel: null,
			tbPressureTheRightFrontTire: null,
			tbThicknessTreadRightFrontTire: null,
			tbBrakePadRightFrontWheel: null,
			tbPressureRightRearTire: null,
			tbThicknessTreadRightRearTire: null,
			tbBrakePadRightRearWheel: null,
			tbPressureLeftRearTire: null,
			tbThicknessTreadLeftRearTire: null,
			tbBrakePadLeftRearWheel: null,
			tbTyresWithoutDefects: null,
			tbDiscsWithoutDefects: null,
			tbAllNutsBoltsAvailable: null,
			tbThereAreAllSecretsKeys: null,
			tbTheSpareWheelAvailable: null
		};

		this.state = JSON.parse(localStorage.getItem('tiresAndBrakesState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('tiresAndBrakesState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Шины и тормоза</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Модель и параметры резины
					</label>
					<GroupButton value={this.state.tbParametersRubber} name="tbParametersRubber"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Давление Левой передней шины:
					</label>
					<GroupButton value={this.state.tbPressureLeftFrontTire} name="tbPressureLeftFrontTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Толщина протектора левой передней шины
					</label>
					<GroupButton value={this.state.tbThicknessTreadLeftFrontTire} name="tbThicknessTreadLeftFrontTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Тормозная колодка левого переднего колеса
					</label>
					<GroupButton value={this.state.tbBrakePadLeftFrontWheel} name="tbBrakePadLeftFrontWheel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Давление правой передней шины:
					</label>
					<GroupButton value={this.state.tbPressureTheRightFrontTire} name="tbPressureTheRightFrontTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Толщина протектора правой передней шины
					</label>
					<GroupButton value={this.state.tbThicknessTreadRightFrontTire} name="tbThicknessTreadRightFrontTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Тормозная колодка правого переднего колеса
					</label>
					<GroupButton value={this.state.tbBrakePadRightFrontWheel} name="tbBrakePadRightFrontWheel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Давление правой задней шины
					</label>
					<GroupButton value={this.state.tbPressureRightRearTire} name="tbPressureRightRearTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Толщина протектора правой задней шины
					</label>
					<GroupButton value={this.state.tbThicknessTreadRightRearTire} name="tbThicknessTreadRightRearTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Тормозная колодка правого заднего колеса
					</label>
					<GroupButton value={this.state.tbBrakePadRightRearWheel} name="tbBrakePadRightRearWheel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Давление левой задней шины
					</label>
					<GroupButton value={this.state.tbPressureLeftRearTire} name="tbPressureLeftRearTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Толщина протектора левой задней шины
					</label>
					<GroupButton value={this.state.tbThicknessTreadLeftRearTire} name="tbThicknessTreadLeftRearTire"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Тормозная колодка левого заднего колеса
					</label>
					<GroupButton value={this.state.tbBrakePadLeftRearWheel} name="tbBrakePadLeftRearWheel"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Шины без дефектов
					</label>
					<GroupButton value={this.state.tbTyresWithoutDefects} name="tbTyresWithoutDefects"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Диски без дефектов
					</label>
					<GroupButton value={this.state.tbDiscsWithoutDefects} name="tbtbDiscsWithoutDefects"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Все гайки, болты в наличии
					</label>
					<GroupButton value={this.state.tbAllNutsBoltsAvailable} name="tbAllNutsBoltsAvailable"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Есть все секретки и ключи
					</label>
					<GroupButton value={this.state.tbThereAreAllSecretsKeys} name="tbThereAreAllSecretsKeys"
								 handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Запасное колесо в наличии
					</label>
					<GroupButton value={this.state.tbTheSpareWheelAvailable} name="tbTheSpareWheelAvailable"
								 handler={this.fieldHandler}/>
				</div>

				<nav className="nav-buttons">
					<Link to="/add-car/interior-functional" className="custom-btn">Назад</Link>
					<Link to="/add-car/engine" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default TiresAndBrakes;
