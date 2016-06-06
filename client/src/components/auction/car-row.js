import React from 'react';

class CarRow extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
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
            <h3>680 000 <em className="rouble">Р</em></h3>
          </li>
          <li>
            <i className="clock-icon"></i>
            <p>Текущая ставка</p>
            <h5>22 мин 30 сек</h5>
          </li>
        </ul>
        <p className="car-row__your-status">
          <i className="status-ok"></i>Вы выигрываете
        </p>
        <button className="car-row__make-bid common-button" data-open="put-on">Сделать ставку</button>
      </div>
  );
  }
}

CarRow.defaultProps = {};

export default CarRow;
