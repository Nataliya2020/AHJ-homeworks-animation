export default class ModalChat {
  constructor(title) {
    this.title = title;
  }

  createModal() {
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container');

    const contentModal = document.createElement('div');
    contentModal.classList.add('content-modal');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = this.title;

    const form = document.createElement('form');
    const textArea = document.createElement('textarea');
    textArea.classList.add('textArea');

    const buttonForm = document.createElement('button');
    buttonForm.classList.add('button-form');
    buttonForm.textContent = 'Отправить';

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.setAttribute('type', 'button');
    closeButton.textContent = 'X';

    contentModal.appendChild(title);
    contentModal.appendChild(closeButton);
    contentModal.appendChild(form);
    form.appendChild(textArea);
    form.appendChild(buttonForm);

    modalContainer.appendChild(contentModal);

    this.appContainers = document.querySelectorAll('.app-container');
    for (const app of [...this.appContainers]) {
      if (app.childNodes.length) {
        for (const appChild of [...app.childNodes]) {
          if (appChild.classList.contains('buttonChat')) {
            app.appendChild(modalContainer);
          }
        }
      }
    }
  }
}
