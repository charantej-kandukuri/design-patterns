# Design Patterns


## Class
The class contains a constructor, fields and methods.
A class constructor is a method that get called when we create new instance of a class.


## Coupling
One of the important concepts in OO concepts is **coupling** which determines how much a class
is coupled or dependent on another class.

for example: Here in the main class we are using the main class, so the main class is coupled or
dependent on the user class, so if we change the User class, the Main class might be effected,
we have to change it or atleast we have to recompile and redeploy it.

```typescript
class Main {
    const user = new User(name: 'Mosh');
    user.sayHello();
}

```

eg 1 : if we add new parameter 'age' to the User constructor.
so we have changed the user class and hence the main class in broken, we can't compile this code, we need to pass the 'age' argument. `new User('Mosh', 3)`.

This is the problem with coupling.

eg 2: let add a hipen before the print message `console.log(" - Hi, my name is " + this.name");`

The main class complies without any issues.

However because we have changed the code in the User class, this class have to be recompiled and that means all the classes that are depedent on this class has to be recomplied as well.

#### How do we build loosely coupled application?
By using Interfaces

---

## Interface
A contract that specifies the capabilities that a class should provide.

With **Interfaces** we can build **loosely coupled applications**.

The interface defines the contract that each strategy must implement.

#### calulator example
Here we have two different implementations of the interface.

Now in out application instead of working with concreate implementations, we should work with interface, called __programming to an interface.__

## The four core principles of OOP.

### Encapsulation
The encapsulation is really about bundling the data and methods that operate on the data within
a unit/class and hidding the values or state of an object inside a class.

This is mainly done to prevent our object from going to an invalid state,
because if we keep things public someone outside can alter the field values.

### Abstraction
The abstraction means to reduce complexity by hidding unnecessary details in our classes.

#### without abstraction
**The interface of the class shows _all_ methods** such as connect, authenticate etc,
these are implementation details, we dont want to see all that on the interface.

_Analogy: Image a TV remote with 50 buttons its hard to use such remote._

![problem-without-abstraction](/src/OOPs/abstraction/problem.png)

#### with abstraction
- With **abstraction** in place all those will be **hidden**.
- Tomorrow if we change the internals of **MailService** class for eg: `connect(ip)`,
The only breaking changes will be in class itself, the utilization will not effect
becuase we just call the sendEmail() method.

![with-abstraction](/src/OOPs/abstraction/with-abstraction.png)



## Inheritance
Inheritance is a mechanism of reusing code.
All common behaviour goes to parent or base class.

All other classes inherit those behavious.

## polymorphism
Poly = many, morphism = forms.

The ability of an object to take many forms.

The object behaves differently.

## iterator pattern
** This is the concreate implementation of the iterator interface.
we are simply programming to the Iterator interface.

If tomorrow we want to change the iterator (_from list to Array_) all chnage goes to the browseHistory class
the main class (_utilization of this class in index.ts_) remain unaffected.
