import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { carList :[]};

    store.getAuctionCars().done((data) => {
      
      var cars = [];
      for(var i=0; i<data.length; i++)
      {
        cars.push(<CarRow carData={data[i]} key={i} />);//
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

    //var elem = (<div>123</div>);

    //store.getAuctionCars().

    /*
    var cars = [];

    for(var i=0; i<10; i++)
    {
      cars.push(<CarRow/>);
    }
  */

    return (
      <div className="car-list">
        {this.state.carList}
      </div>
    );
  }
}

CarList.defaultProps = {};

export default CarList;
