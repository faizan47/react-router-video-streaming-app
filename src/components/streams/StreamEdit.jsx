import React, { Component } from 'react';
import StreamForm from './StreamForm';
import { updateStream, getStreamById } from '../../actions';
import { connect } from 'react-redux';
import { pick } from 'lodash';

class StreamEdit extends Component {
	componentDidMount() {
		this.props.getStreamById(this.props.match.params.id);
	}
	onFormSubmit = formValues => {
		const streamInfo = pick({ ...formValues }, 'title', 'description');
		this.props.updateStream(streamInfo, this.props.match.params.id);
	};
	render() {
		if (!this.props.currentStream) {
			return <div className="ui active inline loader" />;
		} else {
			return (
				<div>
					<h3>Edit a Stream</h3>
					<StreamForm initialValues={this.props.currentStream} onSubmit={this.onFormSubmit} />
				</div>
			);
		}
	}
}
const mapStatetoProps = state => {
	return {
		currentStream: state.streams.streamInfo
	};
};

export default connect(mapStatetoProps, { updateStream, getStreamById })(StreamEdit);
