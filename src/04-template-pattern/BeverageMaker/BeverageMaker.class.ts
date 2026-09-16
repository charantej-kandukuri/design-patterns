abstract class BeverageMaker {
    makeBevarage(): void {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    protected boilWater() {
        console.log('Boil Water.')
    }

    protected pourInCup() {
        console.log('Pour in cup.')
    }

    protected abstract brew(): void
    protected abstract addCondiments(): void

}

class TeaBevarage extends BeverageMaker {
    protected brew(): void {
        console.log('steeping tea leaf');
    }

    protected addCondiments(): void {
        console.log('adding lemon')
    }
}

class CoffeeBeverage extends BeverageMaker {
    protected brew(): void {
            console.log('Dropping coffee though filter.')
    }

    protected addCondiments(): void {
        console.log('Adding sugar and milk.')
    }
}

// usage
const teaMaker = new TeaBevarage();
teaMaker.makeBevarage()