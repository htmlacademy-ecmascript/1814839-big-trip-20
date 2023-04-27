import { renderBeforeEnd } from '../render.js';

import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import TripPoint from '../view/trip-point-view.js';

export default class ListPresenter {
  listComponent = new ListView();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    renderBeforeEnd(this.listComponent, this.listContainer);
    renderBeforeEnd(new AddNewPointView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      renderBeforeEnd(new TripPoint(), this.listComponent.getElement());
    }
  }
}
