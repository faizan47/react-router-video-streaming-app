import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

const Header = () => (
	<div className="ui secondary pointing menu">
		<Link to="/" className="ui teal tag label">
			Streamer
		</Link>
		<div className="right menu">
			<Auth />
			<Link to="/" className="item" />
		</div>
	</div>
);
export default Header;
