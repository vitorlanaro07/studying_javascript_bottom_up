console.log("-------Type conversition-------");

console.log(10 + " objects");
console.log("7" * "4");

let n = 1 - "x";
console.log(n);
console.log(n + " objects");



console.log("1.2" - "1");

console.log("-------Equality-------");

console.log(isEqual("1.2", "1.2"));
console.log(isEqual(1, "1"));
console.log(isEqual(true, Boolean("one")));
console.log(isEqual(false, 0));
console.log(isEqual(false, "0"));



function isEqual(x, y){
    if(x === y) {
        return true
    } else if(x == y){
        return true
    }
}
console.log("----------Global objects------------");

console.log(Number('0'));
console.log(Boolean([]));
console.log(String(false));



console.log("----------Binary, Octadecimal, and Hexadecimal------------");

let val = 17;
console.log(val.toString(2));
console.log(val.toString(8));
console.log(val.toString(16));




console.log("----------Precision------------");

let valPrec = 1249213.789;
console.log("\n.toFixed()")
console.log(valPrec.toFixed(0));
console.log(valPrec.toFixed(2));
console.log(valPrec.toFixed(5));

console.log("\n.toExponencial()");
console.log(valPrec.toExponential(1));
console.log(valPrec.toExponential(2));
console.log(valPrec.toExponential(3));
console.log(valPrec.toExponential(4));
console.log(valPrec.toExponential(5));
console.log(valPrec.toExponential(6));
console.log(valPrec.toExponential(7));
console.log(valPrec.toExponential(8));
console.log(valPrec.toExponential(9));
console.log(valPrec.toExponential(10)+" " + typeof(valPrec.toExponential(10)));

console.log("\n.toPrecision()");
console.log(valPrec.toPrecision(1));
console.log(valPrec.toPrecision(2));
console.log(valPrec.toPrecision(3));
console.log(valPrec.toPrecision(4));
console.log(valPrec.toPrecision(5));
console.log(valPrec.toPrecision(6));
console.log(valPrec.toPrecision(7));
console.log(valPrec.toPrecision(8));
console.log(valPrec.toPrecision(9));
console.log(valPrec.toPrecision(10));


console.log("---------------Parse Int and Float---------------");



console.log(parseInt("hello 313"));
console.log(parseInt("313 hello"));
console.log(parseInt("-12.54"));
console.log(parseInt("18.0002"));
console.log(parseInt("0xFF"));      //hexa
console.log(parseInt("11",2));      //binary
console.log(parseInt(".1"));

console.log(parseFloat("3.12 some text"));
console.log(parseFloat(".4"));
console.log(parseFloat("$652.23"));
console.log(parseFloat());
console.log(parseFloat());

