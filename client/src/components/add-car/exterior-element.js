import React from 'react';
var classNames = require('classnames');

class ExteriorElement extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.value,
			name: this.props.value,
			top: this.props.top + 'px',
			left: this.props.left + 'px',
			active: this.props.active
		};

		this.elementHandler = this.elementHandler.bind(this);
	}

	elementHandler(event) {
		const newValue = parseInt(event.target.value, 10);
		this.setState({active: newValue});
		this.props.handler(newValue);
	}


	render() {
		const btnClasses = classNames({
			'exterior__damage-item': true,
			'active': this.state.id === this.props.active
		});

		return (
			<button className={btnClasses} style={{left:this.state.left, top:this.state.top}} type="button"
					value={this.state.id} tabindex="0" onClick={this.elementHandler}>
				{this.state.name}
			</button>
		);
	}
}

export default ExteriorElement;
