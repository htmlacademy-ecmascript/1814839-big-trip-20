import { getRandomInteger, getRandomArrayElement } from '../utils/common.js';
import { Price, OFFER_TITLES } from './consts-mock.js';

export default function generateOffer() {
  const id = crypto.randomUUID();
  return {
    id: id,
    title: getRandomArrayElement(OFFER_TITLES),
    price: `${getRandomInteger(Price.MIN, Price.MAX / 10)} €`
  };
}
