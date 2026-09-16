interface CoffeeMaker {
    make(data: string): void
}

// BASE COFFEE MAKER
class BasicCoffee implements CoffeeMaker  {
    make(data: string): void {
        console.log(data);
    }
}


// DECORATOR 1
class AddMilk implements CoffeeMaker{
   
    constructor(private coffeeMaker: CoffeeMaker) {}

    make(data: string): void {
        const coffeeWithMilk = this.add(data);
        this.coffeeMaker.make(coffeeWithMilk);
    }

    add(data: string): string {
        return data  + " milk";
    }
}

// DECORATOR 2
class AddSugar implements CoffeeMaker {
    constructor(private coffeeMaker: CoffeeMaker) {}

    make(data: string): void {
        const coffeeWithSugar = this.add(data);
        this.coffeeMaker.make(coffeeWithSugar)
    }

    add(data: string) {
        return data + " sugar"
    }
}

// USAGE
function main () {
    const coffeeMaker = new AddSugar(new AddMilk());
    coffeeMaker.make('coffee ');
}

main()