// 1 . given object 
var givenObj = {
    "Key1": "1",
    "Key2": {
        "a": "2",
        "b": "3",
        "c": {
            "d": "4",
            "e": "5"
        }
    }
};

// write a function that will output 
/**
 * =============output =======
 * {
 * key1:1,
 * key2.a:2,
 * key2.b:3,
 * key2.c.d:4,
 * key2.c.e:5}
 */
 
// Mycode: 
 
 const result = {};
 flatObject = (obj, str) => {
   Object.keys(obj).forEach((key) => {
    if(typeof obj[key] !== 'string') {
      str.push(key);
      flatObject(obj[key], str);
    } else {
      let objKey = key;
      if(str.length){
        objKey = `${str.join('.')}.${key}`;
      }
      result[objKey] = obj[key];
      }
   });
 }

 flatObject(givenObj, []);
 console.log(result)
