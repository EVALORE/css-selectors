import BaseComponent from '@components/base-component';

class EditorHeader extends BaseComponent {
  constructor(EditorFormat: 'HTML' | 'CSS') {
    super('div', ['editor-header']);
    this.insertChildren(
      new BaseComponent('span', [], EditorFormat === 'CSS' ? 'CSS Editor' : 'HTML Editor'),
      new BaseComponent('span', [], EditorFormat === 'CSS' ? 'style.css' : 'index.html'),
    );
  }
}

export default EditorHeader;
