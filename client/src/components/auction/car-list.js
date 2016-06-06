import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { cars :[]};

    store.getAuctionCars().done((data) => {

      console.log('store.getAuctionCars().done');
      var cars = [];
      for(var i=0; i<data.length; i++)
      {
        var car = data[i];
        cars.push(<CarRow name={car['main.Model']} />);//
      }

      this.setState({carList:cars});
    }).fail(function (){

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
