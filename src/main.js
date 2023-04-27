import { render } from './render.js';
import NewEventButtonView from './view/new-event-button-view.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import AddNewPointView from './view/add-new-point-view.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const tripControlsFilters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const tripEvents = main.querySelector('.trip-events');

const eventButton = new NewEventButtonView();
const filter = new FilterView();
const sort = new SortView();
const addNewPoint = new AddNewPointView();

render(eventButton, tripMain);
render(filter, tripControlsFilters);
render(sort, tripEvents);
render(addNewPoint, tripEvents);
