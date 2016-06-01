import React from 'react';
import { Link } from 'react-router'

class TiresAndBrakes extends React.Component {
	render() {
		return (
			<div className="index">
				<h1 className="app-title">Шины и тормоза</h1>

				<nav className="nav-buttons">
					<Link to="/add-car/interior-functional" className="custom-btn">Назад</Link>
					<Link to="/add-car/engine" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default TiresAndBrakes;
