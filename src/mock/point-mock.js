import { getRandomInteger } from '../utils.js';
import { Price } from './consts-mock.js';

export default function generatePoint(type, destinationId, offerId) {
  const id = crypto.randomUUID();
  const price = getRandomInteger(Price.MIN, Price.MAX);

  return {
    id: id,
    type: type,
    dateFrom: 'Start DD MM YYYY',
    dateTo: 'End DD MM YYYY',
    destination: destinationId,
    basePrice: price,
    isFavorite: !!(getRandomInteger(0, 1)),
    offers: offerId
  };
}
