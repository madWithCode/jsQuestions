/* you will be given with an encoded string like "91921061071083267", 
now write a function that will decode based on certain conditions 
1) A starts with 65 till Z,

2) a starts with 91 till z 

3) Space  have a value of 32
*/

//my solution :

//A starts with 65 till Z,
const small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//a starts with 91 till z 
const caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//Space  have a value of 32;
const encode = "91921061071083267";
let decode = (encoded) => {
let i = 0;

const result = [];
while(i < encode.length){
 	let num = encoded.substr(i, 3);
  if(parseInt(num) > 117){
  	num = encoded.substr(i, 2);
    i += 2;
  }else{
    i += 3;
  }
  
  if (num >= 91) {
  	let index = num%91;
    result.push(caps[index]);
  } else if (num >= 65 ) {
  	let index = num%65;
    result.push(small[index]);
  } else {
  	result.push(' ');
  }
 }
 return result.join('');
};


console.log(decode(encode));

