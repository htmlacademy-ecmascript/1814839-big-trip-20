import BoardPresenter from './presenter/board-presenter.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const tripControlsFilters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const tripEvents = main.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  headerTripInfoContainer: tripMain, headerFilterContainer: tripControlsFilters,
  listContainer: main, mainSortContainer: tripEvents
});

boardPresenter.init();
