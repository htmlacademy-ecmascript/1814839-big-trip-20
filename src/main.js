import HeaderPresenter from './presenter/header-presenter.js';
import MainPresenter from './presenter/main-presenter.js';
import ListPresenter from './presenter/list-presenter.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const tripControlsFilters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const tripEvents = main.querySelector('.trip-events');

const headerPresenter = new HeaderPresenter({ headerTripInfoContainer: tripMain, headerFilterContainer: tripControlsFilters });
const listPresenter = new ListPresenter({ listContainer: tripEvents });
const mainPresenter = new MainPresenter({ mainSortContainer: tripEvents });

headerPresenter.init();
mainPresenter.init();
listPresenter.init();
