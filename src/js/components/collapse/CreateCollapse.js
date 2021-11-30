import CreateAppContainer from '../CreateAppContainer';

export default class CreateCollapse {
  constructor(container) {
    this.appContainer = new CreateAppContainer(container);
    this.buttonCollapse = null;
  }

  createCollapse() {
    this.appContainer.createAppContainer();

    const appContainer = document.querySelector('.app-container');

    this.buttonCollapse = document.createElement('div');
    this.buttonCollapse.classList.add('button-collapse');
    this.buttonCollapse.textContent = 'Collapse';

    appContainer.appendChild(this.buttonCollapse);

    const wrapperBlock = document.createElement('div');
    wrapperBlock.classList.add('wrapper-block');
    wrapperBlock.style.display = 'none';

    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit dui sed tellus consectetur varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel posuere eros, a vestibulum tellus. Vestibulum in elementum nulla, ut cursus massa. In pellentesque, quam eget ullamcorper vulputate, justo nibh iaculis eros, eu consectetur libero augue a urna. Curabitur posuere laoreet aliquet. Curabitur ac urna in orci pretium cursus non a dui. ';

    wrapperBlock.appendChild(paragraph);
    appContainer.appendChild(wrapperBlock);
  }

  init() {
    this.createCollapse();

    this.buttonCollapse.addEventListener('click', (e) => {
      const block = e.target.closest('.app-container').querySelector('.wrapper-block');

      if (block.style.display === 'none') {
        block.style.display = 'block';
        const paragraphHeight = block.querySelector('.paragraph').offsetHeight;

        block.style.height = `${paragraphHeight}px`;
      } else {
        block.style.height = '0';

        setTimeout(() => {
          block.style.display = 'none';
        }, 300);
      }
    });
  }
}
