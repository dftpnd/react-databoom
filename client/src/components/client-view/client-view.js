import React from 'react';
import ClientViewForm from './client-view-form'

class ClientView extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="limiter wrapper">
        <div className="content-wrapper">
          <h1>Сведения о клиенте</h1>
          <ClientViewForm clientId={this.props.params.clientId}  />
        </div>

      </div>
    );
  }
}

export default ClientView;
