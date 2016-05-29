import React from 'react';
import { Link } from 'react-router'

import GroupButton from '../group-button/group-button'
class ExteriorFunctional extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			efMirrorMech: false,
			efWindscreenWiper: false,
			efDipped: false,
			efDimensions: false,
			efDistantLight: false,
			efStopSignal: false,
			efReversingLight: false,
			efEmergencySignal: false,
			efBacklightIcon: false,
			efOpeningCover: false,
		};

		this.state = JSON.parse(localStorage.getItem('exteriorFunctionalState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('exteriorFunctionalState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Внешний функционал</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм сложения зеркал заднего вида работает исправно
					</label>
					<GroupButton value={this.state.efMirrorMech} name="efMirrorMech" handler={this.fieldHandler}/>
				</div>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Дворники работают стабильно
					</label>
					<GroupButton value={this.state.efWindscreenWiper} name="efWindscreenWiper"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Ближний свет работает исправно
					</label>
					<GroupButton value={this.state.efDipped} name="efDipped" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Габариты работают исправно
					</label>
					<GroupButton value={this.state.efDimensions} name="efDimensions" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Дальний свет работает исправно
					</label>
					<GroupButton value={this.state.efDistantLight} name="efDistantLight" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Стоп сигнальный огни работают исправно
					</label>
					<GroupButton value={this.state.efStopSignal} name="efStopSignal" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Фонари заднего хода работают правильно
					</label>
					<GroupButton value={this.state.efReversingLight} name="efReversingLight"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Авайриный сигнал работает исправно
					</label>
					<GroupButton value={this.state.efEmergencySignal} name="efEmergencySignal"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Подсветка номерного знака работает исправно
					</label>
					<GroupButton value={this.state.efBacklightIcon} name="efBacklightIcon" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Механизм съемной крышки кабриолета работает исправно (если присутствует)
					</label>
					<GroupButton value={this.state.efOpeningCover} name="efOpeningCover" handler={this.fieldHandler}/>
				</div>


				<div className="nav-buttons">
					<Link to="/add-car/exterior" className="custom-btn">Назад</Link>
					<Link to="/add-car/interior" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default ExteriorFunctional;
