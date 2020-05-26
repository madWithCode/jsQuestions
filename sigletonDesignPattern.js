var singleton;

(function(){
	var instance;
  	singleton = function(){
    	if(instance){
      	 return instance;
      }
     	instance = this;
      this.name = 'node';
      return instance;
  }
})();



var instance1 = new singleton();
console.log(instance1);
instance1.name = 'madWithCode';


var instance2 = new singleton();
console.log(instance2);
