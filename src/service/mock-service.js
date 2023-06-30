import { DESTINATION_COUNT, OFFER_COUNT, POINT_COUNT, TYPES } from '../mock/consts-mock.js';
import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import generateDestination from '../mock/destination-mock.js';
import generateOffer from '../mock/offer-mock.js';
import generatePoint from '../mock/point-mock.js';

export default class MockService {
  destinations = [];
  offers = [];
  points = [];

  constructor() {
    this.destinations = this.generateDestinationsArray;
    this.offers = this.generateOffersArray;
    this.points = this.generatePointsArray;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getPoints() {
    return this.points;
  }

  generateDestinationsArray() {
    return Array.from(
      { length: DESTINATION_COUNT },
      () => generateDestination()
    );
  }

  generateOffersArray() {
    return TYPES.map((type) => ({
      type,
      offers: Array.from(
        { length: getRandomInteger(0, OFFER_COUNT) },
        () => generateOffer(type))
    }));
  }

  generatePointsArray() {
    return Array.from(
      { length: POINT_COUNT },
      () => {
        const type = getRandomArrayElement(TYPES);
        const destination = getRandomArrayElement(this.destinations);

        const hasOffers = getRandomInteger(0, 1);

        const offersByType = this.offers.find((offerByType) => offerByType.type === type);

        const offersIds = (hasOffers)
          ? offersByType.offers
            .slice(0, OFFER_COUNT)
            .map((offer) => offer.id)
          : [];
        return generatePoint(type, destination.id, offersIds);
      }
    );
  }

}
