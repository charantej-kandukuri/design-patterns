import { PaymentStategy } from "../paymentStategy.interface";

export class Card implements PaymentStategy {
    pay(): void {
        console.log('made payment via card.')
    }

}