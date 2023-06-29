import { getRandomInteger } from '../utils.js';
import { Price } from './consts-mock.js';

export default function generateOffer() {
  const id = crypto.randomUUID();
  return {
    id: id,
    title: `${id} title`,
    price: getRandomInteger(Price.MIN, Price.MAX)
  };
}
