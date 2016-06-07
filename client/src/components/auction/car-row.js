import React from 'react';
import Modal from 'react-modal';
import numeral from 'numeral'

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');

class CarRow extends React.Component {

  constructor(props) {
    super(props);
	  this.state = {
		  modalIsOpen: false
	  };
	  this.openModal = this.openModal.bind(this);
	  this.closeModal = this.closeModal.bind(this);
  }
	openModal() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		this.setState({modalIsOpen: false});
	}
  render() {
    var msg_part;
    var car = this.props.carData;
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
          <h2>{this.props.carData.carlistTitle}</h2>
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
        <p className="car-row__your-status">
          {msg_part}
        </p>
        <button className="car-row__make-bid common-button" onClick={this.openModal}>Сделать ставку</button>
		  <Modal
			  isOpen={this.state.modalIsOpen}
			  onRequestClose={this.closeModal}
			  >

			  <h2>Hello</h2>

		  </Modal>
      </div>
  );
  }
}

CarRow.defaultProps = {};

export default CarRow;
