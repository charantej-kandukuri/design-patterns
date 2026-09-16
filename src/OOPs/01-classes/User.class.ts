export class User {
    // fields
    name: string;

    constructor(name: string) {
        this.name = name
    }


    // methods
    sayHello() {
        console.log("Hi, my name is " + this.name)
    }
}