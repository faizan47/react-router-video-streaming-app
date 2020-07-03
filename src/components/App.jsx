import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
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
			<Switch>
				<Route path="/" exact component={StreamList} />
				<Route path="/streams/create" component={StreamCreate} />
				<Route path="/streams/edit/:id" component={StreamEdit} />
				<Route path="/streams/delete/:id" component={StreamDelete} />
				<Route path="/streams/:id" component={StreamShow} />
			</Switch>
		</Router>
	</div>
);

export default App;
