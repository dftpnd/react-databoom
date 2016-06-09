import React from 'react';
import CarRow from './car-row-bought';
import store from '../services/store.service';
import auth from '../login/auth.service';

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { carList :[]};

    var buyerId = auth.getUserId();

    store.getCarsOwnedByBuyer(buyerId).then((carlist) => {

        var carRows = [];
        for(var i=0; i<carlist.length; i++)
        {
          carRows.push(<CarRow carData={carlist[i]} key={i}/>);//
        }

        if(carRows.length == 0)
        {
          carRows = (
            <div className="title">
              <h1>Вы пока не купили ни одного автомобиля.</h1>
            </div>
          );
        }
        this.setState({carList:carRows});
      },
      (error) => {
        alert('Произошла ошибка при загрузке списка автомобилей. Текст ошибки: ' + JSON.stringify(error));
      })
  }

  render() {
    return (
      <div className="car-list">
        {this.state.carList}
      </div>
    );
  }
}

CarList.defaultProps = {};

export default CarList;
