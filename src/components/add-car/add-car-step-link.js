import React from 'react';

var classNames = require('classnames');

import addCarService from './add-car.service';


class AddCarStepLink extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isActive: (this.props.step === addCarService.getActiveStep())
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		if(addCarService.checkStep(this.props.step)){
			addCarService.updateRoute(this.props.step);
		}
	}


	componentWillReceiveProps() {
		this.setState({isActive:this.props.step === addCarService.getActiveStep()})
	}


  render() {
    var btnClass = classNames(
      {
        'add-car-menu__item': true,
        active: this.state.isActive
      }
    );
    return (
      <button tabindex="0" className={btnClass} disabled={this.state.isActive}
              onClick={this.handleClick}>
        <div className="add-car-menu__label">{addCarService.getLabel(this.props.step)}</div>
      </button>
    );
  }
}

export default AddCarStepLink;
