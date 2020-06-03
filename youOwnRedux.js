function createStore(reducer){
  let store = reducer(undefined, {});
  const subscriptions = [];
  return (function(){
    return {
    	getState: () => {
      	return store;
      },
      dispatch: (action) => {
      	const newState = reducer(store, action);
        if(newState !== store){
        	store = newState;
        	subscriptions.forEach(callback => {
          	callback(newState);
          });
        }
      },
      subscribe : (subscriber) => {
      	subscriptions.push(subscriber);
      }
    };
  })();
}

const initialState = { count : 0 };

const reducer = (state = initialState, action) => {
	switch(action.type){
  	case 'INCREMENT':
    	return {...state, count: state.count+1 };
    case 'DECREMENT':
    	return {...state, count: state.count-1 };
    default:
    	return state;
  }
}

const store = createStore(reducer);
store.subscribe(function(param){
	console.log('state updated ',param);
});

console.log(store.getState());
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
console.log(store.getState());
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
console.log(store.getState());
