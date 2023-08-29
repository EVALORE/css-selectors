import './editor.scss';
import BaseComponent from '../base-component';
import EditorPanel from './editor-panel/editor-panel';

class Editor extends BaseComponent {
  constructor() {
    super('div', ['editor']);
    this.insertChildren(new EditorPanel('CSS'), new EditorPanel('HTML'));
  }
}

export default Editor;
