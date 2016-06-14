import React from 'react';
import Modal from 'react-modal';
import PhotoUpload from '../photo-upload/photo-upload'

var classNames = require('classnames');
const addCommentSvg = require('../../images/add-comment.svg');
class GroupButton extends React.Component {
	constructor(props) {
		super(props);

		const fieldComments = JSON.parse(localStorage.getItem('fieldComments')) || {};
		const cname = `${this.props.name}Comments`;
		const cData = fieldComments[cname] || {photos: [], comment: ''};

		this.state = {
			value: this.props.value,
			name: this.props.name,
			cname: cname,
			photos: cData.photos,
			comment: cData.comment,
			hasComment: true,
			modalIsOpen: false
		};

		this.clickHandlerOk = this.clickHandlerOk.bind(this);
		this.clickHandlerNo = this.clickHandlerNo.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.addPhoto = this.addPhoto.bind(this);
		this.deletePhoto = this.deletePhoto.bind(this);
		this.commentHandler = this.commentHandler.bind(this);
		this.empty = this.empty.bind(this);
	}

	commentHandler(event) {
		this.setState({comment: event.target.value});
	}

	clickHandlerOk() {
		this.props.handler(this.props.name, true);
		this.setState({value: true});
	}

	clickHandlerNo() {
		this.props.handler(this.props.name, false);
		this.setState({value: false});
	}

	openModal() {
		this.setState({modalIsOpen: true});
	}

	closeModal() {
		if (this.state.hasComment && this.empty()) {
			if (confirm('Удалить содержимое заметки?')) {
				this.setState({modalIsOpen: false});
			}
		} else {
			this.setState({modalIsOpen: false});
		}

	}

	deletePhoto(filename) {
		this.state.photos.map((file, fileIndex)=> {
			if (file.filename === filename) {
				this.state.photos.splice(fileIndex, 1);
				return;
			}
		});

		this.setState({photos: this.state.photos});
	}

	addPhoto(promise) {
		promise.done((data)=> {
			this.setState({photos: this.state.photos.concat({filename: data.filename})});
		});
	}

	componentWillUpdate(nextProps, nextState) {
		var fieldComments = JSON.parse(localStorage.getItem('fieldComments')) || {};
		const data = {
			comment: nextState.comment,
			photos: nextState.photo
		};

		fieldComments[this.cname] = data;

		localStorage.setItem('fieldComments', JSON.stringify(fieldComments));
	}

	empty() {
		if (this.state.photos.length || this.state.comment) {
			return false;
		}
		return true;
	}

	stateHandler() {

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
				<button className="group-button__add-comment" onClick={this.openModal} title="Добавить комментарий">
					<img src={addCommentSvg} alt="add coment" width="24" height="30"/>
				</button>

				<Modal
					isOpen={this.state.modalIsOpen}
					shouldCloseOnOverlayClick={false}>
					<button className="modal__close" onClick={this.closeModal}></button>

					<h2 className="modal__title">Описание неисправности</h2>
					<form className="add-comment" action="">
						<textarea placeholder="Текст описания"
								  name="asd"
								  rows={4}
								  value={this.state.comment}
								  onChange={this.commentHandler}/>
						<br/>
						<br/>
						<label>Добавить фото
							<br/>
							<br/>
							<PhotoUpload photos={this.state.photos}
										 uploadHandler={this.addPhoto}
										 removePhoto={this.deletePhoto}/>
						</label>

						{(()=> {
							if (!this.empty()) {
								return (<a className="add-comment__remove">Удалить</a>);
							}
						})()}


					</form>
				</Modal>
			</div>
		);
	}
}

export default GroupButton;
