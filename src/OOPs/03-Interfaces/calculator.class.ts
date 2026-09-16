import { TaxCalulator2026 } from "./calculators/taxCalculator2026";

export class Calculator {
    getCalculator() {
        return new TaxCalulator2026()
    }
}