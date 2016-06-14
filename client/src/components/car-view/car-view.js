import React from 'react';
import store from '../services/store.service';
import Main from './car-view-main';
import CarViewEquipment from './car-view-equipment';
import Damage from './car-view-damage';
import auction from '../services/auction.service';
import {Link} from 'react-router';

class CarView extends React.Component {
	constructor(props) {
		super(props);
		this.makeBidClick = this.makeBidClick.bind(this);
		this.getDamageLength = this.getDamageLength.bind(this);

		this.state = {
			damageLength: 0,
			carData: {
				carlistTitle: '',
				carlistSubtitle: ''
			},
			tab: (<span></span>),
			tabName: this.props.params.tabName
		};

		this.viewMap = null;
		var carId = this.props.params.carId;
		this.loading = store.getCar(carId).done((data) => {
			if (data.length) {
				var car = data[0];
				this.viewMap = {
					'info': <Main carData={car}/>,
					'equipment': <CarViewEquipment carData={car}/>,
					'damage': <Damage carData={car} damageLength={this.getDamageLength(car.damageElements)}/>
				};
				this.setState({
					carData: car,
					damageLength: this.getDamageLength(car.damageElements),
					tab: this.viewMap[this.state.tabName]
				});
			} else {
				alert('Неверный адрес страницы.');
			}

		}).fail(function () {
			alert('Ошибка при загрузке данных автомобиля');
		})
	}

	getDamageLength(damageElements) {
		var damages = 0;

		if (damageElements)
			damageElements.map((el)=> {
				if (el.hasOwnProperty('damageType')) {
					++damages;
				}
			});

		return damages;
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			tabName: nextProps.params.tabName,
			tab: this.viewMap[nextProps.params.tabName]
		});
	}

	makeBidClick() {
		var car = this.state.carData;
		if (auction.isCarOnAuction(car)) {
			localStorage['auction:showBidDialog'] = car.id;
			window.location = '/auction';
		} else {
			alert('Ставка не сделана. Данный автомобиль уже не находится на аукционе.')
			location.reload();
			return;
		}
	}

	render() {
		var car = this.state.carData;
		var canMakeBids = auction.isCarOnAuction(car) ? '' : 'disabled';

		return (
			<div className="limiter wrapper car-view">
				<div className="content-wrapper">
					<div className="car-title">
						<h1>{this.state.carData.carlistTitle}</h1>
						<p>{this.state.carData.carlistSubtitle}</p>
						<button className={"common-button " + canMakeBids} disabled={canMakeBids} type="button"
								onClick={this.makeBidClick}>Сделать ставку
						</button>
					</div>
					<ul className="tabs-nav">
						<li className={this.state.tabName=='info'?'active':''}>
							<Link to={'/car-view/info/'+this.props.params.carId}>Общая информация</Link>
						</li>
						<li className={this.state.tabName=='equipment'?'active':''}>
							<Link to={'/car-view/equipment/'+this.props.params.carId}>Комплектация</Link>
						</li>
						<li className={this.state.tabName=='damage'?'active':''}>
							<Link to={'/car-view/damage/'+this.props.params.carId}>
								Повреждения
								<sub>{this.state.damageLength}</sub>
							</Link>
						</li>
					</ul>
					{this.state.tab}
				</div>
			</div>
		);
	}
}

export default CarView;
