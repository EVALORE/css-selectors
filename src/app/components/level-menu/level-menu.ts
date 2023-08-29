import './level-menu.scss';
import levels from '@src/app/data/levels';
import Observer from '@src/app/interfaces/observer';
import BaseComponent from '../base-component';

class LevelMenu extends BaseComponent implements Observer {
  levels: BaseComponent;

  constructor() {
    super('div', ['level-menu']);

    this.levels = new BaseComponent('div', ['levels'], '', this.node);
    this.levels.setInnerHTML(levels.map((level) => `<div>${level.syntax}</div>`).join(''));
  }

  update() {
    this.toggleClass('open');
  }
}

export default LevelMenu;
