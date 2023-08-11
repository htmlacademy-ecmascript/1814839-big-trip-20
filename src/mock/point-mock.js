import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { Price, DATE_TO, DATE_FROM } from './consts-mock.js';

export default function generatePoint(type, destinationId, offerId) {
  const id = crypto.randomUUID();
  const price = getRandomInteger(Price.MIN, Price.MAX);
  const dateTo = getRandomArrayElement(DATE_TO);
  const dateFrom = getRandomArrayElement(DATE_FROM);

  return {
    id: id,
    type: type,
    dateFrom: dateFrom,
    dateTo: dateTo,
    destination: destinationId,
    basePrice: price,
    isFavorite: !!(getRandomInteger(0, 1)),
    offers: offerId
  };
}
