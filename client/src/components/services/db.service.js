import databoom from '../../lib/databoom';

let instance = null;

class db {
	constructor() {
		if (!instance) {
			instance = this;
		}
		var db_name = 'b276';
		var db_url = 'https://t276.databoom.space';

		this.login = this.store  = databoom(db_url, db_name);

		this.store.adminlogin('t276', '123');

		return instance;
	}

  getFilesCatalog(){
    return 'https://t276.databoom.space/uploads/t276/b276/';
  }
}

export default new db();
