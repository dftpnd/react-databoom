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

  getAuctionCars(buyer_id){
    return db.login.then(() => {
      return db.store.load('car', { filter: 'auction_step eq 1', expand: 'bids,carMainPhoto' })
        .then((carlist) => {
          return auction.processCarList(carlist, buyer_id);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })

  }

  getFinishedCars(){
    return db.login.then(() => {
      return db.store.load('car', { filter: 'auction_step eq 1', expand: 'bids,carMainPhoto' })
        .then((carlist) => {
          return auction.processFinishedCarList(carlist);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })
  }

  getSoldCars(){
    return db.login.then(() => {
      return db.store.load('car', { filter: 'auction_step eq 2', expand: 'bids,carMainPhoto,trades' })
        .then((carlist) => {
          return auction.processSoldCarList(carlist);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })
  }

  getCarBuyers()
  {
    return db.login.then(() => {
      return db.store.load('user')
        .then((users) => {
          var res = {
            dict: {},
            data: users
          };
          for (var i = 0; i < users.length; i++)
          {
            res.dict[users[i].id] = users[i];
          }
          return res;
        })
    })
  }

  getFinishedCarsWithBuyers()
  {
    var cars = [];
    var carBuyers = {};
    var promises = [
      this.getFinishedCars().done((data) => {
        cars = data;
      }),
      this.getCarBuyers().done((data) => {
        carBuyers = data.dict;
      })
    ];

    return Promise.all(promises).then(() => {
      for(var i=0; i<cars.length; i++)
      {
        cars[i].buyer = carBuyers[cars[i].buyerId];
      }
      return cars;
    });
  }

  getSoldCarsWithBuyers()
  {
    var cars = [];
    var carBuyers = {};
    var promises = [
      this.getSoldCars().done((data) => {
        cars = data;
      }),
      this.getCarBuyers().done((data) => {
        carBuyers = data.dict;
      })
    ];

    return Promise.all(promises).then(() => {
      for(var i=0; i<cars.length; i++)
      {
        cars[i].buyer = carBuyers[cars[i].buyerId];
      }
      return cars;
    });
  }

  getCarsOwnedByBuyer(buyer_id)
  {
    return db.login.then(() => {
      return db.store.load('car', { filter: 'trades/buyer eq \'' + buyer_id + '\'', expand: 'trades,carMainPhoto' })
        .then((carlist) => {
          return auction.processSoldCarList(carlist);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })
  }

  getCarsPlayedByBuyer(buyer_id)
  {
    return db.login.then(() => {
      return db.store.load('car', { filter: '(bids/buyers eq \'' + buyer_id + '\')', expand: 'bids,carMainPhoto' })
        .then((carlist) => {
          return auction.processCarList(carlist, buyer_id);
        }).then((carlist) => {
          return carlistService.processCarList(carlist);
        })
    })
  }

  save(collection, data)
  {
    return db.login.then(() => {
      return db.store.save(collection, data);
    })
  }

  getUser(username, pwd)
  {
    return db.login.then(() => {
      return db.store.load('user', { filter: '(username eq \'' + username + '\') and (pwd eq \'' + pwd + '\')' })
        .then((users) => {
          return users;
      })
    })
  }

  getCar(carId)
  {
    return db.login.then(() => {
      return db.store.load('car(' + carId + ')', { expand: "carMainPhoto,equipment,damageElements/photos" })
        .then((carlist) => {
          carlist = carlistService.processCarList(carlist);
          carlist.forEach((car) => { auction.processCar(car)});
          return carlist;
        })
    })
  }

  getClientsWithBids()
  {
    var cars = [];
    var buyersDict = {};
    var buyersList = [];
    var promises = [
      this.getAuctionCars().done((data) => {
        cars = data;
      }),
      this.getCarBuyers().done((buyers) => {
        buyersDict = buyers.dict;
        buyersList = buyers.data;
      })
    ];

    return Promise.all(promises).then(() => {

      for(var a=0; a<buyersList.length; a++)
      {
        buyersList[a].games = [];
      }

      for(var i=0; i<cars.length; i++)
      {
        var car = cars[i];
        if (car.buyers2bids)
        {
          for (var buyer_id in car.buyers2bids)
          {
            if(!car.buyers2bids.hasOwnProperty(buyer_id)) continue;
            var buyer = buyersDict[buyer_id];
            var buyer_bid = car.buyers2bids[buyer_id];
            buyer.games.push({
              car: car,
              bid: buyer_bid,
              is_max: buyer_bid.id == car.max_bid.id
            });
          }
        }
      }

      return buyersList;
    });
  }
}

export default new store();
