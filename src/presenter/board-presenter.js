

export default class BoardPresenter {

  constructor({ container, destinationModel, offersModel, pointsModel }) {
    this.container = container;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
    this.pointsModel = pointsModel;

    this.points = [...pointsModel.get()];
  }

  init() {
  }
}
