import React from 'react';
import store from '../services/store.service';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		if (!event.target.name) {
			throw new Error('Input name required');
		}
		const newState = {[event.target.name]: event.target.value};
		this.setState(newState);
	}

	handleSubmit() {

		var username = this.state.login;
		var password = this.state.password;
		store.getUser(username, password).then((users) => {
			if (users.length > 0) {
				var userinfo = {
					username: username,
					id: users[0].id,
					name: users[0].name,
          isAdmin: users[0].is_admin,
          isBuyer: users[0].is_buyer,
          isManager: users[0].is_manager,
          isCarAdder: users[0].is_caradder
				};
				localStorage['userinfo'] = JSON.stringify(userinfo);
				location.reload();
			} else {
				alert('Не удалось войти. Возможно было указано неверное имя пользователя или пароль.');
			}
		})

	}

	render() {
		return (
			<div className="login-form">

				<div className="pen-title">

				</div>

				<div className="module form-module">
					<div className="toggle">
					</div>
					<div className="form">
						<h2>Вход в AutoGross</h2>
						<form>
							<input type="text" placeholder="Имя пользователя" value={this.state.login}
								   onChange={this.handleChange} name="login"/>
							<input type="password" placeholder="Пароль" value={this.state.password}
								   onChange={this.handleChange} name="password"/>
							<button onClick={this.handleSubmit} type="button">Вход</button>
						</form>
					</div>
					<div className="cta"><a href="http://andytran.me">Forgot your password?</a></div>
				</div>

			</div>

			/*			<div className="index">
			 <form onSubmit={this.handleSubmit}>
			 <label for="">login</label>
			 <input type="text" onChange={this.handleChange} value={this.state.carMake} name="email"/> <br/>
			 <label for="">password</label>
			 <input type="password" onChange={this.handleChange} value={this.state.carMake} name="password"/> <br/>
			 <button type="submit" >enter</button>
			 </form>
			 </div>*/


		);
	}
}


export default Login;
