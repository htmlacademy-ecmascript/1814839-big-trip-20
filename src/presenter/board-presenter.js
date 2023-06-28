import { RenderPosition, render } from '../render.js';
//header
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
//list
import ListView from '../view/list-view.js';
import AddNewPointView from '../view/add-new-point-view.js';
import TripPoint from '../view/trip-point-view.js';
//main
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  //header
  headerTripInfoComponent = new TripInfoView();
  headerFilterComponent = new FilterView();
  //list
  listComponent = new ListView();
  //main
  mainSortComponent = new SortView();

  constructor({ headerTripInfoContainer, headerFilterContainer, listContainer, mainSortContainer }) {
    //header
    this.headerTripInfoContainer = headerTripInfoContainer;
    this.headerFilterContainer = headerFilterContainer;
    //list
    this.listContainer = listContainer;
    //main
    this.mainSortContainer = mainSortContainer;
  }

  init() {
    //header
    render(this.headerTripInfoComponent, this.headerTripInfoContainer, RenderPosition.AFTERBEGIN);
    render(this.headerFilterComponent, this.headerFilterContainer);
    //list
    render(this.listComponent, this.listContainer);
    render(new AddNewPointView(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripPoint(), this.listComponent.getElement());
    }
    //main
    render(this.mainSortComponent, this.mainSortContainer);
  }
}
