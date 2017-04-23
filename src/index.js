import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from './routes/index';

render(
	<Router>
		{routes}
	</Router>,
	window.document.getElementById('app')
);
