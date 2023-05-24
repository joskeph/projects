const Car = function(carname){
    this.brand = carname;
    this.tires = 4;
    this.fuel = 100;//starting fuel
}

Car.prototype={
    addFuel : ()=>{
        this.fuel+=100;
    }
}

const x60 = new Car("Volvo")
const sonet = new Car("Kia")

