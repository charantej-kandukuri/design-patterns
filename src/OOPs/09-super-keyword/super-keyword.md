# Super Keyword in Java


## 1. To invoke Parent Class Contructors(super())
When creating the instance of the subclass, Java automatically calls parent class's default (no argument) constructor.

However if you want to call a specific parametarized contructor from the parent class,
you must use super().
```java
class Vehicle {
    Vehicle(String brand) {
        System.out.println("Vehicle brand: " + brand);
    }
}

class Car extends Vehicle {
    Car() {
        // Explicitly calling the parent constructor with an argument
        super("Ford"); 
        System.out.println("Car constructor executed.");
    }
}


```

## 2. To Access Parent Variables (Overriding Hidden Fields)
If a subclass has a instance variable with the exact same name as a variable in the parent class, the subclass variable **hides** the parent variable. You can use the super.variableName to the child and grab the parent's value.

```java
class Animal {
    String color: "White"
}

class Dog extends Animal {
    String color: "Black"

    void printColor() {
        System.out.println(color); // Prints "Black" (current class)
        System.out.println(super.color); // Prints "White" (parent class)
    }
}

```

## 3. To Invoke Parent Class Methods (Method Overriding)
When a subclass overrides a method from the parent class, calling the method normally will execute the child's version. If you want to run the original, un-overridden parent method,
use super.methodName().
```java
class Parent() {
    void message() {
        System.out.println('Hello from Patent!')
    }
}

class Child extends Parent {
    void message() {
        System.out.println('Hello from child!')
    }

    void display() {
        message() // Invokes child's message
        super.message() // Invokes Parent's message
    }
}
```

💡 Key Restrictions to Keep in Mind
-   No Static Use: `super` cannot be used inside static methods or  static blocks. Static elements belongs to the class, while `super` belogs refers to an _instance_ of parent class.

- Private members: You cannot use `super` to access private fields or private methods of the parent class, as they are not inherited.

