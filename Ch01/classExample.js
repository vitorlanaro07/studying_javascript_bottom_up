class Car {
    constructor (model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    speed(){
        console.log("Vrummmmmm");
    }

    break(){
        console.log("Birrrrrrrrrrr");
    }
}

let corsa = new Car('Corsa', 2010, "Gray");
corsa.speed();