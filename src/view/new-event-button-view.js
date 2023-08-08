import AbstractView from '../framework/view/abstract-view.js';

const getTemplate = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class NewEventButtonView extends AbstractView {

  get template() {
    return getTemplate;
  }
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
