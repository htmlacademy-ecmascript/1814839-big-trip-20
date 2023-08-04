import { createElement } from '../render.js';

const getTemplate = () => '<ul class="trip-events__list"></ul>';
export default class ListView {

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

