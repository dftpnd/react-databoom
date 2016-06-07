import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { carList :[]};
    
    store.getFinishedCars().done((data) => {

      var cars = [];
      for(var i=0; i<data.length; i++)
      {
        cars.push(<CarRow carData={data[i]} key={i} />);//
      }

      if(cars.length == 0)
      {
        cars = (
          <div className="title">
            <h1>На данный момент нет автомобилей с завершившимся аукционном.</h1>
          </div>
        );
      }

      this.setState({carList:cars});

    }).fail(function (){
      alert('Произошла ошибка при загрузке списка автомобилей.');
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
