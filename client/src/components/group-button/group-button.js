import React from 'react';
var classNames = require('classnames');

class GroupButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: !!this.props.value
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		this.props.handler(this.props.name, !this.state.value);
		this.setState({value: !this.state.value});
	}

	render() {
		var successButton = classNames(
			{
				'group-button__button': true,
				'group-button__btn-yes': true,
				active: this.state.value
			}
		);
		var dangerButton = classNames(
			{
				'group-button__button': true,
				'group-button__btn-no': true,
				active: !this.state.value
			}
		);

		return (
			<div className="group-button">
				<button className={successButton} onClick={this.clickHandler} type="button">Да
				</button>
				<button className={dangerButton} onClick={this.clickHandler} type="button">
					Нет
				</button>
			</div>
		);
	}
}

export default GroupButton;
