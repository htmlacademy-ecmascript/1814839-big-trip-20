import TripPointView from '../view/trip-point-view.js';
import SortView from '../view/sort-view.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterView from '../view/filter-view.js';
import EditPointView from '../view/edit-point-view.js';
import ListView from '../view/list-view.js';
import { RenderPosition, render } from '../render.js';

export default class BoardPresenter {

  constructor({ pointsContainer, sortContainer, tripInfoContainer, filterContainer, editPointContainer, listContainer,
    destinationsModel, offersModel, pointsModel }) {
    //наверху в хэдере инфо о поездке
    this.tripInfoContainer = tripInfoContainer;
    //фильтрация
    this.filterContainer = filterContainer;
    //сортировка
    this.sortContainer = sortContainer;
    // контейнер для точек
    this.listContainer = listContainer;
    //редактирование точки
    this.editPointContainer = editPointContainer;
    //точки
    this.pointsContainer = pointsContainer;
    this.destinationModel = destinationsModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;
    this.points = [...pointsModel.get()];

  }

  //отрисовка инфы о трипе
  renderInfoComponent() {
    const tripInfoConponent = new TripInfoView();
    render(tripInfoConponent, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
  }

  //отрисовка фильтрации
  renderFilterComponent() {
    const filterComponent = new FilterView();
    render(filterComponent, this.filterContainer, RenderPosition.AFTERBEGIN);
  }

  //отрисовка сортировки
  renderSortComponent() {
    const sortComponent = new SortView();
    render(sortComponent, this.sortContainer);
  }

  //отрисовка контейнера для точек
  renderListComponent() {
    const listComponent = new ListView;
    render(listComponent, this.listContainer);
  }

  //отрисовка редактирования точки
  renderEditPointComponent() {
    const editPointComponent = new EditPointView();
    render(editPointComponent, this.editPointContainer, RenderPosition.AFTERBEGIN);
  }

  //отрисовка точек
  renderEvent(eventPoint) {
    const point = new TripPointView({
      point: eventPoint,
      pointDestination: this.destinationModel,
      pointOffers: this.offersModel
    });
    render(point, this.pointsContainer);
  }

  renderEvents() {
    this.points.forEach((point) => {
      this.renderEvent(point);
    });
  }

  init() {
    this.renderSortComponent();
    this.renderListComponent();
    this.renderInfoComponent();
    this.renderFilterComponent();
    this.renderEditPointComponent();
    this.renderEvents();
  }
}
