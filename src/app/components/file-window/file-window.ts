import generateMarkup from '@utils/markupGenerator';
import levels from '@data/levels';
import BaseComponent from '../base-component';
import Input from '../input/input';

// import LineNumbers from '../line-numbers/line-numbers';

const helpDescription = `
    {<br>
      /* Styles would go here. */<br>
    }<br>
    <br>
    /*<br>
      Type a number to skip to a level.<br>
      Ex → "5" for level 5<br>
    */<br>
    `;

class FileWindow extends BaseComponent {
  help: BaseComponent;

  inputValue: string;

  input: Input;

  constructor(EditorFormat: 'HTML' | 'CSS') {
    super('div', ['file-window']);

    this.help = new BaseComponent('div', ['help']);
    this.help.setInnerHTML(helpDescription);
    this.input = new Input();
    this.inputValue = this.input.getValue();

    if (EditorFormat === 'CSS') {
      this.insertChildren(this.input, this.help);
    }

    if (EditorFormat === 'HTML') {
      this.setInnerHTML(generateMarkup(levels[1]!.boardMarkup));
    }
  }
}

export default FileWindow;
