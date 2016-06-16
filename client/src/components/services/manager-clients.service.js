let instance = null;

class ManagerClientsService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  processClientsList(carlist){
    for(var i=0; i<carlist.length; i++)
    {
      var car = carlist[i];
      car.buyerPhone = '';
      if(car.buyer && car.buyer.phone)
      {
        car.buyerPhone = car.buyer.phone;
      }

    }
    return carlist;
  }

}

export default new ManagerClientsService();
