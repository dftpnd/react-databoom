import db from '../services/db.service';
import utils from '../services/utils.service'

let instance = null;

class carlist {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  processCarList(carlist){
    for(var i=0; i<carlist.length; i++){
      this.processCar(carlist[i]);
    }

    return carlist;
  }

  processCar(car){
    car.carlistTitle = utils.checkValue(car['main.Model_mark'])
      + ' ' + utils.checkValue(car['main.Model'])
      + ' ' + utils.checkValue(car['main.Year']);
    car.carlistSubtitle = utils.checkValue(car['main.Modification'])
      + ' ' + utils.checkValue(car['main.Drivetrain'])
      + ' ' + utils.checkValue(car['main.Engine_type']);

    car.carlistImage = null;
    if (car.images_main && car.images_main.length > 0)
    {
      car.carlistImage = this.carImageUrl(car.images_main[0].filename);
    }
  }

  carImageUrl(filename) {
    return db.getFilesCatalog() + filename;
  }


}

export default new carlist();
