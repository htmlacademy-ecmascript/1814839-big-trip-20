import { render } from '../render.js';
import SortView from '../view/sort-view.js';

export default class MainPresenter {
  mainSortComponent = new SortView();

  constructor({ mainSortContainer }) {
    this.mainSortContainer = mainSortContainer;
  }

  init() {
    render(this.mainSortComponent, this.mainSortContainer);
  }
}
