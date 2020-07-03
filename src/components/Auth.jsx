import React, { Component } from 'react';
import { trySignOut, trySignIn } from '../actions';
import { connect } from 'react-redux';

class Auth extends Component {
	componentDidMount() {
		window.gapi.load('auth2', () => {
			window.gapi.auth2
				.init({
					client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
					scope: 'email'
				})
				.then(() => {
					this.googleAuth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.googleAuth.isSignedIn.get());
					this.googleAuth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}
	onTrySignIn = () => {
		this.googleAuth.signIn();
	};

	onTrySignOut = () => {
		this.googleAuth.signOut();
	};

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.trySignIn(this.googleAuth.currentUser.get().getBasicProfile().getId());
		} else {
			this.props.trySignOut();
		}
	};
	render() {
		if (this.props.auth === null) {
			return null;
		} else if (this.props.auth) {
			return (
				<button onClick={this.onTrySignOut} className="ui red google button">
					<i className="google icon" /> Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onTrySignIn} className="ui red google button">
					<i className="google icon" /> Sign In
				</button>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth.isSignedIn,
		userId: state.auth.userId
	};
};

export default connect(mapStateToProps, { trySignOut, trySignIn })(Auth);
