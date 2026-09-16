import { CustomerService } from "./Customer.service";
import { Command } from "./fx/Command.interface";

export class AddCustomerCommand  implements Command {
    constructor(private service: CustomerService){}

    execute(): void {
        this.service.addCustomer()    
    }
}