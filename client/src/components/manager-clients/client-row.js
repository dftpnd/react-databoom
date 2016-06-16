import React from 'react';
import {Link} from 'react-router';
import numeral from 'numeral'

import ru from 'numeral/languages/ru';
numeral.language('ru', ru);
numeral.language('ru');

class ClientRow extends React.Component {

  constructor(props) {
    super(props);
    this.client = {};
  }

  render() {
    this.client = this.props.clientData;
    var client = this.client;

    return (
      <tr>
        <td><a href={"/client-view/" + client.id}><i className="edit-icon"></i></a>{client.name}</td>
        <td>{client.games.length}<a href={"/client-games/" + client.id}><i className="arrow-icon"></i></a></td>
        <td>{client.phone}</td>
        <td>{client.email}</td>
        <td>{client.company}</td>
      </tr>
    );
  }
}

ClientRow.defaultProps = {};

export default ClientRow;
