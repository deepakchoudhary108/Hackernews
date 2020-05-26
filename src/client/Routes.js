import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default ()=>{
	return (
		
			<Route exact path="/" component={HomePage} />
			
		
	);
};