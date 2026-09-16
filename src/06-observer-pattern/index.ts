interface Observer {
    update(): void
}

// Observable
class Subject {
    private observers: Observer[] = []

    addObserver(obs: Observer) {
        this.observers.push(obs)
    }

    removeObserver(obs: Observer) {
        const obsIndex = this.observers.findIndex(item => item === obs);
        this.observers.splice(obsIndex, 1)
        console.log('detatch', this.observers)
    }

    notifyObservers() {
        for (const obs of this.observers) {
            obs.update()
        }
    }
}

class Datasource extends Subject {
    private _value: number = 0

    getValue() {
        return this._value;
    }

    setValue(value: number) {
        this._value = value
        this.notifyObservers()
    }

}


class SpreadSheet implements Observer {
    constructor(private ds: Datasource) {}
    update(): void {
        console.log('SpreadSheet observer notified.' + ds.getValue()) // PULL STYLE communication
    }
}

class Chart implements Observer {
    update(): void {
        console.log('Chart observer notified.')
    }
}

const ds = new Datasource();

const ss = new SpreadSheet(ds);
const chart = new Chart()

ds.addObserver(ss)
ds.addObserver(chart)

ds.setValue(1);
