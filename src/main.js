import BoardPresenter from './presenter/board-presenter.js';
import MockService from './service/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const header = document.querySelector('.page-header');
const tripMain = header.querySelector('.trip-main');
const tripControlsFilters = header.querySelector('.trip-controls__filters');
const main = document.querySelector('.page-main');
const tripEvents = main.querySelector('.trip-events');

const mockService = new MockService();
const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const boardPresenter = new BoardPresenter({
  sortContainer: tripEvents,
  listContainer: tripEvents,
  tripInfoContainer: tripMain,
  filterContainer: tripControlsFilters,
  pointsModel,
  offersModel,
  destinationsModel
});

boardPresenter.init();
