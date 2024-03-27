
//hexadecimal
console.log(0xff);

console.log(0x141);

//binario
console.log(0b1000001); // 64 * 1 -> 32 * 0 -> 16 -> 8 -> 4 -> 2 -> 1 * 1

//octal
console.log(0o0111);    // 



//infinity
console.log(1/0);


//passinf string to int
var value = '50';

console.log(typeof(Number.parseInt(value)));



//big int

let bigin = 0x80000000000000000000000n;

console.log(bigin);


let timestamp = Date.now();
console.log(timestamp);

let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();

console.log(now, ms, iso);

