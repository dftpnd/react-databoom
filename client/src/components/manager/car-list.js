import React from 'react';
import CarRow from './car-row';
import store from '../services/store.service';
import ManagerService from './manager.service'

class CarList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { carList :[]};

    store.getFinishedCarsWithBuyers().then((data) => {
      var carlist = ManagerService.processFinishedCarlist(data);
      console.log(JSON.stringify(carlist, null, '\t'));
      
      var carRows = [];
      for(var i=0; i<carlist.length; i++)
      {
        carRows.push(<CarRow carData={carlist[i]} key={i} />);//
      }

      if(carRows.length == 0)
      {
        carRows = (
          <div className="title">
            <h1>На данный момент нет автомобилей с завершившимся аукционном.</h1>
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
