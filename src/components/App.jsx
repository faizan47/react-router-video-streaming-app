import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from '../history';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => (
	<div className="ui container">
		<Router history={history}>
			<Header />
			<Route path="/" exact component={StreamList} />
			<Route path="/streams/edit/:id" component={StreamEdit} />
			<Route path="/streams/delete/:id" component={StreamDelete} />
			<Route path="/streams/show" component={StreamShow} />
			<Route path="/streams/create" component={StreamCreate} />
		</Router>
	</div>
);

export default App;
