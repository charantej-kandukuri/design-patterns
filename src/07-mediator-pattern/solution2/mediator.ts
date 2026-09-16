abstract class DialogBox {
  abstract changed(control: UIControl): void;
}

class UIControl {
  protected owner;

  constructor(owner: DialogBox) {
    this.owner = owner;
  }
}

class ListBox extends UIControl {
  constructor(owner: DialogBox) {
    super(owner);
  }
  private selection: string = "";

  getSelection() {
    return this.selection;
  }

  setSelection(v: string) {
    this.selection = v;
    this.owner.changed(this);
  }
}

class TextBox extends UIControl {
  constructor(onwer: DialogBox) {
    super(onwer);
  }

  private content: string = "";

  getContent() {
    return this.content;
  }

  setContent(v: string) {
    this.content = v;
    this.owner.changed(this);
  }
}

class Button extends UIControl {
  constructor(owner: DialogBox) {
    super(owner);
  }
  private isEligible: boolean = false;

  getIsEligible() {
    return this.isEligible;
  }

  setIsEligible(v: boolean) {
    this.isEligible = v;
    this.owner.changed(this);
  }
}

// Usage
class ArticleDialogBox implements DialogBox {
  private articleListBox = new ListBox(this)
  private titleTextBox = new TextBox(this)
  private saveButton = new Button(this)

  stimulateUserInteraction() {
    this.articleListBox.setSelection('Article 1');
  }

  changed(control: UIControl): void {
    if(control == this.articleListBox) {
      this.selectionChanged()
      console.info('Title:  ' + this.titleTextBox.getContent())
      console.info('Button: ' + this.saveButton.getIsEligible())
    }
  }

  private selectionChanged() {
    this.titleTextBox.setContent(this.articleListBox.getSelection())
    this.saveButton.setIsEligible(true)
  }
}


function main() {
  const articleDialogBox = new ArticleDialogBox();
  articleDialogBox.stimulateUserInteraction();
}

main()
