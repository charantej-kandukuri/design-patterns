class UIControl {}

abstract class Listbox {
  protected selection: string = "";

  getSelection() {
    return this.selection;
  }

  setSelection(v: string) {
    this.selection = v;
    this.changed();
  }

  protected abstract changed(): void;
}

abstract class TextBox {
  private content: string = "";

  getContent() {
    return this.content;
  }

  setContent(v: string) {
    this.content = v;
    this
  }

  abstract changed(): void
}

abstract class Button {
  private isEligible: boolean = false;

  getIsEnable() {
    return this.isEligible;
  }

  setIsEligible(v: boolean) {
    this.isEligible = v;
  }
}

class ArticleListBox extends Listbox {
  constructor(
    private articleTextBox: TextBox,
    private saveButton: Button,
  ) {
    super();
  }

  protected changed(): void {
    this.articleTextBox.setContent(this.getSelection());
    this.saveButton.setIsEligible(true)
  }
}

class TitleTextBox extends TextBox {
  constructor(private button: Button){
    super()
  }

  changed(): void {
    this.button.setIsEligible(true)
  }  
}

class SaveButton extends Button {}


const button = new SaveButton();
const textBox = new TitleTextBox(button);
const selectionBox = new ArticleListBox(textBox, button)


console.info(':: BEFORE ::');
console.log(selectionBox.getSelection())
console.log(textBox.getContent())
console.log(button.getIsEnable())

console.info(':: AFTER ::');
selectionBox.setSelection('Article1')
console.log('ListBox' + selectionBox.getSelection())
console.log('TextBox' + textBox.getContent())
console.log('Button' + button.getIsEnable())
