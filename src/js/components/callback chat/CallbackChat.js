import CreateAppContainer from '../CreateAppContainer';
import ModalChat from './ModalChat';

export default class CallbackChat {
  constructor(container) {
    this.appContainer = new CreateAppContainer(container);
    this.buttonChat = null;
    this.closeButton = null;
    this.appContainers = null;
    this.openChat = this.openChat.bind(this);
  }

  init() {
    this.appContainer.createAppContainer();

    this.appContainers = document.querySelectorAll('.app-container');
    this.buttonChat = document.createElement('div');

    this.buttonChat.classList.add('buttonChat');

    for (const app of [...this.appContainers]) {
      if (!app.childNodes.length) {
        app.style.height = '500px';
        app.style.position = 'relative';
        app.appendChild(this.buttonChat);
      }
    }

    this.buttonChat.addEventListener('click', this.openChat);
  }

  openChat(e) {
    e.currentTarget.style.transform = 'scale(0)';
    const modal = new ModalChat('Напишите нам');
    modal.createModal();

    const modalChat = document.querySelector('.modal-container');

    setTimeout(() => modalChat.classList.add('modal-chat'), 100);

    this.closeButton = document.querySelector('.close-button');

    this.closeButton.addEventListener('click', this.closeChat);

    const formButton = document.querySelector('.button-form');
    formButton.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }

  closeChat(e) {
    e.preventDefault();
    const chatModal = e.currentTarget.closest('.modal-container');
    chatModal.classList.remove('modal-chat');

    setTimeout(() => chatModal.remove(), 100);

    this.buttonChat = document.querySelector('.buttonChat');
    this.buttonChat.style.removeProperty('transform');
  }
}
