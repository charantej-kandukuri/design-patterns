

interface Observer {
  update(): void
}

abstract class UIControl {
  private observers: Observer[] = []

  attach(v: Observer) {
    this.observers.push(v)
  }


  protected notifyObservers() {
    for (const observer of this.observers) {
      observer.update()
    }
  }
}

class ListBox extends UIControl {
  private selection: string = '';

  getSelection() {
    return this.selection;
  }

  setSelection(v: string) {
    this.selection = v;
    this.notifyObservers()
  }

}

class TitleTextBox extends UIControl {
  private content: string = '';

  getContent() {
    return this.content;
  }

  setContent(v: string) {
    this.content = v;
    this.notifyObservers()
  }

}

class Button extends UIControl {
  private isEnabled: boolean = false;

  getIsEnabled() {
    return this.isEnabled;
  }

  setEnabled(v: boolean) {
    this.isEnabled = v;
    this.notifyObservers()
  }
}

class ArticleDialogBox {
  private articleListBox = new ListBox()
  private titleTextBox = new TitleTextBox()
  private saveButton = new Button()

  constructor() {
    // we should tell each of this UIControl objects that 
    // this dialogBox is interested to know about their state changes.
    this.articleListBox.attach({ update: () => this.articleSelected()})
  }

  stimulateUserInteraction() {
    this.articleListBox.setSelection("Article 1")
    console.log("Text Box : " + this.titleTextBox.getContent())
    console.log("Button : " + this.saveButton.getIsEnabled())
  }

  articleSelected() {
    this.titleTextBox.setContent(this.articleListBox.getSelection())
    this.saveButton.setEnabled(true);
  }
}


const articleDialogBox = new ArticleDialogBox()
articleDialogBox.stimulateUserInteraction()