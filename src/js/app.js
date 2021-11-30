import CreateCollapse from './components/collapse/CreateCollapse';
import CallbackChat from './components/callback chat/CallbackChat';

const container = document.querySelector('.container');

const collapse = new CreateCollapse(container);
collapse.init();

const chat = new CallbackChat(container);
chat.init();
