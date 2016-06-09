import React from 'react';
import store from '../services/store.service'
import Main from './car-view-main';
import CarViewEquipment from './car-view-equipment';
import Damage from './car-view-damage';

class CarView extends React.Component {
  constructor(props) {
    super(props);
    this.tabClick = this.tabClick.bind(this);
    this.state = {
      carData: {
        carlistTitle: '',
        carlistSubtitle: ''
      },
      tab: (<span></span>),
      tabName: 'main'
    };

    this.viewMap = null;
    var carId = this.props.params.carId;
    this.loading = store.getCar(carId).done((data) => {
      if(data.length)
      {
        var car = data[0];
        this.viewMap = {
          'main': <Main carData={car}/>,
          'equipment': <CarViewEquipment carData={car}/>,
          'damage': <Damage carData={car}/>
        };
        this.setState({
          carData:car,
          tab: this.viewMap['main'],
        });
        console.log(JSON.stringify(car,null,'\t'));
      }else
      {
        alert('Неверный адрес страницы.');
      }

    }).fail(function (){
      alert('Ошибка при загрузке данных автомобиля');
    })
  }

  tabClick(event) {
    if(this.viewMap) {
      var viewName = event.currentTarget.name;
      console.log(viewName);
      this.setState({
        tab: this.viewMap[viewName],
        tabName: viewName
      });
    }else
    {
      //car data not loaded yet
      return false;
    }
  }

  render() {
    return (
      <div className="limiter wrapper car-view">
        <div className="content-wrapper">
          <div className="car-title">
            <h1>{this.state.carData.carlistTitle}</h1>
            <p>{this.state.carData.carlistSubtitle}</p>
            <button className="common-button">Сделать ставку</button>
          </div>
          <ul className="tabs-nav">
            <li className={this.state.tabName=='main'?'active':''}><a href="javascript:void(0)" onClick={this.tabClick} name="main">Общая информация</a></li>
            <li className={this.state.tabName=='equipment'?'active':''}><a href="javascript:void(0)" onClick={this.tabClick} name="equipment">Комплектация</a></li>
            <li className={this.state.tabName=='damage'?'active':''}><a href="javascript:void(0)" onClick={this.tabClick} name="damage">Повреждения<sub>3</sub></a></li>
          </ul>
          {this.state.tab}
        </div>
      </div>
    );
  }
}
CarView.defaultProps = {};

export default CarView;
