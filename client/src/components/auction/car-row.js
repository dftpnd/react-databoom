import React from 'react';

class CarRow extends React.Component {
  render() {
    return (
      <div className="car-row">

        <div className="car-row__pic">
          <img src="../images/test-car-image-1.jpg" width="220" height="160" alt=""/>
        </div>
        <div className="car-row__desc">
          <h2>BMW 1er II (F20-F21) 116i</h2>
          <p>1,6 AT (136 л.с.) бензин, задний привод, хэтчбек 5 дв., черный</p>
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
