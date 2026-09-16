import { TaxCalulator } from "../tax-calulator.interface";

export class TaxCalulator2022 implements TaxCalulator {
    calculateTax(): number {
        return 2;
    }
}