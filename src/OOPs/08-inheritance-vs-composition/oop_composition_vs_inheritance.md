# Composition vs Inheritance in OOP (Java)

Composition and Inheritance are two primary ways to reuse code and model relationships between classes in Object-Oriented Programming (OOP).

---

## 1. Inheritance ("Is-A" Relationship)

Inheritance creates a parent-child relationship where a subclass inherits fields and methods from a superclass. 

### Java Example
```java
// Parent class
class Vehicle {
    void move() {
        System.out.println("The vehicle is moving");
    }
}

// Child class inherits from Vehicle
class Car extends Vehicle {
    void honk() {
        System.out.println("Beep beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.move(); // Inherited method
        myCar.honk(); // Car's own method
    }
}
```

---

## 2. Composition ("Has-A" Relationship)

Composition is a design technique where a class references one or more instances of other classes as member variables, building complex behavior out of simpler parts.

### Java Example
```java
// Independent class
class Engine {
    void start() {
        System.out.println("Engine VROOMS to life!");
    }
}

// Car uses Engine
class Car {
    // Composition: Car HAS AN Engine
    private Engine engine = new Engine(); 

    void startCar() {
        engine.start(); // Delegates the work to the engine object
        System.out.println("Car is ready to drive.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.startCar(); 
    }
}
```

---

## 3. Direct Comparison

| Feature | Inheritance (`extends`) | Composition (`new Object()`) |
| :--- | :--- | :--- |
| **Relationship** | **"Is-A"** (Car is a Vehicle) | **"Has-A"** (Car has an Engine) |
| **Coupling** | **Tight** (Changing Vehicle breaks Car) | **Loose** (Engine can change independently) |
| **Flexibility** | **Static** (Fixed at compile time) | **Dynamic** (Can swap engines at runtime) |