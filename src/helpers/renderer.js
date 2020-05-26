import React from 'react';
import { renderToString } from 'react-dom/server';
import Routes from '../client/Routes';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';


export default (req,store)=>{
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<Routes />
			</StaticRouter>
		</Provider>
	);

	const helmet = Helmet.renderStatic();


	return `
	<!DOCTYLE html>
		<html>
			<head>
				${helmet.title.toString()}
				<title>Hacker News App</title>
			    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${JSON.stringify(store.getState())}
				</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`
}

