import React from 'react';

class CarForm extends React.Component {
	constructor() {
		super();
		this.state = {
			carModelOptions: [{name: 'corsa', value: 123}, {name: 'astra', value: 777}],
			disableCarModel: false,
			form: {
				carMake: 'A',
				carModel: 'B'
			}
		};


		this.handleChange = this.handleChange.bind(this);
		this.handleCarMake = this.handleCarMake.bind(this);
	}

	handleChange(event) {
		var newState = {form: {}};
		newState.form[event.target.name] = event.target.value;
		this.setState(newState);

		if (!event.target.value) {

		};
	}

	handleCarMake(event) {

		setTimeout(()=> {
			this.setState({carModelOptions: [{name: 'golf', value: 321}, {name: 'jetta', value: 888}]});
			this.setState({disableCarModel: true});
		}, 2000);
		this.handleChange(event);
	}

	render() {
		return (
			<form className="index" onChange={this.formChange}>
				<label htmlFor="">
					some label

					<select name="carMake" value={this.state.form.carMake} onChange={this.handleCarMake}>
						<option value="0">-</option>
						<option value="A">opel</option>
						<option value="B">vw</option>
						<option value="C">bmw</option>
					</select>

					<select name="carModel"
							value={this.state.form.carModel}
							onChange={this.handleChange}
							disabled={this.state.disableCarModel}>
						{this.state.carModelOptions.map((option, i)=> {
							return (
								<option key={i} value={option.value}>
									{option.name}
								</option>
							);
						})}
					</select>

				</label>
			</form>
		);
	}
}


export default CarForm;
