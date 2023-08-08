import TripPointView from '../view/trip-point-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import ListView from '../view/list-view.js';
import { RenderPosition, render } from '../framework/render.js';
// import EditPointView from '../view/edit-point-view.js';

export default class BoardPresenter {

  #tripInfoContainer = null;
  #filterContainer = null;
  #sortContainer = null;
  #listContainer = null;
  #destinationModel = null;
  #offersModel = null;
  #board = null;

  constructor({ sortContainer, tripInfoContainer, filterContainer, listContainer,
    destinationsModel, offersModel, pointsModel }) {
    //наверху в хэдере инфо о поездке
    this.#tripInfoContainer = tripInfoContainer;
    //фильтрация
    this.#filterContainer = filterContainer;
    //сортировка
    this.#sortContainer = sortContainer;
    // контейнер для точек
    this.#listContainer = listContainer;
    //точки
    this.#destinationModel = destinationsModel;
    this.#offersModel = offersModel.get();
    this.pointsModel = pointsModel;
    this.points = [...pointsModel.get()];

    this.#board = null;
  }

  //отрисовка редактирования точки
  // #renderEditPointComponent() {
  //   const editPointComponent = new EditPointView(this.#offersModel);
  //   render(editPointComponent, this.#board, RenderPosition.AFTERBEGIN);
  // }

  //отрисовка инфы о трипе
  #renderInfoComponent() {
    const tripInfoConponent = new TripInfoView();
    render(tripInfoConponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  //отрисовка фильтрации
  #renderFilterComponent() {
    const filterComponent = new FilterView();
    render(filterComponent, this.#filterContainer, RenderPosition.AFTERBEGIN);
  }

  //отрисовка сортировки
  #renderSortComponent() {
    const sortComponent = new SortView();
    render(sortComponent, this.#sortContainer);
  }

  //отрисовка контейнера для точек
  #renderListComponent() {
    const listComponent = new ListView;
    render(listComponent, this.#listContainer);
    this.#board = document.querySelector('.trip-events__list');
  }

  //отрисовка точек
  #renderEvent(eventPoint) {
    const point = new TripPointView({
      point: eventPoint,
      pointDestination: this.#destinationModel,
      pointOffers: this.offersModel
    });
    render(point, this.#board);
  }

  #renderEvents() {
    this.points.forEach((point) => {
      this.#renderEvent(point);
    });
  }

  init() {
    this.#renderSortComponent();
    this.#renderListComponent();
    this.#renderInfoComponent();
    this.#renderFilterComponent();
    this.#renderEvents();
    // this.#renderEditPointComponent();
  }
}
