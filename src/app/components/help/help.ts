import './help.scss';
import levels from '@data/levels';
import BaseComponent from '../base-component';

class Help extends BaseComponent {
  currentLevel: number;

  levelHeader: BaseComponent;

  displayHelp: BaseComponent;

  constructor() {
    super('div', ['help-wrapper']);

    this.levelHeader = new BaseComponent('div', ['level-header']);
    this.displayHelp = new BaseComponent('div', ['display-help']);
    this.insertChildren(this.levelHeader, this.displayHelp);
    this.currentLevel = 0;

    this.levelHeader.setContent(`level ${this.currentLevel + 1} of ${levels.length}`);

    const helpContent = `
    <h3 class="selector-name">${levels[this.currentLevel]!.selectorName}</h3>
    <h2 class="title">${levels[this.currentLevel]!.helpTitle}</h2>
    <h3 class="syntax>${levels[this.currentLevel]!.syntax}</h3>
    <div class="hint">${levels[this.currentLevel]!.help}</div>
    <h4 class="examples-title">Examples</h4>
    <div class="examples">
      ${levels[this.currentLevel]!.examples.map(
        (example) => `<div class="example">${example}</div>`,
      ).join('')}
    </div>
    `;
    this.displayHelp.setInnerHTML(helpContent);
  }
}

export default Help;
