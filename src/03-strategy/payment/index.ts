import { Payment } from "./payment";
import { Card } from "./payment_strategies/card";
import { Upi } from "./payment_strategies/upi";

const p = new Payment(new Card());
p.pay();
