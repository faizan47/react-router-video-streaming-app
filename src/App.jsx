import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
const App = () => (
	<div>
		<BrowserRouter>
			<Route
				path="/"
				exact
				component={() => (
					<div>
						Hey, you are on page 1!<button>
							<Link to="/2">Go to Page 2</Link>
						</button>
					</div>
				)}
			/>

			<Route
				path="/2"
				component={() => (
					<div>
						Hey, you are on page 2!<button>
							<Link to="/">Go to Page 1</Link>
						</button>
					</div>
				)}
			/>
		</BrowserRouter>
	</div>
);

export default App;
