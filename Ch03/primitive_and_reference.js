//null, undefined, string, numbers, boolean are primitive values and imutable

//objects like array, object are mutable


//on this examples bellow I'm testing reference from objects
let a = [];
let b = a;

b[0] = {testing: "hello"};

console.log(a);

let car = {value: "blue"};
let x = car;

x.value = "opa";

console.log(car);

//primitiv