import { Account } from "./account.class";

const account = new Account();
account.deposit(10);
account.withdraw(5)

console.log(account.balance)