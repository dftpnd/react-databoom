let instance = null;

class utils {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  checkValue(value){
    if(value == undefined || value == null)
    {
      return '';
    }else
    {
      return value;
    }
  }

}

export default new utils();
