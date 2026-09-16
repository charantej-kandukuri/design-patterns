import { Command } from "../fx/Command.interface"

interface command {
    execute(): void
}

class TurnOnAirConditionerCommand implements command {
    constructor(private ac: AirConditioner){}

    execute(): void {
        this.ac.switchOn()
    }
}

class TurnOFFAirConditionerCommand implements command {
    constructor(private ac: AirConditioner){}

    execute(): void {
        this.ac.switchOff()
    }
}
// invoker
class Remote {
    constructor(private command: Command){}
    click() {
        this.command.execute()
    }
}

// reciever
class AirConditioner {
    switchOn() {
        console.log('AC is ON')
    }

    switchOff() {
        console.log('AC is OFF')
    }
}

// Usage
const ac = new AirConditioner()
const command = new TurnOFFAirConditionerCommand(ac)

const remote = new Remote(command)
remote.click()