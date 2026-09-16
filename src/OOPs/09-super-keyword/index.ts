class Vehicle {
    constructor(brand:string) {
        console.log("Vehicle brand: "+ brand)
    }
}

class Car extends Vehicle {
    constructor() {
        // Explicitly calling the parent constructor with an argument
        super("Ford")
        console.log('car contructor executed.')
    }
}

