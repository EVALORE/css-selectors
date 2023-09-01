import Observable from '@src/app/interfaces/observable';
import Observer from '@src/app/interfaces/observer';
import BaseComponent from '../base-component';

class Input extends BaseComponent implements Observable {
  input: HTMLInputElement;

  observers: Observer[];

  constructor() {
    super('input', ['input']);
    this.input = <HTMLInputElement>this.node;
    this.observers = [];
  }

  subscribe(observer: Observer): void {
    const isExist = this.observers.includes(observer);

    if (isExist) return;
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.map((observer) => observer.update(this.getValue()));
  }

  getValue() {
    return this.input.value;
  }
}

export default Input;
