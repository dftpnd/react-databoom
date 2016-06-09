import React from 'react';
import Modal from 'react-modal';
import numeral from 'numeral'
import store from '../services/store.service';

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');

const customStyles = {
	content : {
		top                   : '50%',
		left                  : '50%',
		right                 : 'auto',
		bottom                : 'auto',
		marginRight           : '-50%',
		transform             : 'translate(-50%, -50%)'
	}
};

class CarRow extends React.Component {

  constructor(props) {
    super(props);
	  this.state = {
		  modalIsOpen: false,
		  counter:1,
      newBidValue: 0

	  };
	  this.car = {};
	  this.openModal = this.openModal.bind(this);
	  this.closeModal = this.closeModal.bind(this);
	  this.makeBid = this.makeBid.bind(this);

    this.handleBidChange = this.handleBidChange.bind(this);
  }

  makeBid(){
    var bidValue = this.state.newBidValue;

    if (isNaN(bidValue)) {
      alert('Введеное значение "' + bidValue + '" не является числом. Ставка не сделана.');
      return;
    }

    if (bidValue < this.car.minBidValue) {
      alert('Введеное значение "' + bidValue + '" меньше чем минимальная ставка. Ставка не сделана.');
      return;
    }

    if(!this.props.buyerId)
    {
      return; //error case
    }

    var data = {
      id: this.car.id,
      bids: [{
        value: bidValue,
        dt: new Date(),
        buyers: [{
          id: this.props.buyerId,
          collections: [{ "id": "user" }] }],
        collections: [{ "id": "car_bid" }]
      }]
    };

    store.save('car', data).done(
      () => {
        this.closeModal();
        alert('Ваша ставка принята.');
        location.reload(); //TODO: refresh only car-list
      }).fail(function () {
        alert('Ваша ставка не принята. Произошла ошибка при отправке данных.');
    });
	}

  openModal() {
		this.setState({modalIsOpen: true});
    this.setState({newBidValue: this.car.minBidValue});
	}

	closeModal() {
    this.setState({modalIsOpen: false});

	}

  handleBidChange (event) {
    this.setState({newBidValue: event.target.value});
  }

  render() {
    this.car = this.props.carData;
    var car = this.car;

    var msg_part;

    if(car.has_my_bids)
    {
      if(car.my_bid_wins)
      {
        msg_part = (<span><i className="status-ok"></i>Вы выигрываете</span>);
      }else
      {
        msg_part = (<span><i className="status-warning"></i>Вы проигрываете</span>);
      }
    }else
    {
      msg_part = (<span></span>);
    }

    return (
      <div className="car-row">
        <div className="car-row__pic">
          <img src={this.props.carData.carlistImage} width="220" height="160" alt=""/>
        </div>
        <div className="car-row__desc">
          <a href={"/car-view/" + this.props.carData.id} target="_blank"><h2>{this.props.carData.carlistTitle}</h2></a>
          <p>{this.props.carData.carlistSubtitle}</p>
        </div>
        <ul className="car-row__data">
          <li>
            <i className="rouble-icon"></i>
            <p>Текущая ставка</p>
            <h3>{numeral(car.max_bid.value).format('0,0[.]00')} <em className="rouble">Р</em></h3>
          </li>
          <li>
            <i className="clock-icon"></i>
            <p>Завершение</p>
            <h5>{car.timeLeftStr}</h5>
          </li>
        </ul>
        <p className="car-row__your-status auction">
          {msg_part}
        </p>
        <button className="car-row__make-bid common-button" onClick={this.openModal} type="button">Сделать ставку</button>
		  <Modal
			  isOpen={this.state.modalIsOpen}
			  onRequestClose={this.closeModal}
			  style={customStyles}
			  >
        <h2>Новая ставка</h2>
        <p>Текущая ставка: {car.max_bid.value} Р</p>
        <p>Минимальная ставка: {car.minBidValue} Р</p>
        <p><span>Ваша ставка</span><input type="text" value={this.state.newBidValue} onChange={this.handleBidChange} /></p>
			  <button type="button" className="common-button" onClick={this.makeBid} >Сделать ставку на аукционе</button>
			  <button onClick={this.closeModal} className="common-button" type="button">Закрыть</button>

		  </Modal>
      </div>
  );
  }
}

CarRow.defaultProps = {};

export default CarRow;
