import React from 'react';

import ClientList from './client-list';

class ManagerClients extends React.Component {

  render() {
    return (
      <div className="limiter wrapper">
        <div className="clients-list-wrapper">
          <ClientList/>
        </div>
      </div>
    );
  }
}

export default ManagerClients;
