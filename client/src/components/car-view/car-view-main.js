import React from 'react';
import carlist from '../services/carlist.service'
import Lightbox from 'react-images';

class Main extends React.Component {

	constructor(props) {
		super(props);
		//this.tabClick = this.tabClick.bind(this);
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
			mainImages: this.preparePhoto(this.props.carData.carMainPhoto)
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.preparePhoto = this.preparePhoto.bind(this);

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
			list.push({src: carlist.carImageUrl(file.filename)});
		});
		return list;
	}

	render() {
		var car = this.props.carData;

		return (
			<div className="car-view">
				<div className="car-view__gallery">
					{this.state.mainImages.map((photo, i)=> {
						return (
							<a key={i}
							   href={photo.src}
							   className="car-view__photo"
							   onClick={(e) => this.openLightbox(i, e)}>
								<img src={photo.src} alt=""/>
							</a>
						);
					})}
					<Lightbox
						images={this.state.mainImages}
						currentImage={this.state.currentImage}
						isOpen={this.state.lightboxIsOpen}
						onClickPrev={this.gotoPrevious}
						onClickNext={this.gotoNext}
						onClose={this.closeLightbox}
					/>
				</div>
				<div class="description">
					<h3>Описание автомобиля</h3>
					<p>{car.carDescription}</p>
					<ul class="more">
						<li>Марка <span>{car.carMake}</span></li>
						<li>Модель <span>{car.carModel}</span></li>
						<li>Модификация <span>{car.carModification}</span></li>
						<li>Год выпуска <span>{car.carRelease}</span></li>
						<li>Двигатель, объем <span>{car.carEngineVolume}</span></li>
						<li>Двигатель, л.с. <span>{car.carEngineForce}</span></li>
						<li>Двигатель, тип <span>{car.carEngineType}</span></li>
					</ul>
				</div>
			</div>
		);
	}
}

Main.defaultProps = {};

export default Main;

