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

  constructor() {
    super('div', ['app']);

    this.editor = new Editor();
    this.help = new Help();
    this.levelMenu = new LevelMenu();
    this.toggleMenu = new ToggleMenu();

    this.leftColumn = new BaseComponent('div', ['left-column']);
    this.rightColumn = new BaseComponent('div', ['right-column']);
    this.leftColumn.insertChildren(this.editor);

    this.toggleMenu.subscribe(this.levelMenu);

    this.rightColumn.insertChildren(this.toggleMenu, this.help, this.levelMenu);

    this.insertChildren(this.leftColumn, this.rightColumn);
  }
}

export default Controller;
