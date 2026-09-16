class AuditTrail {
    record() {
        console.log('audit')
    }
}

abstract class Task {
    private auditTrail: AuditTrail;
    
    // default constructor
    constructor() {
        this.auditTrail = new AuditTrail()
    }

    execute() {
        this.auditTrail.record();
        // what will happen after will be determined by the sub classes.
        this.doExecute();
    }

    protected abstract doExecute(): void
}


class TransferMoney extends Task {
    protected doExecute(): void {
        console.log('Transfer Money.')
    }
}

class GenerateReport extends Task {
    protected doExecute(): void {
        console.log('Generate Report.')
    }
}

// usage
function main() {
    const task = new TransferMoney()
    task.execute()

    const task2 = new GenerateReport();
    task2.execute()
}

main()