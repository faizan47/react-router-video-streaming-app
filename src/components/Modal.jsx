import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
	render() {
		return ReactDOM.createPortal(
			<div onClick={this.props.onExit} className="ui dimmer modals visible active">
				<div onClick={e => e.stopPropagation()} className="ui standard active visible modal">
					<div className="header">{this.props.title}</div>
					<div className="content">
						<p>{this.props.description}</p>
					</div>
					<div className="actions">{this.props.actions}</div>
				</div>
			</div>,
			document.getElementById('modal')
		);
	}
}

export default Modal;
