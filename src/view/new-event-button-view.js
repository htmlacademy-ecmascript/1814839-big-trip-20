import AbstractView from '../framework/view/abstract-view.js';

const getTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class NewEventButtonView extends AbstractView {
  #handleClick = null;

  constructor({ onClick }) {
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
  }

  get template() {
    return getTemplate;
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    this.#handleClick();
  };
}

// export default class NewEventButtonView {
//   getElement() {
//     if (!this.element) {
//       this.element = createElement(getTemplate());
//     }

//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
