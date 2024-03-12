let y = 3;

function plus1(x){
    return x + 1;
}

let square = function(x){
    return (x * x);
}

// console.log(y);
// console.log(plus1(y));
// console.log(square(y));
// console.log(square(plus1(y)));


//_----------------------------------------------
//using arrow function!

let value = 1; 

let plus2 = (x) => x + 2;       // 1 + 2 => 3
let cube = (x) => x * x * x;    // 3 * 3 * 3 => 27

// console.log(cube(plus2(value)));


let carro = {
    modelo: 'Corsa',
    ano: 2020,
    estado: 'Novo',
    acelerar: () => {console.log('Vrummmmmmmmmmm')},
    freiar: function(){
        console.log('Birrrrrr');
    }
}

// carro.acelerar();
// carro.freiar();


let x = [1,2,3,4,5,6,7,8,9];

x.sumOfAllElements = function(){
    p1 = this[0];
    pLast = this[this.length - 1];
    let sum = 0;
    x.forEach(value => {
        sum += value; 
    });

    return sum;
}

let sum = x.sumOfAllElements();

console.log(sum);