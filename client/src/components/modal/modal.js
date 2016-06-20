import React from 'react';
var classNames = require('classnames');

class PhotoUpload extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			photos: this.props.photos
		};

		this.removePhoto = this.removePhoto.bind(this);
	}


	render() {
		var view = this.props.view;

		var btnState = classNames({
			active: this.state.loading,
			'photo-upload__btn': true
		});
		return (
			<div className="autogross-modal">
				{view}
			</div>
		);
	}
}

export default PhotoUpload;
