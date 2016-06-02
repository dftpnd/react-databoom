import React from 'react';
import { Link } from 'react-router'

class Suspension extends React.Component {
	render() {
		return (
			<div className="index">
				<h1 className="app-title">Suspension</h1>

				<nav className="nav-buttons">
					<Link to="/add-car/engine" className="custom-btn">Назад</Link>
					<Link to="/add-car/test-drive" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Suspension;
