class AuditTrail {
    public record(): void {
        console.log('Audit');
    }
}

abstract class Task {
    private auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this.auditTrail = auditTrail;
    }

    public execute(): void {
        this.auditTrail.record();
        this.doExecute();
    }

    protected abstract doExecute(): void;
}

class TransferMoneyTask extends Task {
    constructor(auditTrail: AuditTrail) {
        super(auditTrail);
    }

    protected doExecute(): void {
        console.log('Transfer Money.');
    }
}

// Example usage to make it a runnable Node.js program
const audit = new AuditTrail();
const task = new TransferMoneyTask(audit);
task.execute();