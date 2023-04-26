import { render } from './render.js';
import NewEventButtonView from './view/new-event-button-view.js';

const header = document.querySelector('.page-header');

const eventButton = new NewEventButtonView();

render(eventButton, header);
