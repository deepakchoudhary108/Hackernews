import { combineReducers } from 'redux';
import  usersReducer from './usersReducer';
import  fetchMoreReducer from './fetchMoreReducer';

export default combineReducers({
	users: usersReducer,
	nextUsers: fetchMoreReducer

});



