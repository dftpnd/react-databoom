import React from 'react';
import {Link} from 'react-router'

//assets
require('normalize.css/normalize.css');
require('styles/index.scss');
const imgPath = require('../../images/logotype.png');

class App extends React.Component {
  render() {
    return (
      <section className="app">
        <header className="header">
          <div className="limiter">
            <nav className="header-menu">
              <Link to='/' className="header__logo">
                <p className="header__logo--grey">Auto</p>
                <p>Gross</p>
              </Link>
              <Link to='/auction' className="item" activeClassName="active">auction</Link>
              <Link to='/add-car' className="item" activeClassName="active">add-car</Link>
              <Link to='/manager' className="item" activeClassName="active">manager</Link>
              <Link to='/manager-sold' className="item" activeClassName="active">manager-sold</Link>
              <Link to='/personal' className="item" activeClassName="active">personal</Link>
            </nav>

            <div className="header-auth">
              <div className="header-auth__profile">login</div>
              <div className="header-auth__logo">
                <img src={imgPath} className="header-auth__logo"/>
              </div>
            </div>
          </div>
        </header>

        {this.props.children }

      </section>
    );
  }
}

App.defaultProps = {};

export default App;
