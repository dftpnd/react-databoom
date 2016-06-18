import React from 'react';
import ClientRow from './client-row';
import store from '../services/store.service';

class ClientList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { clientsList :[]};

    store.getClientsWithBids().then((data) => {


        var rows = [];
        for(var i=0; i<data.length; i++)
        {
          rows.push(<ClientRow clientData={data[i]} key={i} />);//
        }

        if(rows.length == 0)
        {
          rows = (
            <div className="title">
              <h1>На данный момент нет клиентов</h1>
            </div>
          );
        }
        this.setState({clientsList:rows});
      },
      (error) => {
        alert('Произошла ошибка при загрузке списка клиентов. Текст ошибки: ' + JSON.stringify(error));
      })
  }

  render() {
    return (
      <div className="clients-list">
        <h1>Мои клиенты</h1>

        <table>
          <thead>
          <tr>
            <th>Клиент</th>
            <th>Играет</th>
            <th>Телефон</th>
            <th>Почта</th>
            <th>Организация</th>
          </tr>
          </thead>
          <tbody>
            {this.state.clientsList}
          </tbody>
        </table>
      </div>
    );
  }
}

ClientList.defaultProps = {};

export default ClientList;
