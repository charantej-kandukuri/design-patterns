interface TaxCalculator {
    calculateTax(): number;
}

class TaxCalculator2026 implements TaxCalculator {
    calculateTax(): number {
        return 1;
    }
}

function getCalculator(): TaxCalculator {
    return new TaxCalculator2026();
}

// Unlike Java, TypeScript doesn't force functions to live inside a class. For script entry points and 
// factory functions, standard top-level functions are cleaner and more idiomatic.
function main(): void {
    const calculator: TaxCalculator = getCalculator();
    console.log(calculator.calculateTax());
}

// Entry point call
main();