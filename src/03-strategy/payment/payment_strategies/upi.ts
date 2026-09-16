import { PaymentStategy } from "../paymentStategy.interface";

export class Upi implements PaymentStategy {
    pay(): void {
    console.log('made payment via UPI.')
    }
 
}