export  function getHostName(url) {
	if(url!=null){
		var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
		if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			return '('+match[2]+')';
		}
		else {
			return null;
		}
	}
}


export function hidePosts(e){
//e.target.parentNode.parentNode.style.display = 'none';
	e.target.parentNode.parentNode.classList.add('hide');

}

export function updateHiddenRows(){
	let  allRows = document.querySelectorAll('tr');
	let hidenRows = document.querySelectorAll('tr.hide');
	const hiddenRowsIndex = [...hidenRows].map((hiddenRow)=>{
		return [...allRows].indexOf(hiddenRow);
	});
	localStorage.setItem('hiddenRows',JSON.stringify(hiddenRowsIndex));
	const localStorage_hiddenRows = JSON.parse(localStorage.getItem('hiddenRows'));
	if(localStorage_hiddenRows!==null && localStorage_hiddenRows.length > 0) {
		allRows.forEach((current_row,index)=>{
			if(localStorage_hiddenRows.indexOf(index) > -1) {
				current_row.classList.add('hide');
			}
		})
	}

}
