import db from '../services/db.service';
import auction from '../services/auction.service';
import carlistService from '../services/carlist.service';
let instance = null;

class store {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  getAuctionCars(){
    var buyer_id = 'sdsdsd';

    return db.login.then(() => {
      return db.store.load('car', { filter: 'auction_step eq 1', expand: 'bids,images_main,schemeparts' })
        .then((carlist) => {
          return auction.processCarList(carlist, buyer_id);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })


  }
}

export default new store();
