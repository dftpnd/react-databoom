import React from 'react';
import { Link } from 'react-router'

class TestDrive extends React.Component {
	render() {
		return (
			<div className="index">
				<h1 class="app-title">TestDrive</h1>

				<nav className="nav-buttons">
					<Link to="/add-car/suspension" className="custom-btn">Назад</Link>
					<Link to="/add-car/equipment" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default TestDrive;
