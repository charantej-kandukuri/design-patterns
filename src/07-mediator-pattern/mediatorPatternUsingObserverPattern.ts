// Mediater pattern using Observer pattern
interface Observer {
    update(): void
}

abstract class UIControl {
    observers: Observer[] = []

    addObserver(obs: Observer) {
        this.observers.push(obs)
    }

    notifyObservers() {
        for (const observer of this.observers) {
            observer.update()
        }
    }
}

class Button extends UIControl {
    private _isEnabled: boolean = false;
    
    get isEnabled() : boolean {
        return this._isEnabled;
    }

    
    set isEnabled(v : boolean) {
        this.isEnabled = v;
        this.notifyObservers()
    }
    
}

class TextBox extends UIControl {
    private _content: string = '';

    get content() {
        return this._content;
    }

    
    public set content(v : string) {
        this._content = v;
        this.notifyObservers()
    }
    
}

class ListBox extends UIControl {
    private _selection: string = '';

    
    public get selection() : string {
        return this._selection
    }

    public set selection(v : string) {
        this._selection = v;
        this.notifyObservers()
    }
    
}

class ArticalDialogBox {
    private articalsListBox= new ListBox();
    private titleTextBox = new TextBox();
    private saveButton = new Button();
    
    constructor() {
        // add observers
    }

    stimulateUserInteraction() {
        this.articalsListBox.selection = "Acticle1"
        this.titleTextBox.content = "Article 2"
        console.log("TextBox: "+ this.titleTextBox.content)
        console.log("Button: " + this.saveButton.isEnabled)
    }

    private titleChanged() {
        const content = this.titleTextBox.content;
        const isEmpty = (content === null || content === undefined || content === "")
        this.saveButton.isEnabled = !isEmpty
    }

    private articleSelected() {
        this.titleTextBox.content = this.articalsListBox.selection;
        this.saveButton.isEnabled = true;
    }

}