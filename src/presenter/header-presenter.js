import { RenderPosition, render } from '../render.js';

import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';

export default class HeaderPresenter {
  headerTripInfoComponent = new TripInfoView();
  headerFilterComponent = new FilterView();

  constructor({ headerTripInfoContainer, headerFilterContainer }) {
    this.headerTripInfoContainer = headerTripInfoContainer;
    this.headerFilterContainer = headerFilterContainer;
  }

  init() {
    render(this.headerTripInfoComponent, this.headerTripInfoContainer, RenderPosition.AFTERBEGIN);
    render(this.headerFilterComponent, this.headerFilterContainer);
  }
}
