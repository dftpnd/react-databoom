import React from 'react';
import { Link } from 'react-router'

class InteriorFunctional extends React.Component {
	render() {
		return (
			<div className="interior-functional">
				<h1 class="app-title">InteriorFunctional</h1>


				<div className="nav-buttons">
					<Link to="/add-car/interior" className="custom-btn">Назад</Link>
					<Link to="/add-car/tires-and-brakes" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default InteriorFunctional;
