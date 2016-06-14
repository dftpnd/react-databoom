import React from 'react';
import Modal from 'react-modal';

var classNames = require('classnames');
const addCommentSvg = require('../../images/add-comment.svg');
class GroupButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value,
			modalIsOpen: false
		};

		this.clickHandlerOk = this.clickHandlerOk.bind(this);
		this.clickHandlerNo = this.clickHandlerNo.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
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
		this.setState({modalIsOpen: false});
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
					onRequestClose={this.publicateModalClose}
					shouldCloseOnOverlayClick={false}>
					<h2 className="modal__title">openModal</h2>

					<button className="common-button put-on" onClick={this.publishCar}>Выставить на аукцион</button>
					<button className="modal__close" onClick={this.publicateModalClose}></button>
				</Modal>
			</div>
		);
	}
}

export default GroupButton;
