import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import HomePage from './HomePage';
import DestinationsPage from './DestinationsPage';
import NotFoundPage from './NotFoundPage';

import { Header, Footer } from '../components/Layout';

export default (

	<Router history={history}>
		<div>
			<Header />
			<main className="main">
				<Switch>
					<Route exact={true} path="/" component={HomePage} />
					<Route path="/destinations" component={DestinationsPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
			<Footer />
		</div>
	</Router>

);
