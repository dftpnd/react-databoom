import React from 'react';
import numeral from 'numeral'
import store from '../services/store.service';

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');


class CarRow extends React.Component {

  constructor(props) {
    super(props);
    this.car = {};
    this.state = {
      buttonsDisabled: false
    };

    this.confirm = this.confirm.bind(this);
    this.refuse = this.refuse.bind(this);
  }

  confirm(){
    var save_data = {
      id: this.car.id,
      auction_step: 2,
      trade_accepted: true,
      trades: [{
        collections: [{ id: 'car_trade' }],
        car: [{ id: this.car.id }],
        buyer: [{ id: this.car.buyerId }],
        price: this.car.max_bid.value,
        dt: new Date()
      }]
    };

    this.setState({buttonsDisabled: true});

    store.save('car', save_data).done(() => {
      alert('Продажа автомобиля подтверждена');
      this.setState({buttonsDisabled: false});
      location.reload();
    }).fail(() => {
      alert('Ошибка при сохранении данных.');
      this.setState({buttonsDisabled: false});
    });
  }

  refuse() {
    var save_data = {
      id: this.car.id,
      auction_step: 2,
      trade_accepted: false

    };
    this.setState({buttonsDisabled: true});
    store.save('car', save_data).done(() => {
      alert('Результаты торгов отменены.');
      this.setState({buttonsDisabled: false});
      location.reload();
    }).fail(() => {
      alert('Ошибка при сохранении данных.');
      this.setState({buttonsDisabled: false});
    });
  }

  render() {
    this.car = this.props.carData;
    var car = this.car;

    var msg_part;

    if(car.bids && car.bids.length)
    {
      msg_part = (<span>
        <button className="car-row__accept common-button" type="button"
                onClick={this.confirm} disabled={this.state.buttonsDisabled} >Принять</button>
        <button className="car-row__decline common-button" type="button"
                onClick={this.refuse} disabled={this.state.buttonsDisabled} >Отклонить</button>
      </span>);
    }else
    {

      msg_part = (
        <p className="car_row__fail">
          <span>Торги не состоялись.</span>
          <span>Нет ставок.</span>
        </p>);
    }

    return (
      <div>
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
              <i className="user-icon"></i>
              <p>Победитель</p>
              <h5>{car.buyerPhone}</h5>
            </li>
          </ul>
          {msg_part}
        </div>
        <p className="bid-finished">
          <span>Торги завершены: {car.endMomentStr}</span>
          <span>Длительность торгов: {car.tradesDurationHours}</span>
          <span>Ставок: {car.bidsCount}</span>
        </p>

      </div>
    );
  }
}

CarRow.defaultProps = {};

export default CarRow;
