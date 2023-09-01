import './editor.scss';
import Mediator from '@interfaces/mediator';
import BaseComponent from '../base-component';
import FileWindow from '../file-window/file-window';

type LevelInformation = { selector: string; boardMarkup: string };

class Editor extends BaseComponent {
  cssEditor: BaseComponent;

  cssWindow: FileWindow;

  htmlEditor: BaseComponent;

  htmlWindow: FileWindow;

  mediator: Mediator;

  constructor(mediator: Mediator) {
    super('div', ['editor']);
    this.mediator = mediator;

    this.cssEditor = new BaseComponent('div', ['editor-panel'], '', this.node);
    this.htmlEditor = new BaseComponent('div', ['editor-panel'], '', this.node);
    this.insertEditorHeader('CSS');
    this.insertEditorHeader('HTML');
    this.cssWindow = new FileWindow('CSS', this);
    this.htmlWindow = new FileWindow('HTML');
    this.cssEditor.insertChild(this.cssWindow);
    this.htmlEditor.insertChild(this.htmlWindow);
  }

  insertEditorHeader(EditorFormat: 'HTML' | 'CSS') {
    const editorHeader = new BaseComponent('div', ['editor-header']);
    if (EditorFormat === 'CSS') {
      editorHeader.setInnerHTML('<span>CSS Editor</span><span>style.css</span>');
      this.cssEditor.insertChild(editorHeader);
    }
    if (EditorFormat === 'HTML') {
      editorHeader.setInnerHTML('<span>HTML Editor</span><span>index.html</span>');
      this.htmlEditor.insertChild(editorHeader);
    }
  }

  updateLevel(level: LevelInformation) {
    this.htmlWindow.initLevel(level.boardMarkup);
    this.cssWindow.initLevel(level.selector);
  }

  notify() {
    this.mediator.notify();
  }
}

export default Editor;
