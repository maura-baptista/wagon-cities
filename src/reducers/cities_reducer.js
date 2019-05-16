export default function(state, action) {

  //reducer initialization
	if(state === undefined){
		return [];
	}
	
	if (action.type === 'SET_CITIES') {
		return action.payload;
	} else {
		return state;
	}

}