import { AddCustomerCommand } from "./AddCustomer.command";
import { CustomerService } from "./Customer.service";
import { Button } from "./fx/Button.class";

const customerService = new CustomerService();
const command = new AddCustomerCommand(customerService)
const button = new Button(command)
button.click()