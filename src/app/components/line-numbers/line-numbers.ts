import './line-numbers.scss';
import BaseComponent from '../base-component';

class LineNumbers extends BaseComponent {
  public numberOfLines: number;

  constructor(numberOfLines: number = 20) {
    super('div', ['line-numbers']);
    this.numberOfLines = numberOfLines;
    this.generateLines();
  }

  public generateLines() {
    let content = '';
    for (let index = 1; index <= this.numberOfLines; index += 1) {
      content += `${index}<br>`;
    }
    this.setInnerHTML(content);
  }
}

export default LineNumbers;
