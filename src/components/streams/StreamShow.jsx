import React, { Component } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { getStreamById } from '../../actions/';

class StreamShow extends Component {
	constructor(props) {
		super(props);
		this.videoRef = React.createRef();
	}
	componentDidMount() {
		this.props.getStreamById(this.props.match.params.id);
	}
	componentDidUpdate() {
		this.buildPlayer();
	}
	buildPlayer() {
		if (this.player || !this.props.currentStream) return <div className="ui active inline loader" />;

		this.player = flv.createPlayer({
			type: 'flv',
			url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
		});
		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}
	componentWillUnmount() {
		this.player.destroy();
	}
	render() {
		if (!this.props.currentStream) return <div className="ui active inline loader" />;

		return (
			<div>
				<video
					ref={this.videoRef}
					src={`rtmp://localhost/live/${this.props.currentStream.id}`}
					style={{ width: '100%' }}
					controls
				/>
				<h2>{this.props.currentStream.title}</h2>
				<div className="content">{this.props.currentStream.description}</div>
			</div>
		);
	}
}

const mapStatetoProps = (state, ownProps) => {
	return {
		currentStream: state.streams[ownProps.match.params.id]
	};
};

export default connect(mapStatetoProps, { getStreamById })(StreamShow);
