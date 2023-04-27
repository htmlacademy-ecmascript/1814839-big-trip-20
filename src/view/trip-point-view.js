import { createElement } from '../render.js';
import createTripPointTemplate from '../templates/trip-point-template.js';
export default class TripPoint {
  getTemplate() {
    return createTripPointTemplate();
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
