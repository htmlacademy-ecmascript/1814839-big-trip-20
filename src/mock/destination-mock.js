import { getRandomArrayElement } from '../utils.js';
import { CITIES, DESCRIPTION } from './consts-mock.js';

export default function generateDestination() {
  const city = getRandomArrayElement(CITIES);
  const id = crypto.randomUUID();

  return {
    id: id,
    name: city,
    description: DESCRIPTION,
    pictures: {
      'src': `https://loremflickr.com/g/320/240/${id}`,
      'description': `${city} description`
    }
  };
}
