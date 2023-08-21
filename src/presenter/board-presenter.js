import TripPointView from '../view/trip-point-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import ListView from '../view/list-view.js';
import EditPointView from '../view/edit-point-view.js';
import NoPointView from '../view/no-point-view.js';
import { RenderPosition, replace, render } from '../framework/render.js';
import { generateFilters } from '../mock/filter-mock.js';

export default class BoardPresenter {

  #tripInfoContainer = null;
  #filterContainer = null;
  #sortContainer = null;
  #listContainer = null;
  #destinationModel = null;
  #board = null;
  #offersModel = null;
  #filters = [];

  constructor({ sortContainer, tripInfoContainer, filterContainer, listContainer,
    destinationsModel, pointsModel, offersModel }) {
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
    this.pointsModel = pointsModel;
    this.points = [...pointsModel.get()];
    this.#offersModel = offersModel.get();
    this.#filters = generateFilters();
    this.#board = null;
    this.#filters = generateFilters(this.points);
  }

  //отрисовка инфы о трипе
  #renderInfoComponent = () => {
    const tripInfoConponent = new TripInfoView();
    render(tripInfoConponent, this.#tripInfoContainer, RenderPosition.AFTERBEGIN);
  };

  //отрисовка вида без евентов
  #renderNoPoinView = () => {
    const noPointComponent = new NoPointView();
    render(noPointComponent, this.#listContainer);
  };

  //отрисовка фильтрации
  //настроить передачу фильтров
  #renderFilterComponent = () => {
    const filterComponent = new FilterView(this.#filters, this.filterContainer);
    render(filterComponent, this.#filterContainer, RenderPosition.AFTERBEGIN);
  };

  //отрисовка сортировки
  #renderSortComponent = () => {
    const sortComponent = new SortView();
    render(sortComponent, this.#sortContainer);
  };

  //отрисовка контейнера для точек
  #renderListComponent = () => {
    const listComponent = new ListView;
    render(listComponent, this.#listContainer);
    this.#board = document.querySelector('.trip-events__list');
  };

  //отрисовка одной точки
  #renderEvent = (eventPoint) => {
    const pointComponent = new TripPointView({
      point: eventPoint,
      pointDestination: this.#destinationModel,
      pointOffers: this.#offersModel,
      onEditClick: pointEditClickHandler,
    });

    const editPointComponent = new EditPointView({
      offersData: this.#offersModel,
      onSubmitClick: pointSubmitHandler,
      onResetClick: resetButtonClickHandler,
      onRollUpClick: rollUpButtonClickHandler,
    });

    const replacePointToForm = () => {
      replace(editPointComponent, pointComponent);
    };

    const replaceFormToPoint = () => {
      replace(pointComponent, editPointComponent);
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    function pointEditClickHandler() {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function pointSubmitHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function resetButtonClickHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function rollUpButtonClickHandler() {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    render(pointComponent, this.#board);
  };

  //отрисовка всех точек
  #renderEvents() {
    this.points.forEach((point) => {
      this.#renderEvent(point);
    });
  }

  //отрисовка доски полностью со всеми компонентами
  #renderBoard = () => {
    if (this.points.length <= 0) {
      this.#renderNoPoinView();
      return;
    }
    this.#renderSortComponent();
    this.#renderListComponent();
    this.#renderInfoComponent();
    this.#renderFilterComponent();
    this.#renderEvents();
  };

  init() {
    this.#renderBoard();
  }
}
