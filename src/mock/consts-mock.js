const CITIES = [
  'Geneva',
  'Charmonix',
  'Amsterdam',
  'Helsinki',
  'Oslo',
  'Kopenhagen',
  'Den Haag',
  'Rotterdam'
];

const TYPES = [
  'taxi',
  'bus',
  'train',
  'flight',
  'check-in',
  'sightseeing',
  'ship',
  'drive',
  'restaurant'
];

const OFFER_TITLES = [
  '1BlaBla1',
  '2BlaBla2',
  '3BlaBla3',
  '4BlaBla4',
  '5BlaBla5',
  '6BlaBla6'
];

const DESCRIPTION = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const DESTINATION_COUNT = 5;
const OFFER_COUNT = 9;
const POINT_COUNT = 5;

const Price = {
  MIN: 100,
  MAX: 10000
};


//попробовала разные варианты формата даты, все-равно показывает 0! почему?
const DATE_TO = [
  '2018-04-12 16:18'
];

const DATE_FROM = [
  '2018-04-13 19:18'
];

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;
const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;
const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

export {
  OFFER_TITLES,
  CITIES,
  DESCRIPTION,
  DESTINATION_COUNT,
  OFFER_COUNT,
  POINT_COUNT,
  TYPES,
  Price,
  DATE_TO,
  DATE_FROM,
  MSEC_IN_SEC,
  SEC_IN_MIN,
  MIN_IN_HOUR,
  HOUR_IN_DAY,
  MSEC_IN_HOUR,
  MSEC_IN_DAY
};
