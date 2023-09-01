interface Mediator {
  notify(): void;
  changeLevel?(index: number): void;
}

export default Mediator;
