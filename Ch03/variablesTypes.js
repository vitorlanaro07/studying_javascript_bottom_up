//primitive types and object types
//primitive -> number, string and boolean + null and undefined


// ES6 introduced a new kind of type, known as Symbol


//An object has a collection of properties
let card = {
    kind: "car",
    validateDate: "2010"
}


let person = {
    name: "",
    age: "",
    card: card
}


let person2 = {
    name: "",
    age: "",
    card: {
        kind: "car",
        validateDate: "2020"
    }
}

let person3 = {
    name: "",
    age: "",
    card: null
}


a = new Array(10);

console.log(a);

console.log(person3);


var numbertest = 1.199;

console.log(numbertest.toFixed(2));

var text = "Hello, World!";

console.log(text, text[1]);

text = text.replace('e', 'o');


console.log(text);