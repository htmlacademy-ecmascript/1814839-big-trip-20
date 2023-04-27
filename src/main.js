import { renderAfterBegin, renderBeforeEnd } from './render.js';
import TripInfoView from './view/trip-info-view.js';
import FilterView from './view/filter-view.js';
import ListPresenter from './presenter/list-presenter.js';
import SortView from './view/sort-view.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const tripControlsFilters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const tripEvents = main.querySelector('.trip-events');

const tripInfo = new TripInfoView();
const filter = new FilterView();
const sort = new SortView();
const listPresenter = new ListPresenter({ listContainer: tripEvents });

renderAfterBegin(tripInfo, tripMain);
renderBeforeEnd(filter, tripControlsFilters);
renderAfterBegin(sort, tripEvents);

listPresenter.init();
