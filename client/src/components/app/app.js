import React from 'react';
import {Link} from 'react-router'
import Login from '../login/login'
import auth from '../login/auth.service'

//assets
require('normalize.css/normalize.css');
require('styles/index.scss');
const imgPath = require('../../images/user.png');

class App extends React.Component {

	constructor(props) {
		super(props);

		this.logout = this.logout.bind(this);
	}

	logout() {
		localStorage.clear();
		location.reload();
	}

	render() {

		var res;
		var userinfo = localStorage['userinfo'];
		if (userinfo) {
			res = (<section className="app">
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
              <Link to='/manager-clients' className="item" activeClassName="active">manager-clients</Link>
							<Link to='/personal' className="item" activeClassName="active">personal</Link>
						</nav>

						<div className="header-auth">
							<div className="header-auth__profile">
								<a href="javascript:void(0)" onClick={this.logout}> Выход</a>
							</div>

							<div className="header-auth__logo">
								<img src={imgPath} className="header-auth__logo"/>
							</div>
							{auth.getUserTitle()}
						</div>
					</div>
				</header>

				{this.props.children }

			</section>      )
		} else {
			res = (<section className="app">
				<Login/>
			</section>      )
		}

		return res;
	}
}

App.defaultProps = {};

export default App;
