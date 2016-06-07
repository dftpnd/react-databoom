'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
//lib

import 'components/services/db.service';

import App from 'components/app/app';
import AddCar from 'components/add-car/add-car';
import addCarService from 'components/add-car/add-car.service';
import Auction from 'components/auction/auction';
import Manager from 'components/manager/manager';
import Login from './components/login/login';
//import Auth from './components/auth/auth';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


function requireAuth() {
	//nextState, replaceState
	//if (!Auth.loggedIn())
	//	replaceState({nextPathname: nextState.location.pathname}, '/login')
}

let redirected = false;
function handlerRouter(nextState, replace) {
	requireAuth(arguments);
	const step = nextState.params.stepName;
	if (addCarService.checkStep(step)) {
		addCarService.setActiveStep(step);
		redirected = false;
	} else {
		if (!redirected) {
			replace(addCarService.getAvailableStep(step));
			redirected = true;
		}
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Auction} onEnter={requireAuth}/>
			<Route path="auction" component={Auction} onEnter={requireAuth}/>
      <Route path="manager" component={Manager} onEnter={requireAuth}/>
			<Route path="add-car" component={AddCar}>
				<Route path=":stepName" component={AddCar} onEnter={handlerRouter}/>
			</Route>
			<Route path="login" component={Login} onEnter={requireAuth}/>
		</Route>
	</Router>
), document.getElementById('app'));
