import { createElement } from '../render.js';
import createNewEventButtonTemplate from '../templates/new-event-button-template.js';
export default class NewEventButtonView {
  getTemplate() {
    return createNewEventButtonTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
