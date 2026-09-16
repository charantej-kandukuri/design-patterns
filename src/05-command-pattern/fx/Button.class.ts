import { Command } from "./Command.interface";

// Invoker
export class Button {
    constructor(private command: Command){}

    click() {
        this.command.execute()
    }
}