//https://www.youtube.com/watch?v=y2XSsC1UsAY&list=PLcN6MkgfgN4A2YIiR5vIHyZPO7VeFDaQs&index=5

function Human(name){
	this.name = name;
}

Human.prototype.talk = function(){
	console.log('human can talk, name', this.name);
}

function Worker(job){
	this.job = job;
}

Worker.prototype.work = function(){
	console.log('job is '+this.job);
}


function Bob(job){
	Human.call(this, 'bob');
  Worker.call(this, job);
}

var blob = new Bob("IN4 at wallmart");

Bob.prototype = Object.create(Human.prototype);

blob.talk();
