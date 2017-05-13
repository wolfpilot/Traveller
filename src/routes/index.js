import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import HomePage from './HomePage';
import DestinationsPage from './DestinationsPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';

import { Header, Footer } from '../components/Layout';

export default (
	<App>
		<Header />
		<main className="main">
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route path="/destinations" component={DestinationsPage} />
				<Route path="/search/:term" component={SearchPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</main>
		<Footer />
	</App>
);
