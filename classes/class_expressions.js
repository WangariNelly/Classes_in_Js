//create class expression .. not hoisted
let Car = class{
    //construcor to initialize the properties of the car 
    constructor(color, make) {
        this.color = color;
        this.make = make;
    }
    //method to register the car
 registerCar() {
    console.log(`The ${this.color} car is a ${this.make}.`)
 }

 //method to start car
 startCar() {
    console.log(`The ${this.color} car has started.` )
 }
};
 //create n instance of the car

 const redCar = new Car('red', 'Toyota');
 const blackCar = new Car('Black', 'Audi');
// Calling methods on the car instance
redCar.registerCar(); 
blackCar.startCar();  


//expressions are used when the class doesnt need to be referenced elsewhere in the code.