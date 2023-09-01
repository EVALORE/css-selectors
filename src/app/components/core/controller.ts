import levels from '@src/app/data/levels';
import BaseComponent from '../base-component';
import Editor from '../editor/editor';
import Help from '../help/help';
import LevelMenu from '../level-menu/level-menu';
import ToggleMenu from '../toggle-menu/toggle-menu';

class Controller extends BaseComponent {
  leftColumn: BaseComponent;

  rightColumn: BaseComponent;

  editor: Editor;

  help: Help;

  levelMenu: LevelMenu;

  toggleMenu: ToggleMenu;

  levelIndex: number;

  constructor() {
    super('div', ['app']);

    this.editor = new Editor(this);
    this.levelMenu = new LevelMenu(this);
    this.help = new Help(levels.length);
    this.toggleMenu = new ToggleMenu();

    this.levelIndex = 0;

    this.leftColumn = new BaseComponent('div', ['left-column']);
    this.rightColumn = new BaseComponent('div', ['right-column']);
    this.leftColumn.insertChildren(this.editor);

    this.toggleMenu.subscribe(this.levelMenu);

    this.rightColumn.insertChildren(this.toggleMenu, this.help, this.levelMenu);

    this.insertChildren(this.leftColumn, this.rightColumn);

    this.initLevel();
  }

  initLevel() {
    this.editor.updateLevel({
      selector: levels[this.levelIndex]!.selector,
      boardMarkup: levels[this.levelIndex]!.boardMarkup,
    });
    this.help.updateLevel({
      selectorName: levels[this.levelIndex]!.selectorName,
      helpTitle: levels[this.levelIndex]!.helpTitle,
      syntax: levels[this.levelIndex]!.syntax,
      help: levels[this.levelIndex]!.help,
      examples: levels[this.levelIndex]!.examples,
      currentLevel: this.levelIndex + 1,
    });
  }

  changeLevel(index: number) {
    this.editor.updateLevel({
      selector: levels[index]!.selector,
      boardMarkup: levels[index]!.boardMarkup,
    });
    this.help.updateLevel({
      selectorName: levels[index]!.selectorName,
      helpTitle: levels[index]!.helpTitle,
      syntax: levels[index]!.syntax,
      help: levels[index]!.help,
      examples: levels[index]!.examples,
      currentLevel: index + 1,
    });
  }

  notify() {
    this.levelIndex += 1;
    this.initLevel();
  }
}

export default Controller;
