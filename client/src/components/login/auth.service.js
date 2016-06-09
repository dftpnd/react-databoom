let instance = null;

class auth {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.getUserId = this.getUserId.bind(this);
  }

  getUserId(){
    if(localStorage['userinfo'])
    {
      var userinfo = JSON.parse(localStorage['userinfo']);
      return userinfo.id;
    }

  }

  getUserTitle(){
    if(localStorage['userinfo'])
    {
      var userinfo = JSON.parse(localStorage['userinfo']);
      return userinfo.name;
    }

  }  
}

export default new auth();
