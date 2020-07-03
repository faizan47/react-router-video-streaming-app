import React, { Component, Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream, getStreamById } from '../../actions';

class StreamDelete extends Component {
	componentDidMount() {
		this.props.getStreamById(this.props.match.params.id);
	}
	renderActions() {
		return (
			<Fragment>
				<div
					onClick={() => {
						this.props.deleteStream(this.props.match.params.id);
					}}
					className="ui negative button"
				>
					Delete
				</div>
				<div onClick={() => history.push('/')} className="ui cancel button">
					Cancel
				</div>
			</Fragment>
		);
	}
	renderContent() {
		if (!this.props.currentStream) {
			return 'Are you sure you want to delete this stream?';
		} else {
			return `Are you sure you want to delete this stream ${this.props.currentStream.title}?`;
		}
	}
	render() {
		return (
			<Modal
				onExit={() => history.push('/')}
				actions={this.renderActions()}
				title="Delete Stream"
				description={this.renderContent()}
			/>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return { currentStream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { getStreamById, deleteStream })(StreamDelete);
