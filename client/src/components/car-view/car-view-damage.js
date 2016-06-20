import React from 'react';
import Car from './../services/car.service';
import Lightbox from 'react-images';

class Damage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentImage: 0,
			lightboxIsOpen: false,
			damageLength: this.props.damageLength,
			damageElements: this.props.carData.damageElements || []
		};

		console.log(this.props.carData.fieldComments)
		this.elements = Car.elements;
		this.damageTypes = Car.damageTypes;
		this.typeRepair = Car.typeRepair;
		this.getElementLabel = this.getElementLabel.bind(this);
		this.getDamageTypeLabel = this.getDamageTypeLabel.bind(this);
		this.getTypeRepairLabel = this.getTypeRepairLabel.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.getPhotoIndexbyName = this.getPhotoIndexbyName.bind(this);
		this.createUrl = this.createUrl.bind(this);
		this.getPhotos = this.getPhotos.bind(this);
	}

	getPhotos() {
		var photos = [];

		this.state.damageElements.map((el)=> {
			photos.push(...this.preparePhotoList(el.photos))
		});

		return photos;
	}

	preparePhotoList(files) {
		var list = [];
		files && files.map((file)=> {
			list.push({src: this.createUrl(file.filename)});
		});
		return list;
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

	closeLightbox() {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false
		});
	}

	getPhotoIndexbyName(filename) {
		var index = 0;
		var findIndex = 0;

		this.props.carData.damageElements.map((el)=> {
			return el.photos && el.photos.map((photo)=> {
					++index;
					if (photo.filename === filename) {
						findIndex = index
					}
				})
		});

		return --findIndex;
	}

	openLightbox(filename, event) {
		event.preventDefault();
		const index = this.getPhotoIndexbyName(filename);
		this.setState({
			currentImage: index,
			lightboxIsOpen: true
		});
	}

	createUrl(filename) {
		/**
		 * TODO replace url
		 */
		return `https://t276.databoom.space/uploads/t276/b276/${filename}`;
	}

	getElementLabel(val) {
		return this.elements.map(el=> {
			if (el.value === val)
				return el.label;
			else
				return ''
		}).join('');
	}

	getDamageTypeLabel(val) {
		return this.damageTypes.map(el=> {
			if (el.value === parseInt(val, 10))
				return el.label;
			else
				return ''
		}).join('');
	}

	getTypeRepairLabel(val) {
		return this.typeRepair.map(el=> {
			if (el.value === parseInt(val, 10))
				return el.label;
		}).join('');
	}

	render() {
		return (
			<div>
				{(()=> {
					if (this.state.damageLength) {
						return (
							<div>
								<table className="table">
									<thead>
									<tr className="table-th">
										<th>Поврежденная деталь</th>
										<th>Тип повреждения</th>
										<th>Тип ремонта</th>
										<th>Фото</th>
									</tr>
									</thead>
									<tbody>
									{this.state.damageElements.map((el, index)=> {
										return (<tr key={index}>
											<td>{this.getElementLabel(el.index)}</td>
											<td>{this.getDamageTypeLabel(el.damageType)}</td>
											<td>{this.getTypeRepairLabel(el.typeRepair)}</td>
											<td>
												<div className="table-photo">
													{el.photos && el.photos.map((photo, i)=> {
														return <a href={this.createUrl(photo.filename)}
																  className="table-photo__link "
																  key={i}
																  onClick={(e) => this.openLightbox(photo.filename, e)}>
															<img src={this.createUrl(photo.filename)}
																 className="table-photo__picture"/>
														</a>
													})}

													{(()=> {
														if (el.photos && el.photos.length > 1) {
															return <div
																className="table-photo__length">{el.photos.length}</div>;
														}
													})()}
												</div>

											</td>
										</tr>);
									})}
									</tbody>
								</table>
								<Lightbox
									images={this.getPhotos()}
									currentImage={this.state.currentImage}
									isOpen={this.state.lightboxIsOpen}
									onClickPrev={this.gotoPrevious}
									onClickNext={this.gotoNext}
									onClose={this.closeLightbox}
								/>
							</div>
						);
					} else {
						return 'Нет поврежденых элементов.';
					}
				})()}

			</div>
		);
	}
}

export default Damage;
