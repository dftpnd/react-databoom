import React from 'react';


class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
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
	handleSubmit(event) {
		event.preventDefault();
		//this.state;
	}

	render() {
		return (
			<div className="index">
				<form onSubmit={this.handleSubmit}>
					<label for="">login</label>
					<input type="text" onChange={this.handleChange} value={this.state.carMake} name="email"/> <br/>
					<label for="">password</label>
					<input type="password" onChange={this.handleChange} value={this.state.carMake} name="password"/> <br/>
					<button type="submit" >enter</button>
				</form>
			</div>
		);
	}
}

Login.defaultProps = {};

export default Login;
