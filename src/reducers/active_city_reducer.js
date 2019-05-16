export default function(state, action) {

  //reducer initialization
	if(state === undefined){
		return null;
	}
	
	if (action.type === 'SET_ACTIVE_CITY') {
		return action.payload;
	} else {
		return state;
	}

}