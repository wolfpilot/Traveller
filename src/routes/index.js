import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import HomePage from './HomePage';
import PlacesPage from './PlacesPage';
import NotFoundPage from './NotFoundPage';

// @TODO: Split everything into Header, Main and Footer

export default (

	<Router history={history}>
		<div>
			<main className="main">
				<Switch>
					<Route exact={true} path="/" component={HomePage} />
					<Route path="/places" component={PlacesPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
		</div>
	</Router>

);
