export default class CreateAppContainer {
  constructor(container) {
    if (typeof container === 'string') {
      this.container = document.querySelector(container);
    } else {
      this.container = container;
    }
  }

  createAppContainer() {
    const appContainer = document.createElement('div');
    appContainer.classList.add('app-container');

    this.container.appendChild(appContainer);
  }
}
