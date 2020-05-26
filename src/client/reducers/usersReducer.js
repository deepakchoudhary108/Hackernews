//FETCH_USERS is a named export.We need to use the {}.

import { FETCH_USERS } from '../actions';

export default (state=[],action) =>{
	switch(action.type){
		case FETCH_USERS:
		return action.payload.data.hits;
		default:
		return state
	}
}