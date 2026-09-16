export class Account {
    private _balance: number = 0;

    public deposit(amount: number) {
        this._balance += amount // augumented assignment operator
    }

    public withdraw(amount: number) {
        this._balance -= amount;
    }

    public get balance() : number {
        return this._balance
    }
    
    
}