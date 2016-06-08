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
    
  }
  
  render() {
    this.car = this.props.carData;
    var car = this.car;

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
          <ul className="car-row__data sold">
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
        </div>
        <p className="bid-finished">
          <span>Дата продажи: {car.tradeEndMomentStr}</span>
        </p>

      </div>
    );
  }
}

CarRow.defaultProps = {};

export default CarRow;
