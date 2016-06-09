import React from 'react';
import carlist from '../services/carlist.service'

class Main extends React.Component {

  constructor(props) {
    super(props);
    //this.tabClick = this.tabClick.bind(this);
    this.state = {
    };

  }

  render() {
    var car = this.props.carData;
    var smallImages = [];
    if(car.carMainPhoto) {
      for (var i = 0; i < car.carMainPhoto.length; i++) {
        if(i != 0) //1st image is Main Image and should be shown already
        {
          var imgUrl = carlist.carImageUrl(car.carMainPhoto[i].filename);
          smallImages.push(<li><img src={imgUrl} width="80" height="80" alt=""/></li>);
        }

      }

    }

    return (
      <div>
        <div className="pic">
          <a href="#" className="zoom" rel="group">
            <img src={car.carlistImage} width="240" height="180" data-big="2" alt=""/></a>
        </div>
        <ul className="gallery">
          {smallImages}
        </ul>
        <div class="description">
          <h3>Описание автомобиля</h3>
          <p>{car.carDescription}</p>
          <ul class="more">
            <li>Марка <span>{car.carMake}</span></li>
            <li>Модель <span>{car.carModel}</span></li>
            <li>Модификация <span>{car.carModification}</span></li>
            <li>Год выпуска <span>{car.carRelease}</span></li>
            <li>Двигатель, объем <span>{car.carEngineVolume}</span></li>
            <li>Двигатель, л.с. <span>{car.carEngineForce}</span></li>
            <li>Двигатель, тип <span>{car.carEngineType}</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

Main.defaultProps = {};

export default Main;

