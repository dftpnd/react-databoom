import React from 'react';
var classNames = require('classnames');

class GroupButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};

		this.clickHandlerOk = this.clickHandlerOk.bind(this);
		this.clickHandlerNo = this.clickHandlerNo.bind(this);
	}

	clickHandlerOk() {
		this.props.handler(this.props.name, true);
		this.setState({value: true});
	}
	clickHandlerNo() {
		this.props.handler(this.props.name, false);
		this.setState({value: false});
	}

	render() {
		var successButton = classNames(
			{
				'group-button__button': true,
				'group-button__btn-yes': true,
				active: this.state.value !== null && this.state.value
			}
		);
		var dangerButton = classNames(
			{
				'group-button__button': true,
				'group-button__btn-no': true,
				active: this.state.value !== null && !this.state.value
			}
		);

		return (
			<div className="group-button">
				<button className={successButton} onClick={this.clickHandlerOk} type="button">
					Да
				</button>
				<button className={dangerButton} onClick={this.clickHandlerNo} type="button">
					Нет
				</button>
			</div>
		);
	}
}

export default GroupButton;
