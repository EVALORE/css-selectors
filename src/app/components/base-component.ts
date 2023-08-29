/* eslint-disable default-param-last */
class BaseComponent {
  protected node: HTMLElement;

  constructor(
    tagName: keyof HTMLElementTagNameMap = 'div',
    classNames: Array<string> = [],
    textContent = '',
    parentNode?: HTMLElement,
  ) {
    this.node = document.createElement(tagName);
    this.node.classList.add(...classNames);
    this.node.textContent = textContent;
    if (parentNode) {
      parentNode.append(this.node);
    }
  }

  insertChild(child: BaseComponent) {
    this.node.append(child.getNode());
  }

  insertChildren(...children: BaseComponent[]) {
    children.forEach((child) => {
      this.insertChild(child);
    });
  }

  getNode(): HTMLElement {
    return this.node;
  }

  setContent(content: string) {
    this.node.textContent = content;
  }

  setInnerHTML(html: string) {
    this.node.innerHTML = html;
  }

  addListener(
    event: string,
    listener: (e?: Event) => void,
    options: boolean | AddEventListenerOptions = false,
  ): void {
    this.node.addEventListener(event, listener, options);
  }

  addClass(className: string): void {
    this.node.classList.add(className);
  }

  removeClass(className: string): void {
    this.node.classList.remove(className);
  }

  toggleClass(className: string): void {
    this.node.classList.toggle(className);
  }
}

export default BaseComponent;
