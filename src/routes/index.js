import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../components/App';
import HomePage from './HomePage';
import CollectionsPage from './CollectionsPage';
import SearchPage from './SearchPage';
import NotFoundPage from './NotFoundPage';

import { Header, Footer } from '../components/Layout';

export default (
	<App>
		<Header />
		<main className="main">
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route path="/search/:term" component={SearchPage} />
				<Route path="/collections/:id/:name" component={CollectionsPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</main>
		<Footer />
	</App>
);
