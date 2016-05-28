'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
//lib

import './lib/jquery-builder-ajax-2.1.1';
import './lib/databoom';
//var asd = require('./lib/databoom');


import App from 'components/app/app';
import AddCar from 'components/add-car/add-car';
import Auction from 'components/auction/auction';
import Login from './components/login/login';
//import Auth from './components/auth/auth';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


function requireAuth() {
	//nextState, replaceState
	//if (!Auth.loggedIn())
	//	replaceState({nextPathname: nextState.location.pathname}, '/login')
}


ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Auction} onEnter={requireAuth}/>
			<Route path="/auction" component={Auction} onEnter={requireAuth}/>
			<Route path="/add-car/:stepName" component={AddCar}/>
			<Route path="/login" component={Login} onEnter={requireAuth}/>
		</Route>
	</Router>
), document.getElementById('app'));