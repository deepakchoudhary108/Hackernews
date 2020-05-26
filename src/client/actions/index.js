import axios from 'axios';

export const FETCH_USERS = "fetch_users";
export const FETCH_MORE = "fetch_more";

function pageCounter(){
	if(typeof(Storage)!=="undefined") {
		if(localStorage.pageCount){
			localStorage.pageCount = Number(localStorage.pageCount)+1;
		}else {
			localStorage.pageCount = 2;
		}
		return localStorage.pageCount;
	}
}


export const fetchUsers=()=>async dispatch=>{
	const res = await axios.get('http://hn.algolia.com/api/v1/search?tags=front_page');
	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};

export const fetchMore = ()=>async dispatch=>{
	let page = pageCounter();
	const res = await axios.get(`http://hn.algolia.com/api/v1/search?page=${page}`);
	dispatch({
		type: FETCH_MORE,
		payload: res
	})
}