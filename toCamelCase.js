const str = "we are in an interview";

const strArry = str.split(' ');

for(let i = 1; i < strArry.length; i++){
  strArry[i] = strArry[i].replace(/[a-z]/, function(f){
    return f.toUpperCase();
  });
}
strArry[0] = strArry[0].toLowerCase();
console.log(strArry.join(''));


//=================much more simpler version=======================

let str = "We are in an interview";
 str = str.replace(/\s[a-z]/g, function(f){
    return f.trim().toUpperCase();
});

 str = str.replace(/[A-Z]/, function(f){
    return f.toLowerCase();
});

console.log(str);
