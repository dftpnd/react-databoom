import React from 'react';
import { Link } from 'react-router'

import ExteriorElement from './exterior-element';
import PhotoUpload from '../photo-upload/photo-upload'

class Exterior extends React.Component {
	constructor(props) {
		super(props);
		//localStorage.clear();

		const elements = [
			{label: 'переднего бампера', value: 1},
			{label: 'левой фары', value: 2},
			{label: 'правой фары', value: 3},
			{label: 'переднего капота', value: 4},
			{label: 'лобового стекла', value: 5},
			{label: 'крыши', value: 6},
			{label: 'заднего стекла', value: 7},
			{label: 'заднего номера', value: 8},
			{label: 'заднего бампера', value: 9},
			{label: 'левой задней фары', value: 10},
			{label: 'правой задней фары', value: 11},
			{label: 'правого переднего крыла', value: 12},
			{label: 'правого переднего колеса', value: 13},
			{label: 'правой передней двери', value: 14},
			{label: 'правой заднй двери', value: 15},
			{label: 'правого заднего колеса', value: 16},
			{label: 'правого заднего подкрылка', value: 17},
			{label: 'левый передний подкрылок', value: 18},
			{label: 'левое переднее колесо', value: 19},
			{label: 'левая передная дверь', value: 20},
			{label: 'левая задняя дверь', value: 21},
			{label: 'левая заднее колесо', value: 22},
			{label: 'левый задний подкрылок', value: 23}
		];

		const damageTypes = [
			{label: 'Глубокая вмятина', value: 1},
			{label: 'царапина', value: 2}
		];

		const typeRepair = [
			{label: 'Покраска детали', value: 1},
			{label: 'Замена детали', value: 2}
		];

		const defaultState = {
			activeElement: '',
			damageType: '',
			typeRepair: '',
			elementPhotos: [],
			damageElements: []
		};

		this.state = JSON.parse(localStorage.getItem('exteriorState')) || defaultState;

		this.elements = elements;
		this.damageTypes = damageTypes;
		this.typeRepair = typeRepair;

		this.elementHandler = this.elementHandler.bind(this);
		this.damageTypeHandler = this.damageTypeHandler.bind(this);
		this.typeRepairHandler = this.typeRepairHandler.bind(this);
		this.getElementLabel = this.getElementLabel.bind(this);
		this.addPhoto = this.addPhoto.bind(this);
		this.updateElementPhoto = this.updateElementPhoto.bind(this);
		this.deletePhoto = this.deletePhoto.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getElement = this.getElement.bind(this);
		this.getDamageType = this.getDamageType.bind(this);
		this.getTypeRepair = this.getTypeRepair.bind(this);
		this.getPhotos = this.getPhotos.bind(this);
		this.hasBroken = this.hasBroken.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('exteriorState', JSON.stringify(nextProps));
	}

	handleChange(event) {
		if (!event.target.name) {
			throw new Error('Input name required');
		}
		const newState = {[event.target.name]: parseInt(event.target.value, 10)};
		this.setState(newState);
	}

	elementHandler(value) {
		this.setState({
			activeElement: value,
			damageType: this.getDamageType(value),
			typeRepair: this.getTypeRepair(value),
			elementPhotos: this.getPhotos(value)
		});
	}

	damageTypeHandler(event) {

		if (!event.target.name) {
			throw new Error('Input name required');
		}

		this.handleChange(event);

		let rowIndex = null;
		const activeIndex = this.state.activeElement;
		const value = event.target.value;
		const name = event.target.name;
		const hasValue = (value !== '');
		const elements = JSON.parse(JSON.stringify(this.state.damageElements));

		elements.map((el, i)=> {
			if (el.index === activeIndex) rowIndex = i;
		});

		if (!activeIndex) {
			throw new Error('activeIndex required');
		}

		if (!hasValue) {

			// удаляем свойство
			delete elements[rowIndex][name];
			this.setState({typeRepair: ''});
		} else if (rowIndex === null) {

			// добавляем строку со свойством
			elements.push({index: activeIndex, [name]: value});
		} else {

			// редактируем или добавляем свойство
			elements[rowIndex][name] = value;
		}
		console.log(elements);
		this.setState({damageElements: elements})
	}

	typeRepairHandler(event) {

		if (!event.target.name) {
			throw new Error('Input name required');
		}

		this.handleChange(event);

		let rowIndex = null;
		const activeIndex = this.state.activeElement;
		const value = event.target.value;
		const name = event.target.name;
		const hasValue = (value !== '');
		const elements = JSON.parse(JSON.stringify(this.state.damageElements));

		elements.map((el, i)=> {
			if (el.index === activeIndex) rowIndex = i;
		});

		if (!activeIndex) {
			throw new Error('activeIndex required');
		}

		if (!hasValue) {

			// удаляем свойство
			delete elements[rowIndex][name];
		} else if (rowIndex === null) {

			// добавляем строку со свойством
			elements.push({index: activeIndex, [name]: value});
		} else {

			// редактируем или добавляем свойство
			elements[rowIndex][name] = value;
		}

		this.setState({damageElements: elements})
	}

	getElement(index) {
		let element;

		this.state.damageElements.map((el)=> {
			if (el.index === index) {
				element = el;
			}
		});

		return element;
	}

