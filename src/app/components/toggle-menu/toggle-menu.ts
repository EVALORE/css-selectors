import './toggle-menu.scss';
import Observable from '@src/app/interfaces/observable';
import Observer from '@src/app/interfaces/observer';
import BaseComponent from '../base-component';

class ToggleMenu extends BaseComponent implements Observable {
  observers: Observer[];

  constructor() {
    super('div', ['toggle-menu']);
    this.observers = [];
    this.addListener('click', () => this.notify());
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
    this.toggleClass('active');
    this.observers.map((observer) => observer.update());
  }
}

export default ToggleMenu;
