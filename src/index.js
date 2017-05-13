import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import history from './routes/history';

import routes from './routes/index';

render(
	<Router history={history}>
		{routes}
	</Router>,
	window.document.getElementById('app')
);
