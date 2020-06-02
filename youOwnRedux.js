class createStore{
	constructor(reducer, state = {}){
  	this.store = state;
    this.subscriptions = [];
    this.reducer = reducer;
  }
  
  getState(){
  	return this.store;
  }
  
  subscribe(callback){
  	this.subscriptions.push(callback);
  }
  
  dispatch(action){
  	const newStore = this.reducer(action, this.store);
  	if(this.store !== newStore){
    		this.store = newStore;
        this.subscriptions.forEach(callback => {
        	callback(this.store);
        })
    }
  }
  
}

const reducer = (action, state) => {
	switch(action.type){
  	case 'INCREMENT':
    	return {...state, counter: state.counter+1};
      
    case 'DECREMENT':
    	return { ...state, counter: state.counter-1};
      
    default:
      return state;
  }	
}

const store = new createStore(reducer, { counter: 0});

console.log(store.getState());


store.subscribe(function(newState){
  console.log('I am subscriber using ', newState);
});

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'Random'});
console.log(store.getState());
