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

const str = "we are in an interview";
const newStr = str.replace(/\s[a-z]/g, function(f){
    return f.trim().toUpperCase();
});
console.log(newStr);
