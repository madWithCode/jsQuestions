/*
 implement a function that will give sum if called as => sum(1)(2)(5)......(n)();
*/


function sum(a){
  return function(b){
    if(b !== undefined){
      return sum(a+b);
    }
    return a;
  }
} 

console.log(sum(1)(2)());

/*
  A one liner solution to the above code is 
  
  const sum = a => b => b!== undefined ? sum(a+b):a;
*/
