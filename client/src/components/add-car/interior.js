import React from 'react';
import { Link } from 'react-router'

class Interior extends React.Component {
	render() {
		return (
			<div className="interior">
				<h1 class="app-title">Салон</h1>


				<div className="nav-buttons">
					<Link to="/add-car/exterior-functional" className="custom-btn">Назад</Link>
					<Link to="/add-car/interior-functional" className="custom-btn">Далее</Link>
				</div>
			</div>
		);
	}
}

export default Interior;
