import React from 'react';
import CarRow from './car-row';

class CarList extends React.Component {

  constructor() {
    super();
  }

  render() {

    //var elem = (<div>123</div>);

    var cars = [];

    for(var i=0; i<10; i++)
    {
      cars.push(<CarRow/>);
    }

     
    return (
      <div className="car-list">
        {cars}
      </div>
    );
  }
}

CarList.defaultProps = {};

export default CarList;
