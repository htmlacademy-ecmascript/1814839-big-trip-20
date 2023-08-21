import AbstractView from '../framework/view/abstract-view.js';

function getFilterItem(filter) {
  return `
  <div class="trip-filters__filter">
    <input id="filter-${filter.type}"
    class="trip-filters__filter-input
    visually-hidden
     type="radio"
     name="trip-filter"
     value="${filter.type}"
     ${(filter.hasPoints) ? '' : 'disabled'}>
    <label class="trip-filters__filter-label"
    for="filter-${filter.type}">${filter.type}</label>
  </div >
    `;
}

function getTemplate({ filters }) {
  return `
  <form class="trip-filters" action = "#" method = "get" >
${filters.map(getFilterItem).join('')}
  <button class="visually-hidden" type="submit">Accept filter</button>
</form>
`;
}

export default class FilterView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return getTemplate(this.#filters);
  }
}

// export default class FilterView {

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

