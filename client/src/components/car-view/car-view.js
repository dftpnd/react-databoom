import React from 'react';
import store from '../services/store.service'
import Main from './car-view-main';
import Equipment from './car-view-equipment';
import Damage from './car-view-damage';

var viewMap = {
  'main': <Main/>,
  'equipment': <Equipment/>,
  'damage': <Damage/>
};

class CarView extends React.Component {

  constructor(props) {
    super(props);
    this.tabClick = this.tabClick.bind(this);
    this.state = {
      carData: {},
      tab: viewMap['main'],
      tabName: 'main'
    };

    var carId = this.props.params.carId;
    store.getCar(carId).done((data) => {

      if(data.length)
      {
        this.setState({carData:data[0]});
      }else
      {
        alert('Неверный адрес страницы.');
      }

    }).fail(function (){
      alert('Ошибка при загрузке данных автомобиля');
    })
  }

  tabClick(event) {
    var viewName = event.currentTarget.name;
    console.log(viewName);
    this.setState({
      tab: viewMap[viewName],
      tabName: viewName
    });
    
  }

  render() {
    return (
      <div className="limiter wrapper car-view">
        <div className="content-wrapper">
          <div className="car-title">
            <h1>BMW 1er II (F20-F21) 116i</h1>
            <p>1,6 AT (136 л.с.) бензин, задний привод</p>
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
