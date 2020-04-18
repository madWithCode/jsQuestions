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

