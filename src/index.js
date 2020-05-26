import 'babel-polyfill';
import express from 'express';
import React from 'react';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

//look into static directory 'public' and find bundle.js
app.use(express.static('public'));

app.get('*',(req,res)=>{
	const store = createStore();
	//logic to initialize and load data into store
	res.send(renderer(req,store));
});

app.listen(3000,() => {
	console.log('listening on port 3000');
})
