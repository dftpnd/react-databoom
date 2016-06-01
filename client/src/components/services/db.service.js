import databoom from '../../lib/databoom';

let instance = null;

class db {
	constructor() {
		if (!instance) {
			instance = this;
		}
		var db_name = 'b276';
		var db_url = 'https://t276.databoom.space';

		this.store  = databoom(db_url, db_name);

		this.store.login('default', '123');

		return instance;
	}
}

export default new db();