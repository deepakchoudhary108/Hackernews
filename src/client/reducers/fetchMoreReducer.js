import { FETCH_MORE } from '../actions';

export default (state=[],action) =>{
	switch(action.type) {
		case FETCH_MORE:
		return action.payload.data.hits;
		default:
		return state;
	}
}