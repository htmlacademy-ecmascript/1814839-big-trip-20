import { createElement } from '../render.js';

const getTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';
export default class NewEventButtonView {
  getElement() {
    if (!this.element) {
      this.element = createElement(getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
