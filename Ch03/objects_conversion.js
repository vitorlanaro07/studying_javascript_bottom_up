console.log(Date().toString());
console.log(Date());
console.log(Date().valueOf());
console.log("\n")

//passing an object to string
var obj1 = {value: "1", 
            value2: 2, 
            toNumberPlusSum: function (){
                return parseInt(this.value) + this.value2
            },
            toString: function (){
                return `[${this.value},${String(this.value2)}]`
            }
};

var obj2 = ["casa", 12, true, false, .67];

console.log(String(obj2));
console.log(obj2.toString());
console.log(obj2.valueOf());

console.log("\n")

console.log(obj1.toString());
console.log(obj1.toNumberPlusSum());

console.log("\n")

console.log(Number([]));
console.log(Number([99]));
console.log(Number([99]) +  Number([1]));



