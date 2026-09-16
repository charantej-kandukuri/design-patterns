/**
 * Compostion
 * has-a relation
 */

// independent class
class Engine {
    start(): void {
        console.log('Engine VROOMS to life!');
    }
}

class Car {
    //Composition car has a engine
    private engine: Engine = new Engine()

    startCar() {
        this.engine.start(); // Deligates work to engine
        console.log('Car is ready to drive.');
    }
}

const car = new Car();
car.startCar();