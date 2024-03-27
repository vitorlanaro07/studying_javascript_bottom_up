//Symbol return different value, so symbols with the same strings are different
let sym = Symbol("name");
let sym1 = Symbol("name");

if(sym === sym1){
    console.log("true");
}else{
    console.log("false");
}


let str = 'name';
let sym2 = Symbol();
let o = {};



o[sym] = 1;
o[str] = 2;

console.log(o, o[sym], o[str]);

console.log(sym.description);

//symbol .for return the same value, so symbols with the same strings are equal
let s = Symbol.for('shared');
let s1 = Symbol.for('shared');

if(s === s1){
    console.log("true");
}else{
    console.log("false");
}

console.log(Symbol.keyFor(s), Symbol.keyFor(s1));

