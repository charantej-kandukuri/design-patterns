import { PaymentStategy } from "./paymentStategy.interface";

export class Payment {
    constructor(private mode: PaymentStategy){}

    pay() {
        this.mode.pay()
    }
}