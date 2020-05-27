var y = 50;

const foo = x => x + this.y;

const bar = function(x) {
   return x + this.y;
}

const fooBind = foo.bind({y:10});
const barBind = bar.bind({y:10});

console.log(fooBind(10));
console.log(barBind(20));

//================================

class Test {
    constructor(){
      this.value = "hello here";
    }
    
    read(callback){
      setTimeout(callback, 100);
    }  
}

this.value = "hello there";
const test = new Test();
test.read(function(){
    console.log(this.value);
});

test.read(() => {
    console.log(this.value);
})


//================================

function alter(a,b){
	a = 10;
	b.a = 10;
}


var a = 2;
var b = {a: 2, b:3};

alter(a,b);
console.log(a);
console.log(b.a);

//==================================

var obj = function(){};

obj.prototype.scp = function(){
	console.log(this === window ? "window" : "obj");
}


var obj1 = new obj();
var scp = obj1.scp;

obj1.scp();
scp();

//==================================

Promise.resolve('res1')
   .then(Promise.resolve('res2'))
   .then(Promise.resolve('res3'))
   .then(function (result){
		console.log(result);
});


//=================================

let promise = new Promise(function(resolve, reject) {
  resolve(1);
  resolve(2);
  console.log('here');		
});

promise.then((res) => console.log(res);
