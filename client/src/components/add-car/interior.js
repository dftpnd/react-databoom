import React from 'react';
import { Link } from 'react-router'

import GroupButton from '../group-button/group-button'

class Interior extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			inUpholsteryDoors: null,
			inInteriorFloor: null,
			inDriverSeat: null,
			inPassengerSeat: null,
			inRearSeats: null,
			inVents: null,
			inDashboard: null,
			inSteeringWheel: null,
			inFloorCoatings: null,
			inSeatBelts: null,
			inCabinRoof: null,
			inLuggageCompartment: null
		};

		this.state = JSON.parse(localStorage.getItem('interiorState')) || defaultState;

		this.fieldHandler = this.fieldHandler.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('interiorState', JSON.stringify(nextProps));
	}

	fieldHandler(name, value) {
		this.setState({[name]: value});
	}

	render() {
		return (
			<div className="interior">
				<h1 class="app-title">Салон</h1>

				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Обивка дверей без повреждений и пятен
					</label>
					<GroupButton value={this.state.inUpholsteryDoors} name="inUpholsteryDoors"
								 handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Пол салона без повреждений и пятен
					</label>
					<GroupButton value={this.state.inInteriorFloor} name="inInteriorFloor" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Водительское сидение без повреждений и пятен
					</label>
					<GroupButton value={this.state.inDriverSeat} name="inDriverSeat" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Пассажирское сиденье без повреждений и пятен
					</label>
					<GroupButton value={this.state.inPassengerSeat} name="inPassengerSeat" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Задние сиденья без повреждений и пятен
					</label>
					<GroupButton value={this.state.inRearSeats} name="inRearSeats" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Вентиляционные отверстия без повреждений
					</label>
					<GroupButton value={this.state.inVents} name="inVents" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Приборная панель без повреждений
					</label>
					<GroupButton value={this.state.inDashboard} name="inDashboard" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Руль без повреждений
					</label>
					<GroupButton value={this.state.inSteeringWheel} name="inSteeringWheel" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Состояние подполового покрытия без нареканий
					</label>
					<GroupButton value={this.state.inFloorCoatings} name="inFloorCoatings" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Состояние ремней безопасности без нареканий
					</label>
					<GroupButton value={this.state.inSeatBelts} name="inSeatBelts" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Крыша салона без повреждений и пятен
					</label>
					<GroupButton value={this.state.inCabinRoof} name="inCabinRoof" handler={this.fieldHandler}/>
				</div>
				<div className="exterior-functional__item">
					<label className="exterior-functional__label">
						Багажный отсек без повреждений и пятен
					</label>
					<GroupButton value={this.state.inLuggageCompartment} name="inLuggageCompartment"
								 handler={this.fieldHandler}/>
				</div>

				<div className="nav-buttons">
					<Link to="/add-car/exterior-functional" className="custom-btn">Назад</Link>
					<Link to="/add-car/interior-functional" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default Interior;
