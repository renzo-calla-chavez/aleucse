import NightBackground from './night/night';
import DayBackground from './day/day';

export const backgrounds = [
  'NightBackground', // night
  'DayBackground', // day
];

export const getBackgroundComponent = bg => {
  switch (bg) {
    case 'NightBackground':
      return NightBackground;
    case 'DayBackground':
      return DayBackground;
    default:
      return '';
  }
};
