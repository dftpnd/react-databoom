import React from 'react';
import db from '../services/db.service';
import Lightbox from 'react-images';
var classNames = require('classnames');

class PhotoUpload extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			active: this.props.active,
			photos: this.props.photos,
			lightboxIsOpen: false,
			currentImage: 0,
			list: this.preparePhoto(this.props.photos)
		};


		this.fileHandler = this.fileHandler.bind(this);
		this.createUrl = this.createUrl.bind(this);
		this.removePhoto = this.removePhoto.bind(this);
		this.preparePhoto = this.preparePhoto.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	openLightbox(index, event) {
		event.preventDefault();

		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	}

	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}

	gotoPrevious() {
		this.setState({
			currentImage: this.state.currentImage - 1
		});
	}

	gotoNext() {
		this.setState({
			currentImage: this.state.currentImage + 1
		});
	}

	preparePhoto(files) {
		var list = [];
		files.map((file)=> {
			list.push({src: this.createUrl(file.filename)});
		});
		return list;
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			active: nextProps.active,
			photos: nextProps.photos,
			list: this.preparePhoto(nextProps.photos)
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
		this.setState({loading: true});
		promise.always(()=>this.setState({loading: false}));
		this.props.uploadHandler(this.props.propName, promise);
	}

	removePhoto(event) {
		this.props.removePhoto(event.target.value);
	}

	render() {
		var btnState = classNames({
			active: this.state.loading,
			'photo-upload__btn': true
		});

		return (
			<div className="photo-upload">
				{this.state.photos.map((photo, i)=> {
					return <div className="photo-upload__item" key={i}>
						<button className="photo-upload__remove"
								value={photo.filename} onClick={this.removePhoto}
								type="button" class=""></button>
						<a
							href={this.createUrl(photo.filename)}
							key={i}
							onClick={(e) => this.openLightbox(i, e)}>
							<img src={this.createUrl(photo.filename)} className="photo-upload__picture"/>
						</a>
					</div>
				})}

				<Lightbox
					images={this.state.list}
					currentImage={this.state.currentImage}
					isOpen={this.state.lightboxIsOpen}
					onClickPrev={this.gotoPrevious}
					onClickNext={this.gotoNext}
					onClose={this.closeLightbox}
				/>

				<div className={btnState}>
					<label className="photo-upload__link" htmlFor="file-upload-field">
						<span className="photo-upload__status active">+</span>
					</label>
					<div className="photo-upload__hidden-field">
						<input id="file-upload-field" type="file" onChange={this.fileHandler}/>
					</div>
				</div>
			</div>
		);
	}
}

export default PhotoUpload;
