import generateMarkup from '@src/app/utils/generateMarkup';
import Observer from '@src/app/interfaces/observer';
import BaseComponent from '../base-component';
import Input from '../input/input';

// import LineNumbers from '../line-numbers/line-numbers';

interface Mediator {
  notify(): void;
}

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

class FileWindow extends BaseComponent implements Observer {
  help: BaseComponent | undefined;

  input: Input | undefined;

  editorFormat: 'HTML' | 'CSS';

  expectedValue: string | undefined;

  mediator: Mediator | undefined;

  constructor(editorFormat: 'HTML' | 'CSS', mediator?: Mediator) {
    super('div', ['file-window']);
    this.editorFormat = editorFormat;
    this.mediator = mediator;

    if (editorFormat === 'CSS') {
      this.input = new Input();
      this.input.subscribe(this);
      this.input.addListener('input', () => {
        this.input!.notify();
      });
      this.help = new BaseComponent('div', ['help']);
      this.help.setInnerHTML(helpDescription);
      this.insertChildren(this.input, this.help);
    }
  }

  initLevel(content: string) {
    if (this.editorFormat === 'HTML') {
      this.setInnerHTML(generateMarkup(content));
    }
    if (this.editorFormat === 'CSS') {
      this.expectedValue = content;
    }
  }

  update(value: string) {
    if (value === this.expectedValue) this.mediator?.notify();
  }
}

export default FileWindow;
