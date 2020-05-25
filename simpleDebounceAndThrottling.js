function debounce(func, time){
	let timeoutobj;
	return function(){
    clearTimeout(timeoutobj);
    timeoutobj = setTimeout(func, time);
  }
}

window.addEventListener('resize', debounce(() => console.log('hi'),5000));



//================================


function throttle(func, time){
	let lastExecuted = 0;
	return function(){
  	let now = new Date();
    if(now - lastExecuted >= time){
    	func();
      lastExecuted = new Date();
     }
  }
}

window.addEventListener('resize', throttle(() => console.log('hi'),5000));


// better version of throttle ====================================


function throttle(func, time){
  let flag;
	return function(){
    if(!flag){
    	flag = true;
    	setTimeout(() => {
        flag = false;
        func() 
      }, time);
     }
  }
}

window.addEventListener('resize', throttle(() => console.log('hi'),5000));
