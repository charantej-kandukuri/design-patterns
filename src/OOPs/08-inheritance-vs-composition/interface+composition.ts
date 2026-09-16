// We can take if further with interfaces
// With interfaces make the composition even more powerful
// by allowing you to swap a a GasEngine with an ElectricEngine.


interface Engine {
    start(): void;
}

// independent class
class GasEngine implements Engine {
    start(): void {
        console.log('Engine VROOMS to life!');
    }
}

class ElectricEngine implements Engine {
    start(): void {
        console.log('Engine started!');
    }
}

class Car {
    //Composition car has a engine
    constructor(private engine: Engine) {} 

    startCar() {
        this.engine.start(); // Deligates work to engine
        console.log('Car is ready to drive.');
    }
}

const car = new Car(new ElectricEngine());
car.startCar();