//startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';


const store = createStore(reducers,{},applyMiddleware(thunk));


ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
 	</Provider>,
document.querySelector('#root'));


//bundle.js:17062 Warning: render(): 
//Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17. 
//Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.