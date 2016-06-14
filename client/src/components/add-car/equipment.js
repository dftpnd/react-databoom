import { browserHistory } from 'react-router';
import React from 'react';
import Modal from 'react-modal';
import addCarService from './add-car.service';
import EquipmentView from './equipment-view';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		overflow: 'visible'
	}
};

class Equipment extends React.Component {
	constructor(props) {
		super(props);
		//localStorage.clear();

		const defaultState = {
			publicateModalIsOpen: false,
			upholstery: 'cloth',
			interiorColor: 'dark',
			airbags: 'missing',
			climate: 'absent',
			powerWindows: 'hand',
			driverSeat: 'manualAdjustment',
			passengerSeat: 'manualAdjustment',
			adjustment: 'absent',
			security: [],
			equipment: [],
			comfort: [],
			exterior: [],
			multimedia: [],
			signaling: [],
			auction_time_mins: 24
		};

		this.state = JSON.parse(localStorage.getItem('equipmentState')) || defaultState;
		this.state.publicateModalIsOpen = false;

		this.fieldHandler = this.fieldHandler.bind(this);
		this.checkHandler = this.checkHandler.bind(this);
		this.publishCar = this.publishCar.bind(this);
		this.publicateModalClose = this.publicateModalClose.bind(this);
		this.openPublishModal = this.openPublishModal.bind(this);

		this.handleChangeForAuctionMins = this.handleChangeForAuctionMins.bind(this);
	}

	componentWillUpdate(_, nextProps) {
		localStorage.setItem('equipmentState', JSON.stringify(nextProps));
	}

	formHandler() {

	}

	fieldHandler(event) {
		this.setState({[event.target.name]: event.target.value})
	}

	checkHandler(event) {
		const checkList = this.state[event.target.name];
		var removeItem = null;

		checkList.forEach((item, index)=> {
			if (item.value === event.target.value) {
				return removeItem = index;
			}
		});

		if (removeItem !== null) {
			checkList.splice(removeItem, 1);
		} else {
			checkList.push({value: event.target.value});
		}
		this.setState({[event.target.name]: checkList})
	}

	openPublishModal() {
		this.setState({publicateModalIsOpen: true});
	}

	publicateModalClose() {
		this.setState({publicateModalIsOpen: false});
	}

	publishCar() {
		addCarService.save().then((data) => {
				alert('Автомобиль выставлен на аукцион.');
				this.setState({publicateModalIsOpen: false});

        var userinfo_str = localStorage['userinfo'];
				localStorage.clear();
        localStorage['userinfo']=userinfo_str;

				console.log('Данные автомобиля:',JSON.stringify(data, null, '\t'));
				browserHistory.push('/auction');
			},
			() => {
				alert('Произошла ошибка при добавлении автомобиля на аукцион');
			});

		//alert('Данные формы скоро будут записываться в базу, а пока можно посмотреть консоль с данными.');
		//localStorage.clear();
		//alert('Данные типо отправлениы');

	}

	securityIsActive(value) {
		return this.state.security.map(e=>e.value).indexOf(value) !== -1;
	}

	equipmentIsActive(value) {
		return this.state.equipment.map(e=>e.value).indexOf(value) !== -1;
	}

	comfortIsActive(value) {
		return this.state.comfort.map(e=>e.value).indexOf(value) !== -1;
	}

	exteriorIsActive(value) {
		return this.state.exterior.map(e=>e.value).indexOf(value) !== -1;
	}

	multimediaIsActive(value) {
		return this.state.multimedia.map(e=>e.value).indexOf(value) !== -1;
	}

	signalingIsActive(value) {
		return this.state.signaling.map(e=>e.value).indexOf(value) !== -1;
	}

	handleChangeForAuctionMins(event) {
		var value = event.target.value;
		if (isNaN(value)) {
			alert('Введеное значение "' + value + '" не является числом.');
			return;
		}

		if (value < 1) {
			alert('Введеное значение "' + value + '" меньше 1. Значение должно быть большим или равным 1.');
			return;
		}

		this.setState({auction_time_mins: value});
	}

	render() {
		return (
			<div className="index">
				<h1 className="app-title">Комплектация</h1>

				<EquipmentView data={this.state}/>

				<nav className="nav-buttons">
					<div></div>
					<button className="common-button put-on" type="button" onClick={this.openPublishModal}>Выставить на
						аукцион
					</button>

					<Modal
						isOpen={this.state.publicateModalIsOpen}
						onRequestClose={this.publicateModalClose}
						shouldCloseOnOverlayClick={false}
						style={customStyles}>
						<h2 className="modal__title">Выставление автомобиля на аукцион</h2>
						Длительность аукциона:
						<input type="number" value={this.state.auction_time_mins}
							   onChange={this.handleChangeForAuctionMins}/>
						<br/>
						<button className="common-button put-on" onClick={this.publishCar}>Выставить на аукцион</button>
						<button className="modal__close" onClick={this.publicateModalClose}></button>
					</Modal>

				</nav>
			</div>
		);
	}
}

export default Equipment;
