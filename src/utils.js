import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  MSEC_IN_HOUR, MSEC_IN_DAY
} from './mock/consts-mock.js';

dayjs.extend(duration);
dayjs.extend(relativeTime);

function getPointDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));
  let pointDuration = 0;

  switch (true) {
    case (timeDiff >= MSEC_IN_DAY):
      pointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm [M]');
      break;
    case (timeDiff >= MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('HH[H] mm [M]');
      break;
    case (timeDiff < MSEC_IN_HOUR):
      pointDuration = dayjs.duration(timeDiff).format('mm [M]');
      break;
  }
  return pointDuration;
}

//помоги понять, как мне принимаемую дату отформатировать с помощью dayjs? использовать метод parse? или есть способы лучше?
//и как это организовать в коде лучше?

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArrayElement(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

export { getRandomInteger, getRandomArrayElement, getPointDuration };