	getDamageType(index) {
		const el = this.getElement(index);
		const defaultValue = '';

		if (el && el.damageType !== '') {
			return el.damageType;
		}

		return defaultValue;
	}

	getTypeRepair(index) {
		const el = this.getElement(index);
		const defaultValue = '';

		if (el && el.typeRepair !== '') {
			return el.typeRepair;
		}

		return defaultValue;
	}

	getPhotos(index) {
		const el = this.getElement(index);

		if (el && el.photos) {
			return el.photos;
		}

		return [];
	}

	addPhoto(data, index) {

		const elements = JSON.parse(JSON.stringify(this.state.damageElements));
		if (!elements.length) {
			elements.push({index: index});
		}
		let rowIndex = null;

		elements.map((el, i) => {
			if (el.index === index) {
				rowIndex = i;
				if (!el.hasOwnProperty('photos') && !el.photos) {
					el.photos = [];
				}
				el.photos.push({filename: data.filename})
			}
		});

		if (!rowIndex) {
			elements.push({index: index});
			elements.map((el, i) => {
				if (el.index === index) {
					rowIndex = i;
					if (!el.hasOwnProperty('photos') && !el.photos) {
						el.photos = [];
					}
					el.photos.push({filename: data.filename})
				}
			});
		}

		this.setState({
			damageElements: elements,
			elementPhotos: elements[rowIndex].photos
		})
	}

	getElementLabel(elementId) {
		return this.elementLabels[elementId];
	}

	updateElementPhoto(promise, index) {
		promise.done((data)=> {
			this.addPhoto(data, index);
		});
	}

	deletePhoto(filename) {
		var index = null;
		const files = this.state[`element${this.state.activeElement}`];

		files.map((file, i)=> {
			if (file.filename === filename)
				return index = i;
		});

		if (index === null) {
			alert('Фотография не найдена!');
			return;
		}
		files.splice(index, 1);

		this.setState({[this.state.activeElement]: files});
	}

	hasBroken(index) {
		let broken = false;
		this.state.damageElements.map((item)=> {
			if (item.index === index && item.hasOwnProperty('damageType')) {
				return broken = true;
			}
		});

		return broken;
	}

	render() {
		var position = {
			1: {left: 33, top: 265},
			2: {left: 85, top: 174},
			3: {left: 85, top: 357},
			4: {left: 168, top: 265},
			5: {left: 302, top: 265},
			6: {left: 408, top: 265},
			7: {left: 575, top: 265},
			8: {left: 779, top: 265},
			9: {left: 843, top: 265},
			10: {left: 776, top: 357},
			11: {left: 776, top: 174},
			12: {left: 132, top: 519},
			13: {left: 215, top: 513},
			14: {left: 376, top: 473},
			15: {left: 514, top: 473},
			16: {left: 619, top: 512},
			17: {left: 715, top: 492},
			18: {left: 132, top: 17},
			19: {left: 215, top: 18},
			20: {left: 377, top: 58},
			21: {left: 514, top: 59},
			22: {left: 619, top: 19},
			23: {left: 715, top: 39}
		};
		return (
			<div className="exterior">
				<h1 className="app-title">Ввод данных автомобиля</h1>

				<div className="exterior__damage-visual">
					<div className="exterior__box">
						{this.elements.map((btn, i)=> {
							return <ExteriorElement
								left={position[btn.value].left} top={position[btn.value].top}
								value={btn.value}
								handler={this.elementHandler}
								hasBroken={this.hasBroken}
								active={this.state.activeElement} key={i}/>
						})}
					</div>
				</div>

				<div className="exterior-detail">
					<div className="exterior-detail__left">
						<label>
							Поврежденная деталь
							<select value={this.state.activeElement} name="activeElement" onChange={this.handleChange}>
								<option value=""> -</option>
								{this.elements.map((element, i)=> {
									return (<option value={element.value} key={i}>{element.label}</option>);
								})}
							</select>
						</label>
						<label>
							Тип повреждения
							<select value={this.state.damageType} name="damageType"
									disabled={!this.state.activeElement}
									onChange={this.damageTypeHandler}>
								<option value=""> -</option>
								{this.damageTypes.map((dt, i)=> {
									return (<option value={dt.value} key={i}>{dt.label}</option>);
								})}
							</select>
						</label>
						<label>
							Тип ремонта
							<select value={this.state.typeRepair} name="typeRepair"
									disabled={!this.state.damageType || !this.state.activeElement}
									onChange={this.typeRepairHandler}>
								<option value=""> -</option>
								{this.typeRepair.map((tr, i)=> {
									return (<option value={tr.value} key={i}>{tr.label}</option>);
								})}
							</select>
						</label>
					</div>
					<div className="exterior-detail__right">
						<label>
							Основные фотографии
							<PhotoUpload photos={this.state.elementPhotos}
										 uploadHandler={this.updateElementPhoto}
										 removePhoto={this.deletePhoto}
										 active={this.state.activeElement}/>
						</label>
					</div>
				</div>

				<nav className="nav-buttons">
					<Link to="/add-car/car-form" className="custom-btn">Назад</Link>
					<Link to="/add-car/exterior-functional" className="custom-btn">Далее</Link>
				</nav>
			</div>
		);
	}
}

export default Exterior;
