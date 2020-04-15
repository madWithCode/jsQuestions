var a = 5;
const ob1 = {a:'abc', func1: function(){
	return this.a;
}};

const ob2 = {a:'hey'};

//how to make func1 print hey ?
console.log(ob1.func1.call(ob2));
console.log(ob1.func1.call(this));


//====================================
//what will the output of consoles ?

function constr(){ }

constr.prototype.a = [];
constr.prototype.func2 = function(){
	return this.a;
}

const obj1 = new constr();
obj1.a.push('hi');
console.log(obj1.func2());

const obj2 = new constr();
obj2.a.push('hello');
console.log(obj2.func2());


//================================
//output of the consoles ?

$$ = {};
let sim2 = 'abc';

(function(){
	$$.name = "hi";
  sim2 = "hoi";
}());

console.log($$);
console.log(sim2);

//=============================
//output of the console statements

var sum1 = 5;

function summy(){
	console.log(sum1);
  
  summy2();
  var sum1 = 2;
  var summy2 = function(){
  	console.log('gggg');
  }
  console.log(sum1);
}

summy();

//============================
//how to print 45 without including paramters in function declaration

function dummy() {
	//console.log(arguments[2]);
};

dummy(1,'ab',45,'iu');
