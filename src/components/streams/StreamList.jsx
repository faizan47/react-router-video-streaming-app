import React from 'react';
import { connect } from 'react-redux';
import { getAllStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
	componentDidMount() {
		this.props.getAllStreams();
	}
	renderStreamUpdate = stream => {
		if (this.props.currentUserId === stream.userId && this.props.isSignedIn) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui primary button">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui negative button">
						Delete
					</Link>
				</div>
			);
		}
	};
	renderCreateLink = () => {
		if (this.props.isSignedIn) {
			return (
				<Link to="/streams/create">
					<button className="ui button secondary">Create a Stream</button>
				</Link>
			);
		}
	};
	renderStreams = () => {
		return this.props.streams.map(stream => (
			<div key={stream.id} className="item">
				{this.renderStreamUpdate(stream)}
				<i className="large middle aligned icon video" />
				<div className="content">
					<Link to={`/streams/${stream.id}`} className="header">
						{stream.title}
					</Link>
					<div className="description">{stream.description}</div>
				</div>
			</div>
		));
	};

	render() {
		if (!this.props.streams.length) {
			return <div className="ui active inline loader" />;
		} else {
			return (
				<div className="ui relaxed divided list">
					{this.renderStreams()}
					{this.renderCreateLink()}
				</div>
			);
		}
	}
}
const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};
export default connect(mapStateToProps, { getAllStreams })(StreamList);
