import AbstractView from '../framework/view/abstract-view.js';
import { CITIES } from '../mock/consts-mock.js';
import { getRandomArrayElement } from '../utils.js';
import MockService from '../service/mock-service.js';

const getOffers = (type) => {
  const mockService = new MockService();
  const offersByType = mockService.offers.find((offer) => offer.type === type).offers;

  return offersByType.map(
    (offer) => `<li class="event__offer" >
      <span class="event__offer-title">${offer.title}</span>
    <span class="event__offer-price">${offer.price}</span>
</li> `
  ).join('');
};

const getTemplate = (point) => {
  const name = getRandomArrayElement(CITIES);
  const { type, basePrice, isFavorite } = point;

  return `<li class="trip-events__item" >
  <div class="event">
    <time class="event__date" datetime="2019-03-18">MAR 18</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event ${type} icon">
    </div >
    <h3 class="event__title">${type} ${name}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>
      </p>
      <p class="event__duration">30M</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${getOffers(type)}
    </ul >
    <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''} " type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />
      </svg>
    </button>
    <button class="event__rollup-btn" type="button"> //на вот эту кнопку навешиваются евент листнеры
      <span class="visually-hidden">Open event</span>
    </button>
  </div >
</li> `;
};

export default class TripPointView extends AbstractView {
  #point = null;
  #onEditClick = null;

  constructor({ point, onEditClick }) {
    super();
    this.#point = point;
    this.#onEditClick = onEditClick;

    this.element
      .querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return getTemplate(this.#point);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#onEditClick();
  };
}


// export default class TripPointView {
//   constructor({ point }) {
//     this.point = point;
//   }

//   getElement() {
//     if (!this.element) {
//       this.element = createElement(getTemplate(this.point));
//     }

//     return this.element;
//   }

//   removeElement() {
//     this.element = null;
//   }
// }
