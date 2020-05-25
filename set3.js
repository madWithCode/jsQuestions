var b = {
	c: this,
	d: function() { return this.c}
}

b.d(); // output ?
// sicne 'd' is function it will take context from calling object 'b'
// this will take function scope, but not object scope, so 'c:this' will point to window

if(b.d() === window){
  alert(true); // alert will execute
}

//=========================================


var myvar = 'foo';

(function(){
	console.log('first : '+ myvar);
  let myvar = 'bar';
  console.log('second: '+ myvar);
})();

// 1. local variable has more precedence than global variable
// 2. first myvar will throw error -  Cannot access 'myvar' before initialization


//==========================================


var myvar = 'foo';

(function(){
	console.log('first : '+ myvar);
  var myvar = 'bar';
  console.log('second: '+ myvar);
})();


// 1. myVar declaration within the IIFE(any fuunction) is moved to top
// 2. "first : undefined" , "second: bar"

//================================================

function pqr(){
	function bar(){
  	return 3;
  }
  return bar();
  function bar(){
  	return 8;
  }
}

console.log(pqr());

/* 
1. here is function declaration
2. Function declarations are processed upon entry into the enclosing scope, before any step-by-step code is executed.
3. second bar declaration takes more preference compared to first 
4. hence outputs 8
5. say last line had var bar = function(){ ... }, the function declaration takes precedence over function expression
*/

//=========================================

var person = { name: 'john'};

var p1 = Object.create(person);
delete p1.name;
console.log(p1.name);

/*
1. object.create takes first parametere as the object which should be the prototype of the newly-created object.
2. hence the object becomes prototype of p1
3. delete will not delete and console prints it from prototype property
*/


//==============================================

let points = 100;
let winner = false;

if(points > 99){
  let winner = true;
}

console.log(winner);

// what was created on chennai stays in chennai and never can be available in balgore


//=================================================

var fooBar2 = function fooBar(){
	console.log( fooBar === fooBar);
};

fooBar2();
/* 
when you create a named function or anonymous (foobar) and assign it to a variable -> foobar2
then foobar2 will have reference to the named function, hence when foobar2 is called ,
it will execute the function reference it holds irrespective of its name
*/
