import React, { Component } from 'react';
import StreamForm from './StreamForm';
import { createStream } from '../../actions';
import { connect } from 'react-redux';

class StreamCreate extends Component {
	onFormSubmit = formValues => {
		console.log(formValues);
		this.props.createStream({ ...formValues, userId: this.props.currentUserId });
	};
	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onFormSubmit} />
			</div>
		);
	}
}
const mapStatetoProps = state => {
	return {
		currentUserId: state.auth.userId
	};
};

export default connect(mapStatetoProps, { createStream })(StreamCreate);
