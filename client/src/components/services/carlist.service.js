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
    car.carlistTitle = utils.checkUndefined(car['main.Model_mark'])
      + ' ' + utils.checkUndefined(car['main.Model'])
      + ' ' + utils.checkUndefined(car['main.Year']);
    car.carlistSubtitle = utils.checkUndefined(car['main.Modification'])
      + ' ' + utils.checkUndefined(car['main.Drivetrain'])
      + ' ' + utils.checkUndefined(car['main.Engine_type']);

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
