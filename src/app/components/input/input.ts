import BaseComponent from '../base-component';

class Input extends BaseComponent {
  input: HTMLInputElement;

  constructor() {
    super('input', ['input']);
    this.input = <HTMLInputElement>this.node;
  }

  getValue() {
    return this.input.value;
  }
}

export default Input;
