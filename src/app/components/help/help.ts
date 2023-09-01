import './help.scss';
import BaseComponent from '../base-component';

type helpInformation = {
  selectorName?: string;
  helpTitle: string;
  syntax: string;
  help: string;
  examples: string[];
  currentLevel: number;
};

class Help extends BaseComponent {
  levelHeader: BaseComponent;

  displayHelp: BaseComponent;

  numberOfLevels: number;

  constructor(numberOfLevels: number) {
    super('div', ['help-wrapper']);

    this.levelHeader = new BaseComponent('div', ['level-header']);
    this.displayHelp = new BaseComponent('div', ['display-help']);
    this.insertChildren(this.levelHeader, this.displayHelp);
    this.numberOfLevels = numberOfLevels;
  }

  updateLevel({ selectorName, helpTitle, syntax, help, examples, currentLevel }: helpInformation) {
    this.levelHeader.setContent(`level ${currentLevel} of ${this.numberOfLevels}`);

    const helpContent = `
    ${selectorName ? `<h3 class="selector-name">${selectorName}</h3>` : ''}
    ${helpTitle ? `<h2 class="title">${helpTitle}</h2>` : ''}
    ${syntax ? `<h3 class="syntax">${syntax}</h3>` : ''}
    ${help ? `<div class="hint">${help}</div>` : ''}
    ${
      examples
        ? `
        <h4 class="examples-title">Examples</h4>
        <div class="examples">
          ${examples.map((example) => `<div class="example">${example}</div>`).join('')}
        </div>
    `
        : ''
    }

    `;
    this.displayHelp.setInnerHTML(helpContent);
  }
}

export default Help;
