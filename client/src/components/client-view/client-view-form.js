import React from 'react';
import store from '../services/store.service';
import auth from '../login/auth.service'

class ClientViewForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      clientData: {
        /* these fields declarayions are required to fix 'changing an uncontrolled input of type text to be controlled'*/
        username: '',
        pwd: '',
        name: '',
        phone: '',
        email: '',
        company: ''

      },
      dummyStyle: {display: 'none'} //TODO: use loading panel instead of show/hide
    };
    this.user = auth.getUser();

    var clientId = this.props.clientId;
    this.loading = store.getUserById(clientId).done((data) => {
      if (data.length) {
        var user = data[0];
        this.setState({
          clientData: user
        });
        this.setShown();
      } else {
        alert('Неверный адрес страницы.');
      }

    }).fail(function () {
      alert('Ошибка при загрузке данных пользователя');
    });

    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setHidden = this.setHidden.bind(this);
    this.setShown = this.setShown.bind(this);
  }

  setHidden() {
    this.setState({
      dummyStyle: {display: 'none'}
    });
  }

  setShown()
  {
    this.setState({
      dummyStyle: {}
    });

  }

  handleChange(event) {
    if (!event.target.name) {
      throw new Error('Input name required');
  }
    const newClientData = this.state.clientData;
    newClientData[event.target.name] = event.target.value;
    this.setState({
      clientData: newClientData
    });
  }

  save()
  {
    this.setHidden();
    store.save('user', this.state.clientData).done(() => {
      this.setShown();
    }).fail(() => {
      alert('Ошибка при сохранении данных.');
      this.setShown();
    });
  }

  render() {
    var isAdmin = this.user.isAdmin;
    var isManager = this.user.isManager;

    var field = (label, name, editable) => {
      return (
        <div className="item" key={name}>
          <p>{label}</p>
          <input type="text" value={this.state.clientData[name]} readOnly={!editable} onChange={this.handleChange} name={name}/>
        </div>
      )
    };

    var saveButton = null;
    if(this.user.isAdmin || this.user.isManager)
    {
      saveButton = (
        <div className="controls" key="save_button">
          <button className="common-button" onClick={this.save}>Сохранить изменения</button>
        </div>
      );
    }

    var pwdField = null;
    if(this.user.isAdmin)
    {
      pwdField = field('Пароль','pwd', isAdmin);
    }

    var items = [
      field('Имя пользователя (логин)','username', isAdmin),
      pwdField,
      field('Имя','name', isAdmin || isManager),
      field('Телефон','phone', isAdmin || isManager),
      field('E-mail','email', isAdmin || isManager),
      field('Организация','company', isAdmin || isManager),
      saveButton
    ];

    return (
      <div className="client-view" style={this.state.dummyStyle}>
        <div className="form" >
          {items}
        </div>
      </div>
    );
  }
}

export default ClientViewForm;
