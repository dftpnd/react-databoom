import React from 'react';

class Damage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			damageLength: this.props.damageLength
		}
	}

	render() {
		return (
			<div>
				{(()=>{
					if(!this.state.damageLength){
						return 'Нет поврежденых элементов'
					}
				})()}
			</div>
		);
	}
}

export default Damage;
