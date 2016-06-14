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

	processCarList(carlist) {
		for (var i = 0; i < carlist.length; i++) {
			this.processCar(carlist[i]);
		}

		return carlist;
	}

	processCar(car) {
		car.carlistTitle = utils.checkValue(car['carMake'])
			+ ' ' + utils.checkValue(car['carModel'])
			+ ' ' + utils.checkValue(car['carRelease']);
		car.carlistSubtitle = utils.checkValue(car['carModification'])
			+ ' ' + utils.checkValue(car['carDrive'])
			+ ' ' + utils.checkValue(car['carEngineType']);

		car.carlistImage = null;
		if (car.carMainPhoto && car.carMainPhoto.length > 0) {
			car.carlistImage = this.carImageUrl(car.carMainPhoto[0].filename);
		}
	}

	carImageUrl(filename) {
		return db.getFilesCatalog() + filename;
	}

}

export default new carlist();
