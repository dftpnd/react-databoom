import React from 'react';
import db from '../services/db.service';

class PhotoUpload extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: this.props.active,
			photos: this.props.photos
		};

		this.fileHandler = this.fileHandler.bind(this);
		this.createUrl = this.createUrl.bind(this);
		this.removePhoto = this.removePhoto.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			active: nextProps.active,
			photos: nextProps.photos
		});
	}

	createUrl(filename) {
		/**
		 * TODO replace url
		 */
		return `https://t276.databoom.space/uploads/t276/b276/${filename}`;
	}

	fileHandler(event) {
		const file = event.target.files[0];
		const promise = db.store.upload(file);

		//promise.done((data)=> {
		//	this.setState({photos: this.state.photos.concat([data.filename])})
		//});

		this.props.uploadHandler(this.props.propName, promise);
	}

	removePhoto(event) {
		this.props.removePhoto(event.target.value);
	}

	render() {
		return (
			<div className="photo-upload">

				{this.state.photos.map((filename, i)=> {
					return <div className="photo-upload__item" key={i}>
						<button className="photo-upload__remove" value={filename} onClick={this.removePhoto}
								type="button" class=""> </button>
						<img src={this.createUrl(filename)} className="photo-upload__picture"/>
					</div>
				})}
				<div className="photo-upload__btn">
					<label className="photo-upload__link" htmlFor="file-upload-field">+</label>
					<div className="photo-upload__hidden-field">
						<input id="file-upload-field" type="file" onChange={this.fileHandler}/>
					</div>
				</div>
			</div>
		);
	}
}

export default PhotoUpload;
