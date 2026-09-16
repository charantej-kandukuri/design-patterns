/**
 * 1. Inheritance
 * Is-a relation
 */

// super class
class Vehicle {
    move() {
        console.log('The vehicle is moving.');
    }
}

// subclass
class Car extends Vehicle {
    honk() {
        console.log('Beep beep!');
    }
}

const car = new Car();
car.move() // Inherited
car.honk()