import './level-menu.scss';
import levels from '@src/app/data/levels';
import Mediator from '@src/app/interfaces/mediator';
import Observer from '@src/app/interfaces/observer';
import BaseComponent from '../base-component';

class LevelMenu extends BaseComponent implements Observer {
  levels: BaseComponent;

  levelsList: HTMLDivElement[];

  mediator: Mediator;

  constructor(mediator: Mediator) {
    super('div', ['level-menu']);

    this.levels = new BaseComponent('div', ['levels'], '', this.node);
    this.mediator = mediator;

    this.levelsList = levels.map((level, index) => {
      const levelElement = document.createElement('div');
      levelElement.innerHTML = level.syntax;
      levelElement.onclick = () => this.selectedLevel(index);
      return levelElement;
    });

    this.levelsList.map((level) => this.levels.getNode().append(level));
  }

  selectedLevel(index: number) {
    if (this.mediator.changeLevel) this.mediator.changeLevel(index);
  }

  update() {
    this.toggleClass('open');
  }
}

export default LevelMenu;
