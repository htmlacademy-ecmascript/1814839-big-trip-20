import { render } from '../render.js';

import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import TripPoint from '../view/trip-point-view.js';

export default class ListPresenter {
  listComponent = new ListView();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.listComponent, this.listContainer);
    render(new AddNewPointView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPoint(), this.listComponent.getElement());
    }
  }
}
