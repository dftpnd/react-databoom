import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { carList :[]};
    var buyerId="2601ac6f-fa0b-40c4-92bb-f48950ca6f9c";


    store.getAuctionCars(buyerId).done((data) => {

      console.log(JSON.stringify(data, null, '\t'));
      var cars = [];
      for(var i=0; i<data.length; i++)
      {
        cars.push(<CarRow carData={data[i]} key={i} buyerId={buyerId}/>);//
      }

      if(cars.length == 0)
      {
        cars = (
          <div className="title">
            <h1>На данный момент на аукцион не выставлено ни одного автомобиля.</h1>
          </div>
          );
      }

      this.setState({carList:cars});

    }).fail(function (){
      //TODO
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
