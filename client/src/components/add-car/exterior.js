import React from 'react';
import { Link } from 'react-router'
import db from '../services/db.service';
import ExteriorElement from './exterior-element';

class Exterior extends React.Component {
	constructor(props) {
		super(props);

		const defaultState = {
			exteriorElements: {},
			activeElement: null,
			element1: [],
			element2: [],
			element3: [],
			element4: [],
			element5: [],
			element6: [],
			element7: [],
			element8: [],
			element9: [],
			element10: [],
			element11: [],
			element12: [],
			element13: [],
			element14: [],
			element15: [],
			element16: [],
			element17: [],
			element18: [],
			element19: [],
			element20: [],
			element21: [],
			element22: [],
			element23: []
		};

		this.state = JSON.parse(localStorage.getItem('exteriorState')) || defaultState;

		this.elementLabels = {
			1: 'переднего бампера',
			2: 'левой фары',
			3: 'правой фары',
			4: 'переднего капота',
			5: 'лобового стекла',
			6: 'крыши',
			7: 'заднего стекла',
			8: 'заднего номера',
			9: 'заднего бампера',
			10: 'левой задней фары',
			11: 'правой задней фары',
			12: 'todo',
			13: 'todo',
			14: 'todo',
			15: 'todo',
			16: 'todo',
			17: 'todo',
			18: 'todo',
			19: 'todo',
			20: 'todo',
			21: 'todo',
			22: 'todo',
			23: 'todo'
		};
		this.fileUpload = this.fileUpload.bind(this);
		this.elementHandler = this.elementHandler.bind(this);
		this.getElementLabel = this.getElementLabel.bind(this);
		this.getActiveElementName = this.getActiveElementName.bind(this);
		this.addPhoto = this.addPhoto.bind(this);
		this.createImgUrl = this.createImgUrl.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('exteriorState', JSON.stringify(nextProps));
	}

	elementHandler(value) {
		this.setState({activeElement: value});
	}

	fileUpload(event) {
		const file = event.target.files[0];

		db.store.upload(file)
			.done((data)=> {
				this.addPhoto(data.filename)
			})
			.fail(function () {
			})
			.always(function () {

			});
	}

	createImgUrl(filename) {
		/**
		 * TODO replace url
		 */
		return `https://t276.databoom.space/uploads/t276/b276/${filename}`;
	}

	addPhoto(filename) {
		const elementName = this.getActiveElementName();
		const url = this.createImgUrl(filename);
		this.setState({[elementName]: this.state[elementName].concat([url])})
	}

	getElementLabel(elementId) {
		return this.elementLabels[elementId];
	}

	getActiveElementName() {
		return `element${this.state.activeElement}`;
	}

	render() {
		var buttons = [
			{value: 1, left: 33, top: 265},
			{value: 2, left: 85, top: 174},
			{value: 3, left: 85, top: 357},
			{value: 4, left: 168, top: 265},
			{value: 5, left: 302, top: 265},
			{value: 6, left: 408, top: 265},
			{value: 7, left: 575, top: 265},
			{value: 8, left: 779, top: 265},
			{value: 9, left: 843, top: 265},
			{value: 10, left: 776, top: 357},
			{value: 11, left: 776, top: 174},
			{value: 12, left: 132, top: 519},
			{value: 13, left: 215, top: 513},
			{value: 14, left: 376, top: 473},
			{value: 15, left: 514, top: 473},
			{value: 16, left: 619, top: 512},
			{value: 17, left: 715, top: 492},
			{value: 18, left: 132, top: 17},
			{value: 19, left: 215, top: 18},
			{value: 20, left: 377, top: 58},
			{value: 21, left: 514, top: 59},
			{value: 22, left: 619, top: 19},
			{value: 23, left: 715, top: 39}
		];
		return (
			<div className="exterior">
				<div className="exterior__damage-visual">
					<div className="exterior__box">
						{buttons.map((btn, i)=> {
							return <ExteriorElement
								left={btn.left} top={btn.top}
								value={btn.value}
								handler={this.elementHandler}
								active={this.state.activeElement} key={i}/>
						})}
					</div>
				</div>

				{(()=> {
					if (this.state.activeElement !== null) {
						return <div>
							<hr/>
							<h5>{this.state.activeElement} - добавить
								фото {this.getElementLabel(this.state.activeElement)}</h5>

							{this.state[this.getActiveElementName()].map((bgUrl, i)=> {
								return <div key={i}>
									<img src={bgUrl} width="100"/>
								</div>
							})}
							<input type="file" multiple="multiple" onChange={this.fileUpload}/>
						</div>
					}
				})()}
				<nav className="nav-buttons">
					<Link to="/add-car/car-form" className="custom-btn">Назад</Link>
					<Link to="/add-car/exterior-functional" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Exterior;
