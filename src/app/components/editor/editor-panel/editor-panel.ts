import BaseComponent from '@components/base-component';
import FileWindow from '@components/file-window/file-window';
import EditorHeader from '../editor-header/editor-header';

class EditorPanel extends BaseComponent {
  fileWindow: FileWindow;

  constructor(EditorFormat: 'HTML' | 'CSS') {
    super('div', ['editor-panel']);

    this.fileWindow = new FileWindow(EditorFormat);

    this.insertChildren(new EditorHeader(EditorFormat), this.fileWindow);
  }
}

export default EditorPanel;
